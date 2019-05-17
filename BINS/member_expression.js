#!/usr/bin/env node

/*
attrib = `MemberExpression:['object','property','computed']`

d = { type: 'MemberExpression',
  start: 0,
  end: 15,
  object: { type: 'Identifier', start: 0, end: 8, name: 'document' },
  property: { type: 'Identifier', start: 9, end: 15, name: 'cookie' },
  computed: false }

nd = `Node {
  type: 'MemberExpression',
  start: 0,
  end: 15,
  object: Node { type: 'Identifier', start: 0, end: 8, name: 'document' },
  property: Node { type: 'Identifier', start: 9, end: 15, name: 'cookie' },
  computed: false }`


code = escodegen.generate(d)
rslt = `document.cookie`



nd = `Node {
  type: 'MemberExpression',
  start: 0,
  end: 6,
  object: Node { type: 'Identifier', start: 0, end: 1, name: 'x' },
  property: Node { type: 'Literal', start: 2, end: 5, value: 'a', raw: '"a"' },
  computed: true }`

d = { type: 'MemberExpression',
  start: 0,
  end: 6,
  object: { type: 'Identifier', start: 0, end: 1, name: 'x' },
  property: { type: 'Literal', start: 2, end: 5, value: 'a', raw: '"a"' },
  computed: true }

code = escodegen.generate(d)
rslt = `x['a']`
*/

const ac = require("acorn")
const esmat = require("../descmat.js")
const e2x = require("es2xml")
const exdict = require("exdict")
const escodegen = require('escodegen')
const fs = require("fs")
const elel = require("elist")

let inputFn = process.argv[2]

let object = process.argv[3]
let property = process.argv[4]
let computed = process.argv[5]

let outputFn = inputFn + "_"+object+"_"+property+"_"+computed
let code = fs.readFileSync(inputFn).toString()
let ast = ac.parse(code, {ranges: true})
let mat = esmat.getDescMat(ast)

function doNothing(obj) {
    return(obj)
}

function toJSON(obj) {
    return(JSON.parse(JSON.stringify(obj)))
}

function isMemberExpressionMatched(D) {
    let node = D.node
    let attribs = D.attribs
    let funcs = D.funcs
    let expects = elel.mapv(attribs,(k,D)=>(D[k]),[D])
    let reals = elel.mapv(attribs,(k,D)=>(D[k]),[node])
    reals = elel.mapfvo(reals,funcs)
    let rslt = true
    for(let i=0;i<reals.length;i++){
        let expect = expects[i]
        let real = reals[i]
        let r = (expect === undefined) ? true:(real===expect)
        if(r) {
        } else {
            rslt = false
            break;
        }
    }
    return(rslt)
}

function srch(ast,mat,type,condFunc,attribs,funcs) {
    let rslts = []
    for(let i=0;i<mat.length;i++){
        let layer = mat[i]
        for(let j=0;j<layer.length;j++){
            let ele = layer[j]
            if(ele.type.toLowerCase() === type.toLowerCase()){
                let node = exdict.getItemViaPathList0(ast,ele.rpl)
                let cond = condFunc({
                    node:node,
                    attribs:attribs,
                    funcs:funcs,
		    object:object,
		    property:property,
		    computed:computed
                })
                if(cond) {
                    rslts.push(ele)
                } else {
                }
            }
        }
    }
    rslts = rslts.map((r)=>(escodegen.generate(exdict.getItemViaPathList0(ast,r.rpl))))
    return(rslts)
}


var attribs = ['object','property','computed']
var funcs = [escodegen.generate,escodegen.generate,doNothing]


var rslts = srch(ast,mat,"MemberExpression",isMemberExpressionMatched,attribs,funcs)

let s = rslts.join("\n================================\n")

fs.writeFileSync(outputFn,s)



