> s =`let {g, h} = obj;`
'let {g, h} = obj;'
> d=ac.parse(s)
Node {
  type: 'Program',
  start: 0,
  end: 17,
  body:
   [ Node {
       type: 'VariableDeclaration',
       start: 0,
       end: 17,
       declarations: [Array],
       kind: 'let' } ],
  sourceType: 'script' }
> d.body[0].declarations
[ Node {
    type: 'VariableDeclarator',
    start: 4,
    end: 16,
    id: Node { type: 'ObjectPattern', start: 4, end: 10, properties: [Array] },
    init: Node { type: 'Identifier', start: 13, end: 16, name: 'obj' } } ]
>
> d.body[0].declarations[0].id
Node {
  type: 'ObjectPattern',
  start: 4,
  end: 10,
  properties:
   [ Node {
       type: 'Property',
       start: 5,
       end: 6,
       method: false,
       shorthand: true,
       computed: false,
       key: [Object],
       kind: 'init',
       value: [Object] },
     Node {
       type: 'Property',
       start: 8,
       end: 9,
       method: false,
       shorthand: true,
       computed: false,
       key: [Object],
       kind: 'init',
       value: [Object] } ] }
>

