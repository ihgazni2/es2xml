$ node
> var esprima = require('esprima')
> esprima.tokenize('/* answer */ 42', { comment: true })
[ { type: 'BlockComment', value: ' answer ' },
  { type: 'Numeric', value: '42' } ]



>>> d = esprima.esprima.parse("a=b//fffff", { "comment": True })
>>>
>>> d
{
    type: "Program",
    sourceType: "script",
    body: [
        {
            type: "ExpressionStatement",
            expression: {
                type: "AssignmentExpression",
                operator: "=",
                left: {
                    type: "Identifier",
                    name: "a"
                },
                right: {
                    type: "Identifier",
                    name: "b"
                }
            }
        }
    ],
    comments: [
        {
            type: "Line",
            value: "fffff"
        }
    ]
}

