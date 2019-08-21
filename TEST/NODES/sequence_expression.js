> d = ac.parse("a,b,c")
Node {
  type: 'Program',
  start: 0,
  end: 5,
  body:
   [ Node {
       type: 'ExpressionStatement',
       start: 0,
       end: 5,
       expression: [Object] } ],
  sourceType: 'script' }
>
> d.body[0].expression
Node {
  type: 'SequenceExpression',
  start: 0,
  end: 5,
  expressions:
   [ Node { type: 'Identifier', start: 0, end: 1, name: 'a' },
     Node { type: 'Identifier', start: 2, end: 3, name: 'b' },
     Node { type: 'Identifier', start: 4, end: 5, name: 'c' } ] }
>


