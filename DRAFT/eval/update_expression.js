const util = require('util')


const md = {
    'unary_expression':'UnaryExpression',
    'UnaryExpression':'unary_expression'
}

const allks = ["prefix","operator","argument"]
const chks = []
const unary_operators = [
    '+','-','!','++','--','~'    
]

const unary_operator_names = [
    'unary_plus',
    'unary_negation',
    'logical_not',
    'increment',
    'decrement',
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

function exec_prefix_increment(val) {
    //傳入的val 要麽是 literal,要麽是帶有scope鏈的
    return(++val)
}

function exec_prefix_decrement(val) {
    //傳入的val 要麽是 literal,要麽是帶有scope鏈的
    return(--val)
}

function exec_suffix_increment(val) {
    //傳入的val 要麽是 literal,要麽是帶有scope鏈的
    return(val++)
}

function exec_suffix_decrement(val) {
    //傳入的val 要麽是 literal,要麽是帶有scope鏈的
    return(val--)
}


function exec_bitwise_not(val) {
    return(~val)    
}

function exec_typeof(val) {
    return(typeof(val))
}

function exec_delete(val) {
    //傳入的val 要麽是 literal,要麽是帶有scope鏈的
    return(delete val)
}

function exec(nd) {
    //argument already be handled 
    if(nd.operator === '+') {
        return(exec_unary_plus(nd.argument))
    } else if(nd.operator === '-') {
        return(exec_unary_negation(nd.argument))
    } else if(nd.operator === '!') {
        return(exec_logical_not(nd.argument))
    }  else if(nd.operator === '++') {
        if(nd.prefix === true) {
            return(exec_prefix_increment(nd.argument))
        } else {
            return(exec_suffix_increment(nd.argument))
        }     
    } else if(nd.operator === '--') {
        if(nd.prefix === true){
            return(exec_prefix_decrement(nd.argument))    
        } else {
            return(exec_suffix_decrement(nd.argument))
        }
    } else if(nd.operator === '~') {
        return(exec_bitwise_not(nd.argument))
    } else if(nd.operator === 'typeof') {
        return(exec_typeof(nd.argument))
    } else if(nd.operator === 'delete') {
        return(exec_delete(nd.argument))
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

