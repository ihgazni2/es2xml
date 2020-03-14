const engine1 = require("./bin_engine_1.js")

let attribs = ["label","body"]
let type = "LabeledStatement"
let funcs = [engine1.maybeNodeToCode,engine1.maybeNodeToCode]

engine1.go({
    attribs:attribs,
    type:type,
    funcs:funcs
})

