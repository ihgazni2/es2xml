var ac = require('acorn')
var binary = require('./binary_expression.js')
var t = ac.parse('1+1').body[0].expression
t.left=1
t.right=1
assert.equal(
    binary.exec(t),
    2
)


var t = ac.parse('1-1').body[0].expression
t.left=1
t.right=1
assert.equal(
    binary.exec(t),
    0
)


var t = ac.parse('1*1').body[0].expression
t.left=1
t.right=1
assert.equal(
    binary.exec(t),
    1
)


var t = ac.parse('1/1').body[0].expression
t.left=1
t.right=1
assert.equal(
    binary.exec(t),
    1
)


var t = ac.parse('1%1').body[0].expression
t.left=1
t.right=1
assert.equal(
    binary.exec(t),
    0
)


var t = ac.parse('2**2').body[0].expression
t.left=2
t.right=2
assert.equal(
    binary.exec(t),
    4
)

var t = ac.parse('2==2').body[0].expression
t.left=2
t.right=2
assert.strictEqual(
    binary.exec(t),
    true
)


var t = ac.parse('2===2').body[0].expression
t.left=2
t.right=2
assert.strictEqual(
    binary.exec(t),
    true
)


var t = ac.parse('2!=2').body[0].expression
t.left=2
t.right=2
assert.strictEqual(
    binary.exec(t),
    false
)


var t = ac.parse('2!==3').body[0].expression
t.left=2
t.right=3
assert.strictEqual(
    binary.exec(t),
    true
)



var t = ac.parse('2<3').body[0].expression
t.left=2
t.right=3
assert.strictEqual(
    binary.exec(t),
    true
)


var t = ac.parse('2>3').body[0].expression
t.left=2
t.right=3
assert.strictEqual(
    binary.exec(t),
    false
)

var t = ac.parse('2<=3').body[0].expression
t.left=2
t.right=3
assert.strictEqual(
    binary.exec(t),
    true
)


var t = ac.parse('2>=3').body[0].expression
t.left=2
t.right=3
assert.strictEqual(
    binary.exec(t),
    false
)



var t = ac.parse('2&3').body[0].expression
t.left=2
t.right=3
assert.strictEqual(
    binary.exec(t),
    2
)


var t = ac.parse('2|3').body[0].expression
t.left=2
t.right=3
assert.strictEqual(
    binary.exec(t),
    3
)


var t = ac.parse('2^3').body[0].expression
t.left=2
t.right=3
assert.strictEqual(
    binary.exec(t),
    1
)


var t = ac.parse('2<<3').body[0].expression
t.left=2
t.right=3
assert.strictEqual(
    binary.exec(t),
    16
)


var t = ac.parse('1000>>3').body[0].expression
t.left=1000
t.right=3
assert.strictEqual(
    binary.exec(t),
    1000>>3
)


var t = ac.parse('-1000>>>3').body[0].expression
t.left=-1000
t.right=3
assert.strictEqual(
    binary.exec(t),
    -1000>>>3
)


var t = ac.parse('1 in [100,200]').body[0].expression
t.left= 1
t.right= [100,200]
assert.strictEqual(
    binary.exec(t),
    true
)


var t = ac.parse('t instanceof ac.Node').body[0].expression
t.left= t
t.right= ac.Node
assert.strictEqual(
    binary.exec(t),
    true
)



