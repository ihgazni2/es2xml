> o
{ f: [Function: f] }
>
> s =`var o = {
...     f(c = 2) {}
... };`
'var o = {\n    f(c = 2) {}\n};'
>
> d =ac .parse(s)
Node {
  type: 'Program',
  start: 0,
  end: 28,
  body:
   [ Node {
       type: 'VariableDeclaration',
       start: 0,
       end: 28,
       declarations: [Array],
       kind: 'var' } ],
  sourceType: 'script' }
>
> d.body[0].declarations[0]
Node {
  type: 'VariableDeclarator',
  start: 4,
  end: 27,
  id: Node { type: 'Identifier', start: 4, end: 5, name: 'o' },
  init:
   Node {
     type: 'ObjectExpression',
     start: 8,
     end: 27,
     properties: [ [Object] ] } }
>
> d.body[0].declarations[0].init
Node {
  type: 'ObjectExpression',
  start: 8,
  end: 27,
  properties:
   [ Node {
       type: 'Property',
       start: 14,
       end: 25,
       method: true,
       shorthand: false,
       computed: false,
       key: [Object],
       kind: 'init',
       value: [Object] } ] }
> d.body[0].declarations[0].init.properties
[ Node {
    type: 'Property',
    start: 14,
    end: 25,
    method: true,
    shorthand: false,
    computed: false,
    key: Node { type: 'Identifier', start: 14, end: 15, name: 'f' },
    kind: 'init',
    value:
     Node {
       type: 'FunctionExpression',
       start: 15,
       end: 25,
       id: null,
       expression: false,
       generator: false,
       async: false,
       params: [Array],
       body: [Object] } } ]
> d.body
[ Node {
    type: 'VariableDeclaration',
    start: 0,
    end: 28,
    declarations: [ [Object] ],
    kind: 'var' } ]
>
>
> d
Node {
  type: 'Program',
  start: 0,
  end: 28,
  body:
   [ Node {
       type: 'VariableDeclaration',
       start: 0,
       end: 28,
       declarations: [Array],
       kind: 'var' } ],
  sourceType: 'script' }
>
>
> d.body[0].declarations
[ Node {
    type: 'VariableDeclarator',
    start: 4,
    end: 27,
    id: Node { type: 'Identifier', start: 4, end: 5, name: 'o' },
    init:
     Node {
       type: 'ObjectExpression',
       start: 8,
       end: 27,
       properties: [Array] } } ]
>
> d.body[0].declarations[0].init
Node {
  type: 'ObjectExpression',
  start: 8,
  end: 27,
  properties:
   [ Node {
       type: 'Property',
       start: 14,
       end: 25,
       method: true,
       shorthand: false,
       computed: false,
       key: [Object],
       kind: 'init',
       value: [Object] } ] }
>
> d.body[0].declarations[0].init.properties
[ Node {
    type: 'Property',
    start: 14,
    end: 25,
    method: true,
    shorthand: false,
    computed: false,
    key: Node { type: 'Identifier', start: 14, end: 15, name: 'f' },
    kind: 'init',
    value:
     Node {
       type: 'FunctionExpression',
       start: 15,
       end: 25,
       id: null,
       expression: false,
       generator: false,
       async: false,
       params: [Array],
       body: [Object] } } ]
>
>
> d.body[0].declarations[0].init.properties[0].value
Node {
  type: 'FunctionExpression',
  start: 15,
  end: 25,
  id: null,
  expression: false,
  generator: false,
  async: false,
  params:
   [ Node {
       type: 'AssignmentPattern',
       start: 16,
       end: 21,
       left: [Object],
       right: [Object] } ],
  body: Node { type: 'BlockStatement', start: 23, end: 25, body: [] } }
>
>
>
> s
'var o = {\n    f(c = 2) {}\n};'
> d.body[0].declarations[0].init.properties[0].value
Node {
  type: 'FunctionExpression',
  start: 15,
  end: 25,
  id: null,
  expression: false,
  generator: false,
  async: false,
  params:
   [ Node {
       type: 'AssignmentPattern',
       start: 16,
       end: 21,
       left: [Object],
       right: [Object] } ],
  body: Node { type: 'BlockStatement', start: 23, end: 25, body: [] } }
>
> d.body[0].declarations[0].init.properties[0].value.params[0]
Node {
  type: 'AssignmentPattern',
  start: 16,
  end: 21,
  left: Node { type: 'Identifier', start: 16, end: 17, name: 'c' },
  right: Node { type: 'Literal', start: 20, end: 21, value: 2, raw: '2' } }
>

