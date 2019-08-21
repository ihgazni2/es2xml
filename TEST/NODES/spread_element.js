> d=ac.parse("sum(...numbers)")
Node {
  type: 'Program',
  start: 0,
  end: 15,
  body:
   [ Node {
       type: 'ExpressionStatement',
       start: 0,
       end: 15,
       expression: [Object] } ],
  sourceType: 'script' }
>
> d.body[0].expression
Node {
  type: 'CallExpression',
  start: 0,
  end: 15,
  callee: Node { type: 'Identifier', start: 0, end: 3, name: 'sum' },
  arguments:
   [ Node { type: 'SpreadElement', start: 4, end: 14, argument: [Object] } ] }
>
> d.body[0].expression.arguments[0]
Node {
  type: 'SpreadElement',
  start: 4,
  end: 14,
  argument: Node { type: 'Identifier', start: 7, end: 14, name: 'numbers' } }
>

