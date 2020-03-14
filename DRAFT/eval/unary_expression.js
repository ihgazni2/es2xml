const util = require('util')


const md = {
    'unary_expression':'UnaryExpression',
    'UnaryExpression':'unary_expression'
}

const allks = ["prefix","operator","argument"]
const chks = ["argument"]
const unary_operators = [
    '+','-','!','~','typeof','delete','void'    
]

const unary_operator_names = [
    'unary_plus',
    'unary_negation',
    'logical_not',
    'bitwise_not',
    'typeof',
    'delete',
    'void',
]


function is_unary_expression(nd) {
    return(nd.type === 'UnaryExpression')
}


function exec_unary_plus(val) {
    return(+val)
}

function exec_unary_negation(val){
    return(-val)
}

function exec_logical_not(val) {
    return(!val)
}


function exec_bitwise_not(val) {
    return(~val)    
}

function exec_typeof(val) {
    return(typeof(val))
}

function exec_delete(id,ctx) {
    //傳入的val 要麽是 literal,要麽是帶有scope鏈的
    return(delete(ctx[id]))
}

function exec_void(val) {
    return(void(val))
}



function exec(nd,ctx) {
    //argument already be handled 
    if(nd.operator === '+') {
        return(exec_unary_plus(nd.argument))
    } else if(nd.operator === '-') {
        return(exec_unary_negation(nd.argument))
    } else if(nd.operator === '!') {
        return(exec_logical_not(nd.argument))
    } else if(nd.operator === '~') {
        return(exec_bitwise_not(nd.argument))
    } else if(nd.operator === 'typeof') {
        return(exec_typeof(nd.argument))
    } else if(nd.operator === 'delete') {
        return(exec_delete(nd.argument,ctx))
    } else if(nd.operator === 'void') {
        return(exec_void(nd.argument))
    } else {
        throw('not_supported')
    }
}


module.exports = {
    is_unary_expression,
    exec,
}

