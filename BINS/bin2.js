#!/usr/bin/env node
const srch = require('../srch.js')
const fs = require('fs')
const ac = require("../ac")

let inputFn = process.argv[2]
let type = process.argv[3]
let which = process.argv[4]
let depth = process.argv[5]
if(depth === undefined){
    depth = 2**32
}else{
}
let outputFn = type+"_"+which


let code = fs.readFileSync(inputFn).toString()
let ast =  ac.parse(code, {ranges: true})

let nodes = srch.viaTypeEngine(ast,type)
let codes = srch.getCodeChain(ast,nodes[which],depth)

let s = ""
for(let i=0;i<codes.length;i++) {
    s = s + codes[i] + "\n-----------------------------------\n"
}

fs.writeFileSync(outputFn,s)

