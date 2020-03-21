
const md = {
    'logical_expression':'LogicalExpression',
    'LogicalExpression':'logical_expression'
}

const allks = ["left","operator","right"]
const chks = ["left","right"]
const leafks = ["operator"]

const logical_operators = [
    '&&',
    '||',
    '??'
]

const logical_operator_names = [
    'land',
    'lor',
    'nc',
]


function exec_land(lval,rval) {
    return(lval && rval)
}

function exec_lor(lval,rval) {
    return(lval || rval)
}

/*
// nullish colescing is not supported in nodejs

function exec_bxor(lval,rval) {
    return(lval ?? rval)
}
*/

function exec(nd){
    let lval = nd.left
    let rval = nd.right
    let rslt;
    if(nd.operator === '&&') {
        rslt = exec_land(lval,rval)
    } else if(nd.operator === '||') {
        rslt = exec_lor(lval,rval)
    } else if(nd.operator === '??') {
       // nullish colescing is not supported in nodejs  
       // rslt = exec_nc(lval,rval)
    } else {
         throw('not_supported')
    }
    return(rslt)
}


function is_logical_expression(nd) {
    return(nd.type === 'LogicalExpression')
}

module.exports = {
    logical_operators,
    logical_operator_names,
    is_logical_expression,
    exec,
}
