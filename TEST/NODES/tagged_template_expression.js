function highlight(strings, ...values) {
     // here i is the iterator for the strings array
     return strings.reduce((result, string, i) => {
      return `${result}${string} <cite>${values[i] || ''}</cite>`;
    }, '');
}

const author = 'Thomas A. Edison';
const statement = `I have not failed. I've just found 10,000 ways that won't work.`;
const quote = highlight`${statement} by ${author}`;


> d = ac.parse("highlight`${statement} by ${author}`")
Node {
  type: 'Program',
  start: 0,
  end: 36,
  body:
   [ Node {
       type: 'ExpressionStatement',
       start: 0,
       end: 36,
       expression: [Object] } ],
  sourceType: 'script' }
>
> d.body[0].expression
Node {
  type: 'TaggedTemplateExpression',
  start: 0,
  end: 36,
  tag: Node { type: 'Identifier', start: 0, end: 9, name: 'highlight' },
  quasi:
   Node {
     type: 'TemplateLiteral',
     start: 9,
     end: 36,
     expressions: [ [Object], [Object] ],
     quasis: [ [Object], [Object], [Object] ] } }
>



