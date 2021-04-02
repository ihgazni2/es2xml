var ts = require("typescript")
var fn = "tst.ts"
var cd = `export interface IconIntf {
  name: IconName;
  data: string;
}`


var o = ts.createSourceFile(
    fn, 
    cd, 
    ts.ScriptTarget.Latest,  
    /*setParentNodes*/ false, 
    ts.ScriptKind.TS
);

//注意第三个参数,把那个参数整成false, 就可以避免Circular, 避免了Circular ,ts本身的JSON 序列化就可以用了
var ast = JSON.parse(JSON.stringify(o))
//但是这个ast 开发阶段用起来不方便, 和普通 estree 的定义有点不同,他为了压缩所有枚举没用字符串直接用的数字,比如
/*
> ast.kind
294   ---------------------------->
> ts.SyntaxKind[294]
'SourceFile'           ----------->调试时候,你得再敲一行看看,很烦
>
*/


//简单直接的话还是上babel,babel 把上面那个ast 转了一下,节点类型枚举都直接是字符串,开发阶段调试方便
//npm install @babel/types
//npm install @babel/parser
var parse = require('@babel/parser').parse
var tstyp = require('@babel/types')
var ast= parse(cd,{sourceType:'module',ranges:false,plugins:['typescript']})   //

//
var nvjson=require('nvjson') 
var tree = nvjson.jobj2tree(ast)   // 反序列化
var sdfs = tree.$sdfs()         //节点平坦化成一个数组,并且保留所有结构信息
var nds = sdfs.filter(r=>(r.val && r.val.type === 'TSPropertySignature' && r.val.key.name === 'data'))
var nd = nds[0]
nd.val.typeAnnotation.typeAnnotation.type
/*
> 
'TSStringKeyword'                              //data: string; 类型是'TSStringKeyword'
>
*/
