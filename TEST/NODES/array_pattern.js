> d = ac.parse("function x(...[ a, b ]){}")
Node {
  type: 'Program',
  start: 0,
  end: 25,
  body:
   [ Node {
       type: 'FunctionDeclaration',
       start: 0,
       end: 25,
       id: [Object],
       expression: false,
       generator: false,
       async: false,
       params: [Array],
       body: [Object] } ],
  sourceType: 'script' }
>
> d.body[0]
Node {
  type: 'FunctionDeclaration',
  start: 0,
  end: 25,
  id: Node { type: 'Identifier', start: 9, end: 10, name: 'x' },
  expression: false,
  generator: false,
  async: false,
  params:
   [ Node { type: 'RestElement', start: 11, end: 22, argument: [Object] } ],
  body: Node { type: 'BlockStatement', start: 23, end: 25, body: [] } }
>
>
> d.body[0].params[0]
Node {
  type: 'RestElement',
  start: 11,
  end: 22,
  argument:
   Node {
     type: 'ArrayPattern',
     start: 14,
     end: 22,
     elements: [ [Object], [Object] ] } }
>
> d.body[0].params[0].argument
Node {
  type: 'ArrayPattern',
  start: 14,
  end: 22,
  elements:
   [ Node { type: 'Identifier', start: 16, end: 17, name: 'a' },
     Node { type: 'Identifier', start: 19, end: 20, name: 'b' } ] }
>
>

