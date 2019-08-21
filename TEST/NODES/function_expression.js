> d = ac.parse("x = function f(){}")
Node {
  type: 'Program',
  start: 0,
  end: 18,
  body:
   [ Node {
       type: 'ExpressionStatement',
       start: 0,
       end: 18,
       expression: [Object] } ],
  sourceType: 'script' }
>
> d.body[0].expression
Node {
  type: 'AssignmentExpression',
  start: 0,
  end: 18,
  operator: '=',
  left: Node { type: 'Identifier', start: 0, end: 1, name: 'x' },
  right:
   Node {
     type: 'FunctionExpression',
     start: 4,
     end: 18,
     id: Node { type: 'Identifier', start: 13, end: 14, name: 'f' },
     expression: false,
     generator: false,
     async: false,
     params: [],
     body: Node { type: 'BlockStatement', start: 16, end: 18, body: [] } } }
>


 Node {
     type: 'FunctionExpression',
     start: 4,
     end: 18,
     id: Node { type: 'Identifier', start: 13, end: 14, name: 'f' },
     expression: false,
     generator: false,
     async: false,
     params: [],
     body: Node { type: 'BlockStatement', start: 16, end: 18, body: [] } } }

