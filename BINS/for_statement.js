#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = ["init","test","update","body"]
let type = "ForStatement"
let funcs = [engine1.maybeNodeToCode,engine1.maybeNodeToCode,engine1.maybeNodeToCode,engine1.maybeNodeToCode]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs
})

