> d = ac.parse("a[0]")
Node {
  type: 'Program',
  start: 0,
  end: 4,
  body:
   [ Node {
       type: 'ExpressionStatement',
       start: 0,
       end: 4,
       expression: [Object] } ],
  sourceType: 'script' }
> d.body[0].expression
Node {
  type: 'MemberExpression',
  start: 0,
  end: 4,
  object: Node { type: 'Identifier', start: 0, end: 1, name: 'a' },
  property: Node { type: 'Literal', start: 2, end: 3, value: 0, raw: '0' },
  computed: true }
>

