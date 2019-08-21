> d = ac.parse("a")
Node {
  type: 'Program',
  start: 0,
  end: 1,
  body:
   [ Node {
       type: 'ExpressionStatement',
       start: 0,
       end: 1,
       expression: [Object] } ],
  sourceType: 'script' }
>
> d.body[0]
Node {
  type: 'ExpressionStatement',
  start: 0,
  end: 1,
  expression: Node { type: 'Identifier', start: 0, end: 1,                                       name: 'a' } }
>



{
  type: 'ExpressionStatement',
  expression: {} 
}
