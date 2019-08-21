> s =`loop1:
... for (var i = 0; i < 5; i++) {
...   if (i === 1) {
.....     continue loop1;
.....   }
...   str = str + i;
... }`
'loop1:\nfor (var i = 0; i < 5; i++) {\n  if (i === 1) {\n    continue loop1;\n  }\n  str = str + i;\n}'
>
> d = ac.parse(s)
Node {
  type: 'Program',
  start: 0,
  end: 96,
  body:
   [ Node {
       type: 'LabeledStatement',
       start: 0,
       end: 96,
       body: [Object],
       label: [Object] } ],
  sourceType: 'script' }
> d.body[0]
Node {
  type: 'LabeledStatement',
  start: 0,
  end: 96,
  body:
   Node {
     type: 'ForStatement',
     start: 7,
     end: 96,
     init:
      Node {
        type: 'VariableDeclaration',
        start: 12,
        end: 21,
        declarations: [Array],
        kind: 'var' },
     test:
      Node {
        type: 'BinaryExpression',
        start: 23,
        end: 28,
        left: [Object],
        operator: '<',
        right: [Object] },
     update:
      Node {
        type: 'UpdateExpression',
        start: 30,
        end: 33,
        operator: '++',
        prefix: false,
        argument: [Object] },
     body: Node { type: 'BlockStatement', start: 35, end: 96, body: [Array] } },
  label: Node { type: 'Identifier', start: 0, end: 5, name: 'loop1' } }
>

{
  type: 'LabeledStatement',
  body: {},
  label:{}
}
