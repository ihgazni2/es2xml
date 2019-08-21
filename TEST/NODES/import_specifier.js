> s = `import * as myModule from '/modules/my-module.js';`
'import * as myModule from \'/modules/my-module.js\';'
> d= ac.parse(s,{sourceType:"module"})
Node {
  type: 'Program',
  start: 0,
  end: 50,
  body:
   [ Node {
       type: 'ImportDeclaration',
       start: 0,
       end: 50,
       specifiers: [Array],
       source: [Object] } ],
  sourceType: 'module' }
> d.body[0]
Node {
  type: 'ImportDeclaration',
  start: 0,
  end: 50,
  specifiers:
   [ Node {
       type: 'ImportNamespaceSpecifier',
       start: 7,
       end: 20,
       local: [Object] } ],
  source:
   Node {
     type: 'Literal',
     start: 26,
     end: 49,
     value: '/modules/my-module.js',
     raw: '\'/modules/my-module.js\'' } }
>


    > s = `import {myExport} from '/modules/my-module.js';`
'import {myExport} from \'/modules/my-module.js\';'
> d= ac.parse(s,{sourceType:"module"})
Node {
  type: 'Program',
  start: 0,
  end: 47,
  body:
   [ Node {
       type: 'ImportDeclaration',
       start: 0,
       end: 47,
       specifiers: [Array],
       source: [Object] } ],
  sourceType: 'module' }
> d.body[0].specifiers
[ Node {
    type: 'ImportSpecifier',
    start: 8,
    end: 16,
    imported: Node { type: 'Identifier', start: 8, end: 16, name: 'myExport' },
    local: Node { type: 'Identifier', start: 8, end: 16, name: 'myExport' } } ]
>
> d.body[0].specifiers[0]
Node {
  type: 'ImportSpecifier',
  start: 8,
  end: 16,
  imported: Node { type: 'Identifier', start: 8, end: 16, name: 'myExport' },
  local: Node { type: 'Identifier', start: 8, end: 16, name: 'myExport' } }
>


