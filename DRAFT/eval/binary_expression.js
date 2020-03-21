
const md = {
    'binary_expression':'BinaryExpression',
    'BinaryExpression':'binary_expression'
}

const allks = ["left","operator","right"]
const chks = ["left","right"]
const leafks = ["operator"]

const binary_operators = [
    '+',
    '-',
    '*',
    '/',
    '%',
    '**',
    '==',
    '===',
    '!=',
    '!==',
    '>',
    '<',
    '>=',
    '<=',
    '&',
    '|',
    '^',
    '<<',
    '>>',
    '>>>'
]

const binary_operator_names = [
    'add',
    'sub',
    'mul',
    'div',
    'mod',
    'pow',
    'eq',
    'ieq',
    'neq',
    'nieq',
    'gt',
    'lt',
    'ge',
    'le',
    'band',
    'bor',
    'bxor',
    'lshift',
    'rshift',
    'urshift'
]


function exec_add(lval,rval) {
    return(lval + rval)
}

function exec_sub(lval,rval) {
    return(lval - rval)
}

function exec_mul(lval,rval) {
    return(lval * rval)
}

function exec_div(lval,rval) {
    return(lval / rval)
}

function exec_mod(lval,rval) {
    return(lval % rval)
}

function exec_pow(lval,rval) {
    return(lval ** rval)
}

function exec_eq(lval,rval) {
    return(lval == rval)
}

function exec_ieq(lval,rval) {
    return(lval === rval)
}

function exec_neq(lval,rval) {
    return(lval != rval)
}

function exec_nieq(lval,rval) {
    return(lval !== rval)
}

function exec_gt(lval,rval) {
    return(lval > rval)
}

function exec_lt(lval,rval) {
    return(lval < rval)
}

function exec_ge(lval,rval) {
    return(lval >= rval)
}

function exec_le(lval,rval) {
    return(lval <= rval)
}

function exec_band(lval,rval) {
    return(lval & rval)
}

function exec_bor(lval,rval) {
    return(lval | rval)
}

function exec_bxor(lval,rval) {
    return(lval ^ rval)
}

function exec_lshift(lval,rval) {
    return(lval << rval)
}

function exec_rshift(lval,rval) {
    return(lval >> rval)
}

function exec_urshift(lval,rval) {
    return(lval >>> rval )
}

function exec_in(lval,rval) {
    return(lval in rval)
}

function exec_instanceof(lval,rval) {
    return(lval instanceof rval)
}

function exec(nd){
    let lval = nd.left
    let rval = nd.right
    let rslt;
    if(nd.operator === '+') {
        rslt = exec_add(lval,rval)            
    } else if(nd.operator === '-') {
        rslt = exec_sub(lval,rval)
    } else if(nd.operator === '*'){
        rslt = exec_mul(lval,rval)
    } else if(nd.operator === '/') {
        rslt = exec_div(lval,rval)
    } else if(nd.operator === '%') {
        rslt = exec_mod(lval,rval)
    } else if(nd.operator === '**') {
        rslt = exec_pow(lval,rval)
    } else if(nd.operator === '==') {
        rslt = exec_eq(lval,rval)
    } else if(nd.operator === '===') {
        rslt = exec_ieq(lval,rval)
    } else if(nd.operator === '!=') {
        rslt = exec_neq(lval,rval)
    } else if(nd.operator === '!==') {
        rslt = exec_nieq(lval,rval)
    } else if(nd.operator === '>') {
        rslt = exec_gt(lval,rval)
    } else if(nd.operator === '<') {
        rslt = exec_lt(lval,rval)
    } else if(nd.operator === '>=') {
        rslt = exec_ge(lval,rval)
    } else if(nd.operator === '<=') {
        rslt = exec_le(lval,rval)
    } else if(nd.operator === '&') {
        rslt = exec_band(lval,rval)
    } else if(nd.operator === '|') {
        rslt = exec_bor(lval,rval)
    } else if(nd.operator === '^') {
        rslt = exec_bxor(lval,rval)
    } else if(nd.operator === '<<') {
        rslt = exec_lshift(lval,rval)
    } else if(nd.operator === '>>') {
        rslt = exec_rshift(lval,rval)
    } else if(nd.operator === '>>>') {
        rslt = exec_urshift(lval,rval)
    } else if(nd.operator === 'in') {
        rslt = exec_in(lval,rval)
    } else if(nd.operator === 'instanceof') {
        rslt = exec_instanceof(lval,rval)
    } else {
         throw('not_supported')
    }
    return(rslt)
}


function is_binary_expression(nd) {
    return(nd.type === 'BinaryExpression')
}

module.exports = {
    binary_operators,
    binary_operator_names,
    is_binary_expression,
    exec,
}
