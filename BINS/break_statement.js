const engine1 = require("./bin_engine_1.js")

let attribs = ["label"]
let type = "BreakStatement"
let funcs = [engine1.maybeNodeToCode,engine1.maybeNodeToCode]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs
})

