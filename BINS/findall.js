#!/usr/bin/env node
const fs = require('fs')
const ac = require("acorn")
const escodegen = require("escodegen")
const exdict = require("./exdict")
const esmat = require("../descmat.js")

let inputFn = process.argv[2]
let type = process.argv[3]
let outputFn = type+"."+inputFn
let code = fs.readFileSync(inputFn).toString()
let ast = ac.parse(code, {ranges: true})
let mat = esmat.getDescMat(ast)

function findAll(ast,mat,type) {
    let rslts = []
    for(let i=0;i<mat.length;i++){
        let layer = mat[i]
        for(let j=0;j<layer.length;j++){
            let ele = layer[j]
            if(ele.type.toLowerCase() === type.toLowerCase()){
                rslts.push(ele)
            }
        }
    }
    rslts = rslts.map((r)=>(escodegen.generate(exdict.getItemViaPathList0(ast,r.rpl))))
    return(rslts)
}

let rslts = findAll(ast,mat,type)

let s = rslts.join("\n================================\n")

fs.writeFileSync(outputFn,s)

