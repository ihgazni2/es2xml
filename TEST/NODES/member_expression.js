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


    > d=ac.parse(`exports["unsigned short"] = createIntegerConversion(16, { unsigned: true });`,{sourceType:"module"})
Node {
  type: 'Program',
  start: 0,
  end: 76,
  body:
   [ Node {
       type: 'ExpressionStatement',
       start: 0,
       end: 76,
       expression: [Object] } ],
  sourceType: 'module' }
>
> d.body[0].expression
Node {
  type: 'AssignmentExpression',
  start: 0,
  end: 75,
  operator: '=',
  left:
   Node {
     type: 'MemberExpression',
     start: 0,
     end: 25,
     object: Node { type: 'Identifier', start: 0, end: 7, name: 'exports' },
     property:
      Node {
        type: 'Literal',
        start: 8,
        end: 24,
        value: 'unsigned short',
        raw: '"unsigned short"' },
     computed: true },
  right:
   Node {
     type: 'CallExpression',
     start: 28,
     end: 75,
     callee:
      Node {
        type: 'Identifier',
        start: 28,
        end: 51,
        name: 'createIntegerConversion' },
     arguments: [ [Object], [Object] ] } }
>

