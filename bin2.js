#!/usr/bin/env node
const srch = require('./srch')
const fs = require('fs')
const ac = require("acorn")

let inputFn = process.argv[2]
let type = process.argv[3]
let which = process.argv[4]
let outputFn = type+"_"+which


let code = fs.readFileSync(inputFn).toString()
let ast =  ac.parse(code, {ranges: true})

let nodes = srch.viaTypeEngine(ast,type)
let codes = srch.getCodeChain(ast,nodes[which])

let s = ""
for(let i=0;i<codes.length;i++) {
    s = s + codes[i] + "\n-----------------------------------\n"
}

fs.writeFileSync(outputFn,s)

