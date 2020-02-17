
var cmmn = require('./cmmn.js')

const ac = require("acorn")
var inputFn = "axios.min.js"
var code = fs.readFileSync(inputFn).toString()
var ast = ac.parse(code)
const e2x = require("es2xml")
const escodegen = require('escodegen')
const escope = require('escope')


var scm = escope.analyze(ast)
var mat = e2x.esmat(ast)

var vars = cmmn.get_variables(mat)
var var_tbl = cmmn.get_var_tbl(mat)
var var_rows = cmmn.cols2rows(var_tbl.cols)

var lits = cmmn.get_literals(mat)
var lit_tbl = cmmn.get_lit_tbl(mat)
var lit_rows = cmmn.cols2rows(lit_tbl.cols)

var ids = cmmn.get_identifiers(mat)
var id_tbl = cmmn.get_id_tbl(mat)
id_tbl = cmmn.var_tbl_fill_id_tbl(var_tbl,id_tbl)
var id_rows = cmmn.cols2rows(id_tbl.cols)


var funcs = cmmn.get_funcs(mat)
var func_tbl = cmmn.get_func_tbl(mat)
func_tbl = cmmn.func_tbl_fill_id_tbl(func_tbl,id_tbl)
var func_rows = cmmn.cols2rows(func_tbl.cols)



