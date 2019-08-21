s = `function* foo(index) {
  while (index < 2) {
    yield index++;
  }
}`

> d.body[0].body.body[0].body.body[0].expression
Node {
  type: 'YieldExpression',
  start: 49,
  end: 62,
  delegate: false,
  argument:
   Node {
     type: 'UpdateExpression',
     start: 55,
     end: 62,
     operator: '++',
     prefix: false,
     argument: Node { type: 'Identifier', start: 55, end: 60, name: 'index' } } }
>


    > x = d.body[0].body.body[0].body.body[0].expression
Node {
  type: 'YieldExpression',
  start: 49,
  end: 62,
  delegate: false,
  argument:
   Node {
     type: 'UpdateExpression',
     start: 55,
     end: 62,
     operator: '++',
     prefix: false,
     argument: Node { type: 'Identifier', start: 55, end: 60, name: 'index' } } }
> x.delegate = true
true
> console.log(escodegen.generate(x))
yield* index++
undefined
> x
Node {
  type: 'YieldExpression',
  start: 49,
  end: 62,
  delegate: true,
  argument:
   Node {
     type: 'UpdateExpression',
     start: 55,
     end: 62,
     operator: '++',
     prefix: false,
     argument: Node { type: 'Identifier', start: 55, end: 60, name: 'index' } } }
> x.delegate = false
false
>
> console.log(escodegen.generate(x))
yield index++
undefined
>

