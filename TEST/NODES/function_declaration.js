Node {
  type: 'FunctionDeclaration',
  start: 0,
  end: 157,
  id: Node { type: 'Identifier', start: 15, end: 24, name: 'asyncCall' },
  expression: false,
  generator: false,
  async: true,
  params: [],
  body:
   Node {
     type: 'BlockStatement',
     start: 27,
     end: 157,
     body: [ [Object], [Object], [Object] ] } }


> d = ac.parse("function u(){}")
Node {
  type: 'Program',
  start: 0,
  end: 14,
  body:
   [ Node {
       type: 'FunctionDeclaration',
       start: 0,
       end: 14,
       id: [Object],
       expression: false,
       generator: false,
       async: false,
       params: [],
       body: [Object] } ],
  sourceType: 'script' }
>
> d.body[0]
Node {
  type: 'FunctionDeclaration',
  start: 0,
  end: 14,
  id: Node { type: 'Identifier', start: 9, end: 10, name: 'u' },
  expression: false,
  generator: false,
  async: false,
  params: [],
  body: Node { type: 'BlockStatement', start: 12, end: 14, body: [] } }
>
> nd = d.body[0]
Node {
  type: 'FunctionDeclaration',
  start: 0,
  end: 14,
  id: Node { type: 'Identifier', start: 9, end: 10, name: 'u' },
  expression: false,
  generator: false,
  async: false,
  params: [],
  body: Node { type: 'BlockStatement', start: 12, end: 14, body: [] } }
>
> nd.expression=true
true
> print(escodegen.generate(nd))
ReferenceError: print is not defined
> console.log(escodegen.generate(nd))
function u() ({
})
undefined
>

