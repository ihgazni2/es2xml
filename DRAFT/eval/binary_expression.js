
const md = {
    'binary_expression':'BinaryExpression',
    'BinaryExpression':'binary_expression'
}

const allks = ["left","operator","right"]
const chks = ["left","right"]

const binary_operators = [
    '+',
    '-',
    '*',
    '/',
    '%',
    '**'
]


function binary_expression(nd) {
    let left = nd.left
    let right = nd.right
    let op = nd.operator
    let val;
    if(op==='+') {
        val = left + right
    } else if(op === '-') {
        val = left - right
    } else if(op === '*') {
        val = left * right
    } else if(op === '/') {
        val = left / right
    } else if(op === '%') {
        val = left % right
    } else if(op === '**') {
        val = left ** right
    } else {
    }
    return(literal.value2literal(val))
}

module.exports = {
    binary_operators:binary_operators,
    binary_expression:binary_expression,
}
