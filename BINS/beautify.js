#!/usr/bin/env node
const fs = require('fs')
const ac = require("acorn")
const escodegen = require("escodegen")

let inputFn = process.argv[2]
let outputFn = "beauty."+inputFn

let code = fs.readFileSync(inputFn).toString()
let ast = ac.parse(code)
let s = escodegen.generate(ast)

fs.writeFileSync(outputFn,s)

