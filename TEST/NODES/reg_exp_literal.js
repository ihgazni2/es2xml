> d = ac.parse("/[0-9]+/g")
Node {
  type: 'Program',
  start: 0,
  end: 9,
  body:
   [ Node {
       type: 'ExpressionStatement',
       start: 0,
       end: 9,
       expression: [Object] } ],
  sourceType: 'script' }
>
> d.bodu[0].expression
TypeError: Cannot read property '0' of undefined
>
> d.body[0].expression
Node {
  type: 'Literal',
  start: 0,
  end: 9,
  value: /[0-9]+/g,
  raw: '/[0-9]+/g',
  regex: { pattern: '[0-9]+', flags: 'g' } }
>

