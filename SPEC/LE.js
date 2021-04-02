GetIdentifierReference (lex, name, strict)

NewDeclarativeEnvironment(E)
NewObjectEnvironment(O, E)

NewFunctionEnvironment(F, newTarget)


NewGlobalEnvironment ( G )





dscope      declarative 作用域

dcl_tbl     用来存储 变量/函数/class 等 identifiers 
            模板作用

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
oscope      objective  作用域
obj_tbl     用来存储   属性性质的  
            看板作用

path | prop   |  obj 所属obj   | obj所属dscope |   val  值 


function tst() {
    var o = {
        x: function t1() {}
    }
}

der
---
global$do
global$do.tst$d


oer
---
global$do
global$do.tst$d.o$o.x$o.t1$d


$d    自己是         dcl  性质的名字
$o    自己是         prop 性质的名字
$do   自己同时有     dcl 和 prop 性质



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

