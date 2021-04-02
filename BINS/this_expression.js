#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = []
let type = "ThisStatement"
let funcs = []

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs
})

