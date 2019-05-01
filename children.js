const elel = require("elist")
const cmmn = require("./common")


function engine(tnode,...names) {
    let rpl = tnode.rpl
    let args = cmmn.creatEngineArgs(tnode,...names)
    let narr = []
    for(let i in args){
        let v = args[i].value
        let name = args[i].name
        let cond = Array.isArray(v)
	//
	//
	if(v === null){
	    //such as anonymous Function
	    //do nothing
	} else if(cond){
            v = elel.mapiv(v,cmmn.creatTreeNodeIV,[rpl,name])
            narr = Array.prototype.concat(narr,v)
        } else {
            v = cmmn.creatTreeNodeV(v,rpl,name)
            narr.push(v)
        }
    }
    return(narr)
}

const KEYS = {
    _Program:["body"],
    _Function:["id","params","body"],
    _ExpressionStatement:["expression"],
    _IfStatement:["test","consequent","alternate"],
    _SwitchStatement:["discriminant","cases"],
    _LabeledStatement:["body","label"],
    _ContinueStatement:["label"],
    _BreakStatement:["label"],
    _WithStatement:["object","body"],
    _BlockStatement:["body"],
    _EmptyStatement:[],
    _DebuggerStatement:[],
    _ReturnStatement:["argument"],
    _ThrowStatement:["argument"],
    _TryStatement:["block","handler","finalizer"],
    _DoWhileStatement:["body","test"],
    _WhileStatement:["test","body"],
    _ForStatement:["init","test","update","body"],
    _ForOfStatement:["left","right","body"],
    _ForInStatement:["left","right","body"],
    _ThisExpression:[],
    _ArrayExpression:["elements"],
    _ObjectExpression:["properties"],
    _Property:["key","value"],
    _UnaryExpression:["argument"],
    _UnaryOperator:[],
    _UpdateExpression:["argument"],
    _UpdateOperator:[],
    _BinaryExpression:["left","right"],
    _BinaryOperator:[],
    _AssignmentExpression:["left","right"],
    _AssignmentOperator:[],
    _LogicalExpression:["left","right"],
    _LogicalOperator:[],
    _MemberExpression:["object","property"],
    _ConditionalExpression:["test","alternate","consequent"],
    _CallExpression:["callee","arguments"],
    _NewExpression:["callee","arguments"],
    _SequenceExpression:["expressions"],
    _ArrowFunctionExpression:["params","body"],
    _YieldExpression:["argument"],
    _AwaitExpression:["argument"],
    _VariableDeclaration:["declarations"],
    _VariableDeclarator:["id","init"],
    _FunctionBody:["body"],
    _SwitchCase:["consequent","test"],
    _CatchClause:["param","body"],
    _Identifier:[],
    _Literal:[],
    _RegExpLiteral:[],
    _Super:[],
    _SpreadElement:["argument"],
    _TemplateLiteral:["quasis","expressions"],
    _TemplateElement:[],
    _TaggedTemplateExpression:["tag","quasi"],
    _ObjectPattern:["properties"],
    _AssignmentProperty:["value"],
    _AssignmentPattern:["left","right"],
    _ArrayPattern:["elements"],
    _RestElement:["argument"],
    _VariablePattern:[],
    _Class:["id","superClass","body"],
    _ClassDeclaration:["id","superClass","body"],
    _ClassBody:["body"],
    _MethodDefinition:["key","value"],
    _ClassExpression:["id","superClass","body"],
    _MetaProperty:["meta","property"],
    _ModuleDeclaration:[],
    _ModuleSpecifier:["local"],
    _ImportDeclaration:["specifiers","source"],
    _ImportSpecifier:["imported"],
    _ImportDefaultSpecifier:[],
    _ImportNamespaceSpecifier:[],
    _ExportSpecifier:["exported"],
    _ExportDefaultDeclaration:["declaration"],
    _ExportNamedDeclaration:["declaration","specifiers","source"],
    _ExportAllDeclaration:["source"]
}

KEYS._Programs = KEYS._Program
KEYS._FunctionDeclaration = KEYS._Function
KEYS._FunctionExpression = KEYS._Function
KEYS._ParenthesizedExpression = KEYS._ExpressionStatement
KEYS._Directive = KEYS._ExpressionStatement
KEYS._MemberPattern = KEYS._MemberExpression


//

FUNCS = {
    _Program : function(tnode){return(engine(tnode,...KEYS._Program))},
    _Function : function(tnode){return(engine(tnode,...KEYS._Function))},
    _ExpressionStatement : function(tnode){return(engine(tnode,...KEYS._ExpressionStatement))},
    _IfStatement : function(tnode){return(engine(tnode,...KEYS._IfStatement))},
    _SwitchStatement : function(tnode){return(engine(tnode,...KEYS._SwitchStatement))},
    _LabeledStatement : function(tnode){return(engine(tnode,...KEYS._LabeledStatement))},
    _ContinueStatement : function(tnode){return(engine(tnode,...KEYS._ContinueStatement))},
    _BreakStatement : function(tnode){return(engine(tnode,...KEYS._BreakStatement))},
    _WithStatement : function(tnode){return(engine(tnode,...KEYS._WithStatement))},
    _BlockStatement : function(tnode){return(engine(tnode,...KEYS._BlockStatement))},
    _EmptyStatement : function(tnode){return(engine(tnode,...KEYS._EmptyStatement))},
    _DebuggerStatement : function(tnode){return(engine(tnode,...KEYS._DebuggerStatement))},
    _ReturnStatement : function(tnode){return(engine(tnode,...KEYS._ReturnStatement))},
    _ThrowStatement : function(tnode){return(engine(tnode,...KEYS._ThrowStatement))},
    _TryStatement : function(tnode){return(engine(tnode,...KEYS._TryStatement))},
    _DoWhileStatement : function(tnode){return(engine(tnode,...KEYS._DoWhileStatement))},
    _WhileStatement : function(tnode){return(engine(tnode,...KEYS._WhileStatement))},
    _ForStatement : function(tnode){return(engine(tnode,...KEYS._ForStatement))},
    _ForOfStatement : function(tnode){return(engine(tnode,...KEYS._ForOfStatement))},
    _ForInStatement : function(tnode){return(engine(tnode,...KEYS._ForInStatement))},
    _ThisExpression : function(tnode){return(engine(tnode,...KEYS._ThisExpression))},
    _ArrayExpression : function(tnode){return(engine(tnode,...KEYS._ArrayExpression))},
    _ObjectExpression : function(tnode){return(engine(tnode,...KEYS._ObjectExpression))},
    _Property : function(tnode){return(engine(tnode,...KEYS._Property))},
    _UnaryExpression : function(tnode){return(engine(tnode,...KEYS._UnaryExpression))},
    _UnaryOperator : function(tnode){return(engine(tnode,...KEYS._UnaryOperator))},
    _UpdateExpression : function(tnode){return(engine(tnode,...KEYS._UpdateExpression))},
    _UpdateOperator : function(tnode){return(engine(tnode,...KEYS._UpdateOperator))},
    _BinaryExpression : function(tnode){return(engine(tnode,...KEYS._BinaryExpression))},
    _BinaryOperator : function(tnode){return(engine(tnode,...KEYS._BinaryOperator))},
    _AssignmentExpression : function(tnode){return(engine(tnode,...KEYS._AssignmentExpression))},
    _AssignmentOperator : function(tnode){return(engine(tnode,...KEYS._AssignmentOperator))},
    _LogicalExpression : function(tnode){return(engine(tnode,...KEYS._LogicalExpression))},
    _LogicalOperator : function(tnode){return(engine(tnode,...KEYS._LogicalOperator))},
    _MemberExpression : function(tnode){return(engine(tnode,...KEYS._MemberExpression))},
    _ConditionalExpression : function(tnode){return(engine(tnode,...KEYS._ConditionalExpression))},
    _CallExpression : function(tnode){return(engine(tnode,...KEYS._CallExpression))},
    _NewExpression : function(tnode){return(engine(tnode,...KEYS._NewExpression))},
    _SequenceExpression : function(tnode){return(engine(tnode,...KEYS._SequenceExpression))},
    _ArrowFunctionExpression : function(tnode){return(engine(tnode,...KEYS._ArrowFunctionExpression))},
    _YieldExpression : function(tnode){return(engine(tnode,...KEYS._YieldExpression))},
    _AwaitExpression : function(tnode){return(engine(tnode,...KEYS._AwaitExpression))},
    _VariableDeclaration : function(tnode){return(engine(tnode,...KEYS._VariableDeclaration))},
    _VariableDeclarator : function(tnode){return(engine(tnode,...KEYS._VariableDeclarator))},
    _FunctionBody : function(tnode){return(engine(tnode,...KEYS._FunctionBody))},
    _SwitchCase : function(tnode){return(engine(tnode,...KEYS._SwitchCase))},
    _CatchClause : function(tnode){return(engine(tnode,...KEYS._CatchClause))},
    _Identifier : function(tnode){return(engine(tnode,...KEYS._Identifier))},
    _Literal : function(tnode){return(engine(tnode,...KEYS._Literal))},
    _RegExpLiteral : function(tnode){return(engine(tnode,...KEYS._RegExpLiteral))},
    _Super : function(tnode){return(engine(tnode,...KEYS._Super))},
    _SpreadElement : function(tnode){return(engine(tnode,...KEYS._SpreadElement))},
    _TemplateLiteral : function(tnode){return(engine(tnode,...KEYS._TemplateLiteral))},
    _TemplateElement : function(tnode){return(engine(tnode,...KEYS._TemplateElement))},
    _TaggedTemplateExpression : function(tnode){return(engine(tnode,...KEYS._TaggedTemplateExpression))},
    _ObjectPattern : function(tnode){return(engine(tnode,...KEYS._ObjectPattern))},
    _AssignmentProperty : function(tnode){return(engine(tnode,...KEYS._AssignmentProperty))},
    _AssignmentPattern : function(tnode){return(engine(tnode,...KEYS._AssignmentPattern))},
    _ArrayPattern : function(tnode){return(engine(tnode,...KEYS._ArrayPattern))},
    _RestElement : function(tnode){return(engine(tnode,...KEYS._RestElement))},
    _VariablePattern : function(tnode){return(engine(tnode,...KEYS._VariablePattern))},
    _Class : function(tnode){return(engine(tnode,...KEYS._Class))},
    _ClassDeclaration : function(tnode){return(engine(tnode,...KEYS._ClassDeclaration))},
    _ClassBody : function(tnode){return(engine(tnode,...KEYS._ClassBody))},
    _MethodDefinition : function(tnode){return(engine(tnode,...KEYS._MethodDefinition))},
    _ClassExpression : function(tnode){return(engine(tnode,...KEYS._ClassExpression))},
    _MetaProperty : function(tnode){return(engine(tnode,...KEYS._MetaProperty))},
    _ModuleDeclaration : function(tnode){return(engine(tnode,...KEYS._ModuleDeclaration))},
    _ModuleSpecifier : function(tnode){return(engine(tnode,...KEYS._ModuleSpecifier))},
    _ImportDeclaration : function(tnode){return(engine(tnode,...KEYS._ImportDeclaration))},
    _ImportSpecifier : function(tnode){return(engine(tnode,...KEYS._ImportSpecifier))},
    _ImportDefaultSpecifier : function(tnode){return(engine(tnode,...KEYS._ImportDefaultSpecifier))},
    _ImportNamespaceSpecifier : function(tnode){return(engine(tnode,...KEYS._ImportNamespaceSpecifier))},
    _ExportSpecifier : function(tnode){return(engine(tnode,...KEYS._ExportSpecifier))},
    _ExportDefaultDeclaration : function(tnode){return(engine(tnode,...KEYS._ExportDefaultDeclaration))},
    _ExportNamedDeclaration : function(tnode){return(engine(tnode,...KEYS._ExportNamedDeclaration))},
    _ExportAllDeclaration : function(tnode){return(engine(tnode,...KEYS._ExportAllDeclaration))},
    _ModuleDeclaration:function(tnode){},
    _ModuleSpecifier:function(tnode){}
}

FUNCS._Programs = FUNCS._Program
FUNCS._FunctionDeclaration = FUNCS._Function
FUNCS._FunctionExpression = FUNCS._Function
FUNCS._ParenthesizedExpression = FUNCS._ExpressionStatement
FUNCS._Directive = FUNCS._ExpressionStatement
FUNCS._MemberPattern = FUNCS._MemberExpression

FUNCS._Statements = function(tnode) {
    let node = tnode.node
    if(node.type === "ExpressionStatement") {
        return(FUNCS._ExpressionStatement(node))
    } else if(node.type === "IfStatement") {
        return(FUNCS._IfStatement(node))
    } else if(node.type === "SwitchStatement") {
        return(FUNCS._SwitchStatement(node))
    } else if(node.type === "LabeledStatement") {
        return(FUNCS._LabeledStatement(node))
    } else if(node.type === "ContinueStatement") {
        return(FUNCS._ContinueStatement(node))
    } else if(node.type === "BreakStatement") {
        return(FUNCS._BreakStatement(node))
    } else if(node.type === "WithStatement") {
        return(FUNCS._WithStatement(node))
    } else if(node.type === "BlockStatement") {
        return(FUNCS._BlockStatement(node))
    } else if(node.type === "EmptyStatement") {
        return(FUNCS._EmptyStatement(node))
    } else if(node.type === "DebuggerStatement") {
        return(FUNCS._DebuggerStatement(node))
    } else if(node.type === "ReturnStatement") {
        return(FUNCS._ReturnStatement(node))
    } else if(node.type === "ThrowStatement") {
        return(FUNCS._ThrowStatement(node))
    } else if(node.type === "TryStatement") {
        return(FUNCS._TryStatement(node))
    } else if(node.type === "DoWhileStatement") {
        return(FUNCS._DoWhileStatement(node))
    } else if(node.type === "WhileStatement") {
        return(FUNCS._WhileStatement(node))
    } else if(node.type === "ForStatement") {
        return(FUNCS._ForStatement(node))
    } else if(node.type === "ForOfStatement") {
        return(FUNCS._ForOfStatement(node))
    } else if(node.type === "ForInStatement") {
        return(FUNCS._ForInStatement(node))
    } else if(node.type === "") {
    }  else {
    }
}



FUNCS._Expressions = function(tnode) {
    let node = tnode.node
    if(node.type === "FunctionExpression"){
        return(FUNCS._FunctionExpression(node))
    } else if(node.type === "ThisExpression") {
        return(FUNCS._ThisExpression(node))
    } else if(node.type === "ArrayExpression") {
        return(FUNCS._ArrayExpression(node))
    } else if(node.type === "ObjectExpression") {
        return(FUNCS._ObjectExpression(node))
    } else if(node.type === "UnaryExpression") {
        return(FUNCS._UnaryExpression(node))
    } else if(node.type === "BinaryExpression") {
        return(FUNCS._BinaryExpression(node))
    }  else if(node.type === "AssignmentExpression") {
        return(FUNCS._AssignmentExpression(node))
    }  else if(node.type === "LogicalExpression") {
        return(FUNCS._LogicalExpression(node))
    }  else if(node.type === "MemberExpression") {
        return(FUNCS._MemberExpression(node))
    }  else if(node.type === "ConditionalExpression") {
        return(FUNCS._ConditionalExpression(node))
    }  else if(node.type === "CallExpression") {
        return(FUNCS._CallExpression(node))
    }  else if(node.type === "NewExpression") {
        return(FUNCS._NewExpression(node))
    }  else if(node.type === "SequenceExpression") {
        return(FUNCS._SequenceExpression(node))
    }  else if(node.type === "SpreadElement") {
        return(FUNCS._SpreadElement(node))
    }  else if(node.type === "ArrowFunctionExpression") {
        return(FUNCS._ArrowFunctionExpression(node))
    }  else if(node.type === "YieldExpression") {
        return(FUNCS._YieldExpression(node))
    }  else if(node.type === "AwaitExpression") {
        return(FUNCS._AwaitExpression(node))
    }  else if(node.type === "ParenthesizedExpression") {
        return(FUNCS._ParenthesizedExpression(node))
    }  else {
    }
}

FUNCS._Declarations = function(tnode) {
    let node = tnode.node
    if(node.type === "VariableDeclaration") {
        return(FUNCS._VariableDeclaration(node))
    } else if(node.type === "FunctionDeclaration") {
        return(FUNCS._FunctionDeclaration(node))
    } else {
    }
}

FUNCS._Patterns = function(tnode) {
    let node = tnode.node
    if(node.type==="ObjectPattern") {
        return(FUNCS._ObjectPattern(node))
    } else if(node.type === "AssignmentPattern") {
        return(FUNCS._AssignmentPattern(node))
    } else if(node.type === "ArrayPattern") {
        return(FUNCS._ArrayPattern(node))
    } else if(node.type === "RestElement") {
        return(FUNCS._RestElement(node))
    } else if(node.type === "VariablePattern") {
        return(FUNCS._VariablePattern(node))
    } else if(node.type === "MemberPattern") {
        return(FUNCS._MemberPattern(node))
    } else {
    }
}

//

function getChildren(tnode) {
    //if(tnode === null) {
    //    return([])
    //} else {
        let type = tnode.node.type
        let fn = cmmn.type2fn(type)
        return(this.FUNCS[fn](tnode))
    //}
}

function isLeaf(tnode) {
    let children = getChildren(tnode)
    return((children.length === 0))
}


//

module.exports = {
    FUNCS:FUNCS,
    KEYS:KEYS,
    getChildren:getChildren,
    isLeaf:isLeaf
}

