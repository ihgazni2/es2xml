> d=ac.parse(`sa${a}ff${bb}`)
ReferenceError: a is not defined
>
> d=ac.parse("`sa${a}ff${bb}`")
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
>
> d.body[0].expression
Node {
  type: 'TemplateLiteral',
  start: 0,
  end: 15,
  expressions:
   [ Node { type: 'Identifier', start: 5, end: 6, name: 'a' },
     Node { type: 'Identifier', start: 11, end: 13, name: 'bb' } ],
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
       end: 9,
       value: [Object],
       tail: false },
     Node {
       type: 'TemplateElement',
       start: 14,
       end: 14,
       value: [Object],
       tail: true } ] }
>

