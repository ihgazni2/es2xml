var cmmn = require('./cmmn.js')

const ac = require("acorn")
var inputFn = "axios.min.js"
var code = fs.readFileSync(inputFn).toString()
var ast = ac.parse(code)
const e2x = require("es2xml")
const escodegen = require('escodegen')

var mat = e2x.esmat(ast)


var md = cmmn.creat_rpl2loc_mapping(mat)

var eles = cmmn.get_eles_by_type(mat,'VariableDeclarator')

var code = cmmn.ele2code(eles[2],ast)

var ele2 = eles[2]

var nd2 = get_node_via_rpl(ast,ele2.rpl)

function get_variable_declarations(mat) {
    return(cmmn.get_eles_by_type(mat,'VariableDeclaration'))
}

function get_variable_declarators(mat) {
    return(cmmn.get_eles_by_type(mat,'VariableDeclarator'))
}

function get_var_kind(ele,mat) {
    let parent = get_parent(ele,mat)
    let kind = parent.attribs.kind
    return(kind)
}



