#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = ["local"]
let type = "ImportNamespaceSpecifier"
let funcs = [engine1.maybeNodeToCode]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs,
    sourceType:"module"
})

