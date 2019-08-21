> s=`export {default} from 'mod';`
'export {default} from \'mod\';'
>
> d= ac.parse(s,{sourceType:"module"})
Node {
  type: 'Program',
  start: 0,
  end: 28,
  body:
   [ Node {
       type: 'ExportNamedDeclaration',
       start: 0,
       end: 28,
       declaration: null,
       specifiers: [Array],
       source: [Object] } ],
  sourceType: 'module' }
>

