var ac = require('acorn')
var logical = require('./logical_expression.js')



var t = ac.parse('0&&3').body[0].expression
t.left=0
t.right=3
assert.strictEqual(
    logical.exec(t),
    0
)


var t = ac.parse('0||3').body[0].expression
t.left=0
t.right=3
assert.strictEqual(
    logical.exec(t),
    3
)





