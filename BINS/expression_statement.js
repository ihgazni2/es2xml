#!/usr/bin/env node

/*
attrib = `FunctionDeclaration:['id','expression','generator','async','params','body']`

*/

const ac = require("../ac")
const esmat = require("../descmat.js")
const e2x = require("es2xml")
const exdict = require("../exdict")
const escodegen = require('escodegen')
const fs = require("fs")
const elel = require("../elist")


/////////////////

//var paramsDict = {}
/////////////////
function fillParamsDict(D){
    let argv = D.argv
    let attribs = D.attribs
    let paramsDict = {}
    for(let i=0;i<attribs.length;i++){
	k = attribs[i]
        paramsDict[k] = argv[i+3]
    }
    return(paramsDict)
}

/*
let id = process.argv[3]
let expression = process.argv[4]
let generator = process.argv[5]
let async = process.argv[6]
let params = process.argv[7]
let body = process.argv[8]
*/

//


function updateParamsDict(paramsDict) {
    for(let k in paramsDict){
        if(paramsDict[k] === "") {
	    paramsDict[k] = undefined
	} else {
	}
    }
    return(paramsDict)
}


/*
if(id === "") {
    id = undefined
}

if(expression === "") {
    expression = undefined
}

if(generator === "") {
    generator = undefined
}

if(async === "") {
    async = undefined
}

if(params === "") {
    params = undefined
}

if(body === "") {
    body = undefined
}
*/

/*
let outputFn = inputFn + "_" + id + "_" + expression + "_" + generator + "_" + async + "_" + params + "_" + body
*/

function getOutputFn(D) {
    let inputFn = D.inputFn
    let outputFn = inputFn + "_"
    let paramsDict = D.paramsDict
    let attribs = D.attribs
    for(let i=0;i<attribs.length;i++){
        k = attribs[i]
        outputFn = outputFn + '_' +paramsDict[k] 
    }
    return(outputFn)
}


//


let inputFn = process.argv[2]

/////////////////
let attribs = ['id','expression','generator','async','params','body']


let paramsDict = fillParamsDict({
    argv:process.argv,
    attribs:attribs
})



paramsDict = updateParamsDict(paramsDict)


let outputFn = getOutputFn({
    attribs:attribs,
    inputFn:inputFn,
    paramsDict:paramsDict
})

//
let code = fs.readFileSync(inputFn).toString()
let ast = ac.parse(code, {ranges: true})
let mat = esmat.getDescMat(ast)

function doNothing(obj) {
    return(obj)
}

function toJSON(obj) {
    return(JSON.parse(JSON.stringify(obj)))
}

function isMatched(D) {
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

function srch(ast,mat,type,condFunc,attribs,funcs,paramsDict) {
    let rslts = []
    for(let i=0;i<mat.length;i++){
        let layer = mat[i]
        for(let j=0;j<layer.length;j++){
            let ele = layer[j]
            if(ele.type.toLowerCase() === type.toLowerCase()){
                let node = exdict.getItemViaPathList0(ast,ele.rpl)
		let D = {
                    node:node,
                    attribs:attribs,
                    funcs:funcs,
                }
                D = exdict.update(D,paramsDict)
                let cond = condFunc(D)
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

function paramsToCode(params) {
    params = params.map(escodegen.generate)
    let s = params.join(',')
    return(s)
}



attribs = []
var funcs = [doNothing]

var rslts = srch(ast,mat,"ExpressionStatement",isMatched,attribs,funcs)
let s = rslts.join("\n================================\n")
fs.writeFileSync(outputFn,s)



