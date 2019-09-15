> s = `addon( function (pi) {
... console.log("同步计算pi,但是回调返回结果",pi);
... })`
'addon( function (pi) {\nconsole.log("同步计算pi,但是回调返回结果",pi);\n})'
>
> d = ac.parse(s)
Node {
  type: 'Program',
  start: 0,
  end: 60,
  body:
   [ Node {
       type: 'ExpressionStatement',
       start: 0,
       end: 60,
       expression: [Node] } ],
  sourceType: 'script' }
> d.body[0].expression[0]
undefined
> d.body[0].expression
Node {
  type: 'CallExpression',
  start: 0,
  end: 60,
  callee: Node { type: 'Identifier', start: 0, end: 5, name: 'addon' },
  arguments:
   [ Node {
       type: 'FunctionExpression',
       start: 7,
       end: 59,
       id: null,
       expression: false,
       generator: false,
       async: false,
       params: [Array],
       body: [Node] } ] }
>
> d.body[0].expression.arguments[0]
Node {
  type: 'FunctionExpression',
  start: 7,
  end: 59,
  id: null,
  expression: false,
  generator: false,
  async: false,
  params:
   [ Node { type: 'Identifier', start: 17, end: 19, name: 'pi' } ],
  body:
   Node { type: 'BlockStatement', start: 21, end: 59, body: [ [Node] ] } }
>

