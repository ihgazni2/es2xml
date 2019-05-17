#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = ["body"]
let type = "BlockStatement"
let funcs = [engine1.maybeNodeToCode]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs
})

