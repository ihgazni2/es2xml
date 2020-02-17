const util = require('util')

const md = {
    'literal':'Literal',
    'Literal':'literal'
}

const allks = ["value","raw","regex"]
const chks = []

const literals = ['string','number','regexp','true','false','null']

function is_litral(nd) {
    return(nd.type === 'Literal')
}

function is_regex(nd) {
    let cond0 = (nd.type === 'Literal')
    let cond1 = (nd.regex !== undefined)
    return(cond0 && cond1)
}

function get_raw(val) {
    if(val === null) {
        return('null')
    } else {
        return(val.toString())
    }
}

function get_regex(val) {
    return({
        pattrn:val.source,
        flags:val.flags
    })
}

function value2literal(val) {
    let d = {}
    d.value = val
    d.raw = get_raw(val)
    if(util.isRegExp(val)) {
        d.regex = get_regex(val)
    } else {
    }
    return(d)
}

module.exports = {
    value2literal:value2literal
}

