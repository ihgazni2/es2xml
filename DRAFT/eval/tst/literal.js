var ac = require('acorn')
var literal = require('./literal.js')
var t = ac.parse(1).body[0].expression
literal.exec(t) === 1
var t = ac.parse('"str"').body[0].expression
literal.exec(t) === "str"
var t = ac.parse('true').body[0].expression
literal.exec(t) === true
var t = ac.parse('null').body[0].expression
literal.exec(t) === null
var t = ac.parse('/[a]+/gi').body[0].expression
literal.exec(t) 


