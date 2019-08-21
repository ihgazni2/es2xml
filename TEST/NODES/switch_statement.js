s = `
switch (expr) {
  case 'Mangoes':
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}`


> d.body[0]
Node {
  type: 'SwitchStatement',
  start: 1,
  end: 102,
  discriminant: Node { type: 'Identifier', start: 9, end: 13, name: 'expr' },
  cases:
   [ Node {
       type: 'SwitchCase',
       start: 19,
       end: 34,
       consequent: [],
       test: [Object] },
     Node {
       type: 'SwitchCase',
       start: 37,
       end: 100,
       consequent: [Array],
       test: null } ] }
>


