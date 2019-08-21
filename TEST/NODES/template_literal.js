> d=ac.parse("`sa${a}`")
Node {
  type: 'Program',
  start: 0,
  end: 8,
  body:
   [ Node {
       type: 'ExpressionStatement',
       start: 0,
       end: 8,
       expression: [Object] } ],
  sourceType: 'script' }
>
> d.body[0].expression
Node {
  type: 'TemplateLiteral',
  start: 0,
  end: 8,
  expressions: [ Node { type: 'Identifier', start: 5, end: 6, name: 'a' } ],
  quasis:
   [ Node {
       type: 'TemplateElement',
       start: 1,
       end: 3,
       value: [Object],
       tail: false },
     Node {
       type: 'TemplateElement',
       start: 7,
       end: 7,
       value: [Object],
       tail: true } ] }
>

