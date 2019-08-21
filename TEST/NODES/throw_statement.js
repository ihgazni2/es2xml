s=`function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
}

try {
  getRectArea(3, 'A');
}
catch(e) {
  console.log(e);
  // expected output: "Parameter is not a number!"
}`


d = ac.parse(s)


> d.body[0].body.body[0].consequent.body[0]
Node {
  type: 'ThrowStatement',
  start: 81,
  end: 116,
  argument:
   Node {
     type: 'Literal',
     start: 87,
     end: 115,
     value: 'Parameter is not a number!',
     raw: '"Parameter is not a number!"' } }
>



