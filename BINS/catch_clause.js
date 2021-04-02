#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = ["param","body"]
let type = "CatchClause"
let funcs = [engine1.maybeNodeToCode,engine1.maybeNodeToCode]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs
})


