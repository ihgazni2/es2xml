> d = ac.parse(`function sum(...theArgs) {}`)
Node {
  type: 'Program',
  start: 0,
  end: 27,
  body:
   [ Node {
       type: 'FunctionDeclaration',
       start: 0,
       end: 27,
       id: [Object],
       expression: false,
       generator: false,
       async: false,
       params: [Array],
       body: [Object] } ],
  sourceType: 'script' }
>


> d.body[0].params[0]
Node {
  type: 'RestElement',
  start: 13,
  end: 23,
  argument: Node { type: 'Identifier', start: 16, end: 23, name: 'theArgs' } }
>



