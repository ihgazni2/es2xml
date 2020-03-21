var ac = require('acorn')
var conditional = require('./conditional_expression.js')
var t = ac.parse('1?2:3').body[0].expression
t.test=1
t.consequent=2
t.alternate=3
assert.equal(
    conditional.exec(t),
    2
)


