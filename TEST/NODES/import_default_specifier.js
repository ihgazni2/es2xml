> s = `import myDefault from '/modules/my-module.js';`
'import myDefault from \'/modules/my-module.js\';'
> d= ac.parse(s,{sourceType:"module"})
Node {
  type: 'Program',
  start: 0,
  end: 46,
  body:
   [ Node {
       type: 'ImportDeclaration',
       start: 0,
       end: 46,
       specifiers: [Array],
       source: [Object] } ],
  sourceType: 'module' }
> d.body[0].specifiers[0]
Node {
  type: 'ImportDefaultSpecifier',
  start: 7,
  end: 16,
  local: Node { type: 'Identifier', start: 7, end: 16, name: 'myDefault' } }
>

