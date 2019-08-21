d = ac.parse("()=>{}")

> d.body[0].expression
Node {
  type: 'ArrowFunctionExpression',
  start: 0,
  end: 6,
  id: null,
  expression: false,
  generator: false,
  async: false,
  params: [],
  body: Node { type: 'BlockStatement', start: 4, end: 6, body: [] } }

