const exdict = require("exdict")
const escodegen = require("escodegen")
const esm = require('./descmat')

const NODE_TYPES = [
 'BlockStatement',
 'Program',
 'Statement',
 'EmptyStatement',
 'ParenthesizedExpression',
 'ExpressionStatement',
 'IfStatement',
 'LabeledStatement',
 'ContinueStatement',
 'BreakStatement',
 'WithStatement',
 'SwitchStatement',
 'SwitchCase',
 'AwaitExpression',
 'YieldExpression',
 'ReturnStatement',
 'SpreadElement',
 'ThrowStatement',
 'TryStatement',
 'CatchClause',
 'DoWhileStatement',
 'WhileStatement',
 'ForStatement',
 'ForOfStatement',
 'ForInStatement',
 'ForInit',
 'DebuggerStatement',
 'FunctionDeclaration',
 'VariableDeclaration',
 'VariableDeclarator',
 'Function',
 'Pattern',
 'VariablePattern',
 'MemberPattern',
 'RestElement',
 'ArrayPattern',
 'ObjectPattern',
 'Expression',
 'MetaProperty',
 'Super',
 'ThisExpression',
 'ArrayExpression',
 'ObjectExpression',
 'ArrowFunctionExpression',
 'FunctionExpression',
 'SequenceExpression',
 'TemplateLiteral',
 'TemplateElement',
 'UpdateExpression',
 'UnaryExpression',
 'LogicalExpression',
 'BinaryExpression',
 'AssignmentPattern',
 'AssignmentExpression',
 'ConditionalExpression',
 'CallExpression',
 'NewExpression',
 'MemberExpression',
 'ExportDefaultDeclaration',
 'ExportNamedDeclaration',
 'ExportAllDeclaration',
 'ImportDeclaration',
 'Literal',
 'Identifier',
 'ImportNamespaceSpecifier',
 'ImportDefaultSpecifier',
 'ImportSpecifier',
 'TaggedTemplateExpression',
 'ClassExpression',
 'ClassDeclaration',
 'Class',
 'ClassBody',
 'Property',
 'MethodDefinition'
]

function viaTypeEngine(ast,type) {
    let mat = esm.getDescMat(ast)
    let pldfs = esm.getRplDFS(mat)
    let nodes = []
    for(let i=0;i<pldfs.length;i++){
        let node = exdict.getItemViaPathList0(ast,pldfs[i])
	if(node.type.toLowerCase() === type.toLowerCase()){
	    node._pl = pldfs[i] 
	    nodes.push(node)
	}else{
	
	}
    }
    return(nodes)
}


function getTypeTable(ast) {
    let d = {}
    let kl = NODE_TYPES
    for(let type of kl) {
        let nodes = viaTypeEngine(ast,type)
	d[type] = nodes
    }
    return(d)
}


function getCodeChain(ast,nodeWithPl) {
    let codes = []
    let pl = nodeWithPl._pl
    while(pl.length >0) {
        let node = exdict.getItemViaPathList0(ast,pl)
	if(Array.isArray(node)){
	    node = node[0]
	} else {
	    
	}
	let code = escodegen.generate(node)
	codes.push(code)
	pl = JSON.stringify(pl)
	pl = JSON.parse(pl)
	pl.pop(pl.length-1)
    }
    return(codes)
}


module.exports = {
    NODE_TYPES:NODE_TYPES,
    viaTypeEngine:viaTypeEngine,
    getTypeTable:getTypeTable,
    getCodeChain:getCodeChain,
}
