
{
 type: 'BlockStatement',
 body:
       []
}

> d =ac.parse("{}")
Node {
  type: 'Program',
  start: 0,
  end: 2,
  body: [ Node { type: 'BlockStatement', start: 0, end: 2, body: [] } ],
  sourceType: 'script' }
>
> d.body[0]
Node { type: 'BlockStatement', start: 0, end: 2, body: [] }
>


