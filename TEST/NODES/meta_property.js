> s
'function Foo() {\n  if (!new.target) throw \'Foo() must be called with new\';\n}'
> d.body[0].body.body[0].test
Node {
  type: 'UnaryExpression',
  start: 23,
  end: 34,
  operator: '!',
  prefix: true,
  argument:
   Node {
     type: 'MetaProperty',
     start: 24,
     end: 34,
     meta: Node { type: 'Identifier', start: 24, end: 27, name: 'new' },
     property: Node { type: 'Identifier', start: 28, end: 34, name: 'target' } } }
>
>

