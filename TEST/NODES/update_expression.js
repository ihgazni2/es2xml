> d= ac.parse("a++")
Node {
  type: 'Program',
  start: 0,
  end: 3,
  body:
   [ Node {
       type: 'ExpressionStatement',
       start: 0,
       end: 3,
       expression: [Object] } ],
  sourceType: 'script' }
> d.body[0].expression
Node {
  type: 'UpdateExpression',
  start: 0,
  end: 3,
  operator: '++',
  prefix: false,
  argument: Node { type: 'Identifier', start: 0, end: 1, name: 'a' } }
>

