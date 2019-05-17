#!/usr/bin/env node
const engine1 = require("./bin_engine_1.js")

let attribs = ["declaration","specifiers","source"]
let type = "ExportNamedDeclaration"
let funcs = [engine1.maybeNodeToCode,engine1.maybeNodeToCode,engine1.doNothing]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs,
    sourceType:"module"
})

