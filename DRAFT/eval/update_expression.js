const util = require('util')


const md = {
    'update_expression':'UpdateExpression',
    'UpdateExpression':'update_expression'
}

const allks = ["prefix","operator","argument"]
const chks = ['argument']
const update_operators = [
    '++','--'    
]

const update_operator_names = [
    ['prefix_increment','suffix_increment']
    ['prefix_decrement','suffix_decrement']
]


function is_update_expression(nd) {
    return(nd.type === 'UpdateExpression')
}




function exec_prefix_increment(id,ctx) {
    //傳入的ctx[id] 要麽是 literal,要麽是帶有scope鏈的
    return(++ctx[id])
}

function exec_prefix_decrement(id,ctx) {
    //傳入的ctx[id] 要麽是 literal,要麽是帶有scope鏈的
    return(--ctx[id])
}

function exec_suffix_increment(id,ctx) {
    //傳入的ctx[id] 要麽是 literal,要麽是帶有scope鏈的
    return(ctx[id]++)
}

function exec_suffix_decrement(id,ctx) {
    //傳入的ctx[id] 要麽是 literal,要麽是帶有scope鏈的
    return(ctx[id]--)
}



function exec(nd,ctx) {
    //argument already be handled 
    if(nd.operator === '++') {
        if(nd.prefix === true) {
            return(exec_prefix_increment(nd.argument,ctx))
        } else {
            return(exec_suffix_increment(nd.argument,ctx))
        }     
    } else if(nd.operator === '--') {
        if(nd.prefix === true){
            return(exec_prefix_decrement(nd.argument,ctx))    
        } else {
            return(exec_suffix_decrement(nd.argument,ctx))
        }
    } else {
        throw('not_supported')
    }
}


module.exports = {
    is_update_expression,
    exec,
}

