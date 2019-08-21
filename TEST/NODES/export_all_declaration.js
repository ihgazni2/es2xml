> s = `export * from "mod1"`
'export * from "mod1"'
> d= ac.parse(s,{sourceType:"module"})
Node {
  type: 'Program',
  start: 0,
  end: 20,
  body:
   [ Node {
       type: 'ExportAllDeclaration',
       start: 0,
       end: 20,
       source: [Object] } ],
  sourceType: 'module' }
>

