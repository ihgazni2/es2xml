const ac = require("acorn")
const {Parser} = require('acorn');
const privateMethods = require('acorn-private-methods');
let P=Parser.extend(privateMethods);
const classFields = require('acorn-class-fields');
P=P.extend(classFields);
const staticClassFeatures = require('acorn-static-class-features');
P=P.extend(staticClassFeatures);
const stage3 = require('acorn-stage3');
P=P.extend(stage3);


module.exports = {
    parse:(input,opts) =>P.parse(input,opts) 
}
