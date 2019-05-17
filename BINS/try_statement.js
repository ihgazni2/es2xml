#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = ["block","handler","finalizer"]
let type = "TryStatement"
let funcs = [engine1.maybeNodeToCode,engine1.maybeNodeToCode,engine1.maybeNodeToCode]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs
})

