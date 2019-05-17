#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = []
let type = "Super"
let funcs = []

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs
})

