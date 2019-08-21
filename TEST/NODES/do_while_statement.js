s=`do {
} while (i < 5);`


> d= ac.parse(s)
Node {
  type: 'Program',
  start: 0,
  end: 21,
  body:
   [ Node {
       type: 'DoWhileStatement',
       start: 0,
       end: 21,
       body: [Object],
       test: [Object] } ],
  sourceType: 'script' }
> d.body[0]
Node {
  type: 'DoWhileStatement',
  start: 0,
  end: 21,
  body: Node { type: 'BlockStatement', start: 3, end: 6, body: [] },
  test:
   Node {
     type: 'BinaryExpression',
     start: 14,
     end: 19,
     left: Node { type: 'Identifier', start: 14, end: 15, name: 'i' },
     operator: '<',
     right: Node { type: 'Literal', start: 18, end: 19, value: 5, raw: '5' } } }
>

