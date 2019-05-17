#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = ["value","raw","regex"]
let type = "Literal"
let funcs = [engine1.doNothing,engine1.doNothing,engine1.doNothing]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs,
    srchFunc:engine1.srchRegExpLiteral
})


