//
var e2x = require("es2xml")
var acorn = require("acorn")
var code = `function isNewLine(code, ecma2019String) {
  return code === 10 || code === 13 || !ecma2019String && (code === 0x2028 || code === 0x2029);
}`
var ast = acorn.parse(code)
console.log(e2x.xml(ast))

//

var cheerio =require('cheerio')
var code = e2x.xml(ast)
var $ = cheerio.load(code,{xmlMode:true})
$("[type=Identifier]").length
$("[type=Identifier]")[0].attribs
$("[type=Identifier]")[1].attribs
$("[type=Identifier]")[2].attribs
$("[type=BinaryExpression]")[0].attribs.operator
unescape($("[type=BinaryExpression]")[0].attribs.operator)
    
    
//

var mat = e2x.esmat(ast)
var pldfs = e2x.pldfs(mat)
var attrdfs = e2x.attrdfs(mat)
var locdfs = e2x.locdfs(mat)
var plwfs = e2x.plwfs(mat)
var locwfs = e2x.locwfs(mat)


