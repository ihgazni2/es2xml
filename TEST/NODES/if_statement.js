> d = ac.parse("if(true){}else{}")
Node {
  type: 'Program',
  start: 0,
  end: 16,
  body:
   [ Node {
       type: 'IfStatement',
       start: 0,
       end: 16,
       test: [Object],
       consequent: [Object],
       alternate: [Object] } ],
  sourceType: 'script' }
>
> d.body[0]
Node {
  type: 'IfStatement',
  start: 0,
  end: 16,
  test: Node { type: 'Literal', start: 3, end: 7, value: true, raw: 'true' },
  consequent: Node { type: 'BlockStatement', start: 8, end: 10, body: [] },
  alternate: Node { type: 'BlockStatement', start: 14, end: 16, body: [] } }
>


> d = ac.parse("if(true){}else if(true){}else{}")
Node {
  type: 'Program',
  start: 0,
  end: 31,
  body:
   [ Node {
       type: 'IfStatement',
       start: 0,
       end: 31,
       test: [Object],
       consequent: [Object],
       alternate: [Object] } ],
  sourceType: 'script' }
>
> d.body[0]
Node {
  type: 'IfStatement',
  start: 0,
  end: 31,
  test: Node { type: 'Literal', start: 3, end: 7, value: true, raw: 'true' },
  consequent: Node { type: 'BlockStatement', start: 8, end: 10, body: [] },
  alternate:
   Node {
     type: 'IfStatement',
     start: 15,
     end: 31,
     test: Node { type: 'Literal', start: 18, end: 22, value: true, raw: 'true' },
     consequent: Node { type: 'BlockStatement', start: 23, end: 25, body: [] },
     alternate: Node { type: 'BlockStatement', start: 29, end: 31, body: [] } } }
>


 {
  type: 'IfStatement',
  test: {},
  consequent:  {},
  alternate:  {} }
