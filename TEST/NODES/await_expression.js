s=`async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}`

> d.body[0].body.body[1].declarations[0].init
Node {
  type: 'AwaitExpression',
  start: 70,
  end: 98,
  argument:
   Node {
     type: 'CallExpression',
     start: 76,
     end: 98,
     callee:
      Node {
        type: 'Identifier',
        start: 76,
        end: 96,
        name: 'resolveAfter2Seconds' },
     arguments: [] } }
>



