const REFS = {
    "Function":{
        "id":{
	    "_kind":"function_id",
	    "type":"node"
	},
	"params":{
            "_kind":"function_params",
            "type":"node_array"
        }
    },
    "FunctionDeclaration":{
        "id":{
            "_kind":"function_id",
            "type":"node"
        },
        "params":{
            "_kind":"function_params",
            "type":"node_array"
        }
    },
    "FunctionExpression":{
        "id":{
            "_kind":"function_id",
            "type":"node"
        },
        "params":{
            "_kind":"function_params",
            "type":"node_array"
        }
    },
    "ExpressionStatement":{
        "expression":{
	    "_kind":"expression_statement_expression",
	    "type":"node"
	}
    },
    "WithStatement": {
        "object":{
            "_kind":"with_statement_object",
            "type":"node"
        }
    },
    "ReturnStatement": {
        "argument":{
            "_kind":"return_statement_argument",
            "type":"node"
        }
    },
    "LabeledStatement" : {
        "label":{
            "_kind":"label_statement_label",
            "type":"node"
        }
    },
    "BreakStatement" : {
        "label":{
            "_kind":"break_statement_label",
            "type":"node"
        }
    },
    "ContinueStatement" : {
        "label":{
            "_kind":"continue_statement_label",
            "type":"node"
        }
    },
    "IfStatement" : {
        "test":{
            "_kind":"if_statement_test",
            "type":"node"
        }
    },
    "SwitchStatement" : {
        "discriminant":{
            "_kind":"switch_statement_discriminant",
            "type":"node"
        }
    },
    "SwitchCase" : {
        "test":{
            "_kind":"switch_case_test",
            "type":"node"
        }
    },
    "ThrowStatement" : {
        "argument":{
            "_kind":"throw_statement_test",
            "type":"node"
        }
    },
    "CatchClause" : {
        "param":{
            "_kind":"catch_clause_param",
            "type":"node"
        }
    },
    "WhileStatement" : {
        "test":{
            "_kind":"while_statement_test",
            "type":"node"
        }
    },
    "DoWhileStatement" : {
        "test":{
            "_kind":"do_while_statement_test",
            "type":"node"
        }
    },
 
    
}
