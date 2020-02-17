指的是箭頭函數 後面是函數體 還是直接結果


> escodegen.generate(t)
'a => 5;'
> t.body[0].expression
Node {
  type: 'ArrowFunctionExpression',
  start: 0,
  end: 4,
  id: null,
  expression: true,
  generator: false,
  async: false,
  params: [ Node { type: 'Identifier', start: 0, end: 1, name: 'a' } ],
  body:
   Node { type: 'Literal', start: 3, end: 4, value: 5, raw: '5' } }
>
>



> t = ac.parse('const add = (a, b) => a + b')
Node {
  type: 'Program',
  start: 0,
  end: 27,
  body:
   [ Node {
       type: 'VariableDeclaration',
       start: 0,
       end: 27,
       declarations: [Array],
       kind: 'const' } ],
  sourceType: 'script' }
> t.body[0].declarations[0].init.expression
true
>

> t.body[0].expression
Node {
  type: 'AssignmentExpression',
  start: 0,
  end: 23,
  operator: '=',
  left: Node { type: 'Identifier', start: 0, end: 3, name: 'add' },
  right:
   Node {
     type: 'ArrowFunctionExpression',
     start: 6,
     end: 23,
     id: null,
     expression: false,
     generator: false,
     async: false,
     params: [ [Node], [Node] ],
     body:
      Node { type: 'BlockStatement', start: 16, end: 23, body: [Array] } } }
> t = ac.parse('add = (a, b) => {a + b}')



