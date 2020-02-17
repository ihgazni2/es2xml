catch创建的块作用域，只对catch的参数有效。对于在内部声明的变量，catch并没有创建一个新的作用域，只是一个普通的代码块。



在定義域處理上，當作一個 特殊函數的單獨的參數處理

> t = ac.parse('try{}catch(e){}')
Node {
  type: 'Program',
  start: 0,
  end: 15,
  body:
   [ Node {
       type: 'TryStatement',
       start: 0,
       end: 15,
       block: [Node],
       handler: [Node],
       finalizer: null } ],
  sourceType: 'script' }
>
> t.body[0].handler
Node {
  type: 'CatchClause',
  start: 5,
  end: 15,
  param: Node { type: 'Identifier', start: 11, end: 12, name: 'e' },
  body:
   Node { type: 'BlockStatement', start: 13, end: 15, body: [] } }
>


