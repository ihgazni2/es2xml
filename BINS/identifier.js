#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = ["name"]
let type = "Identifier"
let funcs = [engine1.doNothing]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs
})


