const util = require('util')


const md = {
    'conditional_expression':'ConditionalExpression',
    'ConditionalExpression':'conditional_expression'
}

const allks = ["test","consequent","alternate"]
const chks = ["test","consequent","alternate"]



function is_conditional_expression(nd) {
    return(nd.type === 'ConditionalExpression')
}



function exec(nd) {
    //argument already be handled 
    let test = nd.test
    let consequent = nd.consequent
    let alternate = nd.alternate
    return(test?consequent:alternate)
}


module.exports = {
    is_conditional_expression,
    exec,
}

