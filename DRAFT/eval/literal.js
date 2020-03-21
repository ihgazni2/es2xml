const util = require('util')

const md = {
    'literal':'Literal',
    'Literal':'literal'
}

const allks = ["value","raw","regex"]
const chks = []
const regexks =["pattern","flags"]
const literal_names = ['string','number','regexp','true','false','null']

function is_literal(nd) {
    return(nd.type === 'Literal')
}

function is_regex(nd) {
    let cond0 = (nd.type === 'Literal')
    let cond1 = (nd.regex !== undefined)
    return(cond0 && cond1)
}


function exec(nd) {
    return(nd.value)
}


function other2raw(val) {
    if(val === null) {
        return('null')
    } else {
        return(val.toString())
    }
}

function regex2raw(regex) {
    return({
        pattern:regex.source,
        flags:regex.flags
    })
}

function val2raw(val) {
    if(util.isRegExp(val)) {
        return(regex2raw(val)) 
    } else {
        return(other2raw(val))
    }     
}


function val2nd(val) {
    let d = {}
    d.value = val
    d.raw = val2raw(val) 
    return(d)
}

module.exports = {
    is_literal,
    val2nd,
    exec,
}

