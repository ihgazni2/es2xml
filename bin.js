#!/usr/bin/env node
const e2x = require('./es2xml')
const fs = require('fs')
const ac = require("acorn")

let inputFn = process.argv[2]
let outputFn = process.argv[3]

let code = fs.readFileSync(inputFn).toString()
let ast = ac.parse(code)
let xml = e2x.xml(ast)

fs.writeFileSync(outputFn,xml)

