> s=`export default expression;`
'export default expression;'
> d= ac.parse(s,{sourceType:"module"})
Node {
  type: 'Program',
  start: 0,
  end: 26,
  body:
   [ Node {
       type: 'ExportDefaultDeclaration',
       start: 0,
       end: 26,
       declaration: [Object] } ],
  sourceType: 'module' }
> d.body[0].declaration
Node { type: 'Identifier', start: 15, end: 25, name: 'expression' }
>

