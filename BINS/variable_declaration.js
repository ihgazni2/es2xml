#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = ["kind","declarations"]
let type = "VariableDeclaration"
let funcs = [engine1.doNothing,engine1.maybeNodeToCode]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs
})


