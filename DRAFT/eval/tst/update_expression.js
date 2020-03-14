var ac = require('acorn')
var update = require('./update_expression.js')


var xxxx = 2000;
var t = ac.parse('++xxxx').body[0].expression
t.argument= 'xxxx'
update.exec(t,global) === 2001
xxxx === 2001

var d ={}
d.xxxx = 2000;
var t = ac.parse('++xxxx').body[0].expression
t.argument= 'xxxx'
update.exec(t,d) === 2001
d.xxxx === 2001


var xxxx = 2000;
var t = ac.parse('xxxx++').body[0].expression
t.argument= 'xxxx'
update.exec(t,global) === 2000
xxxx === 2001

var d ={}
d.xxxx = 2000;
var t = ac.parse('xxxx++').body[0].expression
t.argument= 'xxxx'
update.exec(t,d) === 2000
d.xxxx === 2001


var xxxx = 2000;
var t = ac.parse('--xxxx').body[0].expression
t.argument= 'xxxx'
update.exec(t,global) === 1999
xxxx === 1999

var d ={}
d.xxxx = 2000;
var t = ac.parse('--xxxx').body[0].expression
t.argument= 'xxxx'
update.exec(t,d) === 1999
d.xxxx === 1999



var xxxx = 2000;
var t = ac.parse('xxxx--').body[0].expression
t.argument= 'xxxx'
update.exec(t,global) === 2000
xxxx === 1999

var d ={}
d.xxxx = 2000;
var t = ac.parse('xxxx--').body[0].expression
t.argument= 'xxxx'
update.exec(t,d) === 2000 
d.xxxx === 1999



