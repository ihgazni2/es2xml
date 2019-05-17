#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = ["method","shorthand","computed","kind","key","value"]
let type = "ObjectExpression"
let funcs = [engine1.doNothing,engine1.doNothing,engine1.doNothing,engine1.doNothing,engine1.maybeNodeToCode,engine1.maybeNodeToCode]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs
})

