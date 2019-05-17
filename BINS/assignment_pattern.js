#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = ["left","right"]
let type = "AssignmentPattern"
let funcs = [engine1.doNothing,engine1.doNothing]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs
})

