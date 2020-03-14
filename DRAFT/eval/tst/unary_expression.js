var ac = require('acorn')
var unary = require('./unary_expression.js')
var t = ac.parse('+1').body[0].expression
t.argument=1
unary.exec(t) === 1

var t = ac.parse('-1').body[0].expression
t.argument=1
unary.exec(t) === -1


var t = ac.parse('!1').body[0].expression
t.argument=1
unary.exec(t) === false

var t = ac.parse('~10').body[0].expression
t.argument=10
unary.exec(t) === ~10


var t = ac.parse('typeof(1)').body[0].expression
t.argument=1
unary.exec(t) === typeof(1)

var t = ac.parse('void(1)').body[0].expression
t.argument=1
unary.exec(t) === void(1)

var d={}
d.xxxx = 1000
var t = ac.parse('delete(d.xxxx)').body[0].expression
t.argument= 'xxxx'
unary.exec(t,d)
d.xxxx
