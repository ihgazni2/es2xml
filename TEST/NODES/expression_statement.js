> d=ac.parse("7")
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
  expression: Node { type: 'Literal', start: 0, end: 1, value: 7, raw: '7' } }
>
> d.body[0].expression
Node { type: 'Literal', start: 0, end: 1, value: 7, raw: '7' }
>
>
>
> d=ac.parse("'7'")
Node {
  type: 'Program',
  start: 0,
  end: 3,
  body:
   [ Node {
       type: 'ExpressionStatement',
       start: 0,
       end: 3,
       expression: [Object],
       directive: '7' } ],
  sourceType: 'script' }
>
> d.body[0].expression
Node { type: 'Literal', start: 0, end: 3, value: '7', raw: '\'7\'' }
>
> d.body[0]
Node {
  type: 'ExpressionStatement',
  start: 0,
  end: 3,
  expression: Node { type: 'Literal', start: 0, end: 3, value: '7', raw: '\'7\'' },
  directive: '7' }
>
> delete d.body[0].directive
true
> console.log(escodegen.generate(d.body[0]))
'7';
undefined
>

