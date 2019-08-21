> d = ac.parse("for(let i of d){}")
Node {
  type: 'Program',
  start: 0,
  end: 17,
  body:
   [ Node {
       type: 'ForOfStatement',
       start: 0,
       end: 17,
       await: false,
       left: [Object],
       right: [Object],
       body: [Object] } ],
  sourceType: 'script' }


> nd = d.body[0]
Node {
  type: 'ForOfStatement',
  start: 0,
  end: 17,
  await: false,
  left:
   Node {
     type: 'VariableDeclaration',
     start: 4,
     end: 9,
     declarations: [ [Object] ],
     kind: 'let' },
  right: Node { type: 'Identifier', start: 13, end: 14, name: 'd' },
  body: Node { type: 'BlockStatement', start: 15, end: 17, body: [] } }
>
> nd.await = true
true
> console.log(escodegen.generate(nd))
for await (let i of d) {
}
undefined
>



