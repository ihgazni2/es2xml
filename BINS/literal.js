#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = ["value","raw"]
let type = "Literal"
let funcs = [engine1.doNothing,engine1.doNothing]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs
})


