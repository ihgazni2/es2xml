const escodegen = require("escodegen")
//VALUE TYPES
const TYPES = [
    "string",
    "number",
    "array",
    "node",
    "ecma",
    "dict",
]

//TO_CODE_FUNCS
function do_nothing(obj) {
    return(obj)
}

function nd2cd(node) {
    if(node === null){
        return(null)
    } else {
        return(escodegen.generate(node))
    }
}



function nds2cd(nodes) {
    let nodes = nodes.map(escodegen.generate)
    let s = nodes.join('\n')
    return(s)
}


const TO_CODE_FUNCS = {
    "string":do_nothing,
    "number":do_nothing,
    "node_array":nds2cd,
    "node":nd2cd,
    "dict":do_nothing,
    "ecma":do_nothing,
    "boolean":do_nothing,
    "node_or_null":nd2cd,
}

//intf_type   lower case of type
//type        estree spec type
//intf_type name begin with _      not category exist in estree-spec but not in acorn-spec
//intf_type name begin with $      category       




function get_intf_type(node) {
    let type = node.type
    let intf = INTFS[type]
    if(type === "Literal"){
        if(node.hasOwnProperty("regex")){
	    return("_RegExpLiteral")
	} else {
	    return("Literal")
	}
    } else if(type === "ExpressionStatement") {
        if(node.hasOwnProperty("directive")){
            return("ExpressionStatement")
        } else {
            return("ExpressionStatement")
        }
    } else {
        return(type)
    }
}

//INTFS INTERFACES
const INTFS = {
    Program : {
	type:"Program",
	sub_type:[],
	cmmn:["type","start","end"],
	cmmn_types:["string","number","number"],
	const_leaf:[],
	const_leaf_values:[],
	const_non_leaf:[],
	const_non_leaf_types:[],
	var_leaf:['sourceType'],
	var_leaf_types:["string"],
	var_non_leaf:["body"],
	var_non_leaf_types:["node_array"]
    },
    Identifier : {
	type:"Identifier",
	sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:['name'],
        var_leaf_types:['string'],
        var_non_leaf:[],
        var_non_leaf_types:[]
    },
    Literal : {
	type:"Literal",
	sub_type:["RegExpLiteral"]
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:['value','raw'],
        var_leaf_types:['ecma','string'],
        var_non_leaf:[],
        var_non_leaf_types:[]
    },
    _RegExpLiteral : {
	type:"RegExpLiteral",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:['value','raw','regex'],
        var_leaf_types:['ecma','string','dict'],
        var_non_leaf:[],
        var_non_leaf_types:[]
    },
    $Function : {
        type:"Function",
        sub_type:["FunctionDeclaration","FunctionExpression"],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:["expression"],
        const_leaf_values:[false],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:['generator','async'],
        var_leaf_types:['boolean','boolean'],
        var_non_leaf:[],
        var_non_leaf_types:[]
    },
    FunctionDeclaration : {
        type:"FunctionDeclaration",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:["expression"],
        const_leaf_values:[false],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:['generator','async'],
        var_leaf_types:['boolean','boolean'],
        var_non_leaf:['id','params','body'],
        var_non_leaf_types:['node','node_or_null','node']
    },
    FunctionExpression : {
        type:"FunctionExpression",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:["expression"],
        const_leaf_values:[false],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:['generator','async'],
        var_leaf_types:['boolean','boolean'],
        var_non_leaf:['id','params','body'],
        var_non_leaf_types:['node','node_or_null','node']
    },
    ExpressionStatement : {
        type:"ExpressionStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:['directive'],
        var_leaf_types:['string'],
        var_non_leaf:['expression'],
        var_non_leaf_types:['node']
    },
    BlockStatement :  {
        type:"BlockStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:['body'],
        var_non_leaf_types:['node_array']
    },
    EmptyStatement :  {
        type:"EmptyStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:[],
        var_non_leaf_types:[]
    }, 
    DebuggerStatement : {
        type:"DebuggerStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:[],
        var_non_leaf_types:[]
    },
    WithStatement : {
        type:"WithStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["object","body"],
        var_non_leaf_types:["node","node"]
    }, 
    ReturnStatement : {
        type:"ReturnStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["argument"],
        var_non_leaf_types:["node"]
    },
    LabeledStatement : {
        type:"LabeledStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["label"],
        var_non_leaf_types:["node"]
    },
    BreakStatement : {
        type:"BreakStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["label"],
        var_non_leaf_types:["node"]
    },
    ContinueStatement : {
        type:"ContinueStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["label"],
        var_non_leaf_types:["node"]
    },
    IfStatement : {
        type:"IfStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:['test','alternate','consequent'],
        var_non_leaf_types:["node","node","node"]
    },
    SwitchStatement : {
        type:"SwitchStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["discriminant","cases"],
        var_non_leaf_types:["node","node_array"]
    },
    SwitchCase : {
        type:"SwitchCase",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["test","consequent"],
        var_non_leaf_types:["node","node_array"]
    },
    ThrowStatement : {
        type:"ThrowStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["argument"],
        var_non_leaf_types:["node"]
    },
    TryStatement : {
        type:"TryStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["block","handler","finalizer"],
        var_non_leaf_types:["node","node","node"]
    },
    CatchClause : {
        type:"CatchClause",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["param","body"],
        var_non_leaf_types:["node","node"]
    },
    WhileStatement : {
        type:"WhileStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["test","body"],
        var_non_leaf_types:["node","node"]
    },
    DoWhileStatement : {
        type:"DoWhileStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["test","body"],
        var_non_leaf_types:["node","node"]
    },
    DoWhileStatement : {
        type:"DoWhileStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["test","body"],
        var_non_leaf_types:["node","node"]
    },
    ForStatement : {
        type:"ForStatement",
        sub_type:[],
        cmmn:["type","start","end"],
        cmmn_types:["string","number","number"],
        const_leaf:[],
        const_leaf_values:[],
        const_non_leaf:[],
        const_non_leaf_types:[],
        var_leaf:[],
        var_leaf_types:[],
        var_non_leaf:["init","test","body","update"],
        var_non_leaf_types:["node","node","node","node"]
    },
    


}
