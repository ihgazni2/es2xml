var cmmn = require('./cmmn.js')

const ac = require("acorn")
var inputFn = "axios.min.js"
var code = fs.readFileSync(inputFn).toString()
var ast = ac.parse(code)
const e2x = require("es2xml")
const escodegen = require('escodegen')

var mat = e2x.esmat(ast)


var md = cmmn.creat_rpl2loc_mapping(mat)

var eles = cmmn.get_eles_by_type(mat,'VariableDeclaration')

var code = cmmn.ele2code(eles[2],ast)

var ele2 = eles[2]

var nd2 = get_node_via_rpl(ast,ele2.rpl)

> nd2code(nd2)
var E = n(3), C = n(4), R = Object.prototype.toString;


>
> nd2code(nd2.declarations[0])
E = n(3)



