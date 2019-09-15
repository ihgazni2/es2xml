> console.log(s)
function request() {
    ajax({
        url: 'www.someurl.com',
        onSuccess(res){
            it.next(res);  // 恢复Generator运行，同时向其中塞入异步返回的结果
        }
    });
}
undefined
> d = ac.parse(s)
Node {
  type: 'Program',
  start: 0,
  end: 166,
  body:
   [ Node {
       type: 'FunctionDeclaration',
       start: 0,
       end: 166,
       id: [Node],
       expression: false,
       generator: false,
       async: false,
       params: [],
       body: [Node] } ],
  sourceType: 'script' }
> d.body[0].body.body[0].expression.arguments[0].properties[1]
Node {
  type: 'Property',
  start: 72,
  end: 156,
  method: true,
  shorthand: false,
  computed: false,
  key:
   Node { type: 'Identifier', start: 72, end: 81, name: 'onSuccess' },
  kind: 'init',
  value:
   Node {
     type: 'FunctionExpression',
     start: 81,
     end: 156,
     id: null,
     expression: false,
     generator: false,
     async: false,
     params: [ [Node] ],
     body:
      Node { type: 'BlockStatement', start: 86, end: 156, body: [Array] } } }
>

