
lex_env         lexical environment

er              enviroment record
    scope          //er scope 定义域scope
                   //绑定 identifier
                   //变量 函数声明  类声明的identifier 绑定在er 中
                   //
        FunctionDeclaration
        BlockStatement
        Class
        Catch
       


outer           outer  lexical enviroment


lex_env
    g_env         global_env           global enviroment
    m_env         module_env           module enviroment
    f_env         function_env         


genv {
    er:{
        'this':gobj,
    },
    outer:null,
}



er:
    der    declarative_enviroment_record
        FunctionDeclarations
        VariableDeclarations
        Catch
    oer    objective_enviroment_record       
       WithStatement
    ger


{
    er:{
        der:{
            mer:{},
            fer:{},
        },
        oer:{},
        ger:{}
    }
}





{
    lex_env: {
        er:{
            this_binding:,//
            id_bindings://
        },                     //环境记录
        outer:{},                  //parent lex_env
    }
}


var x=1
let y=2

function tst() {
    function tst1() {}
    var x= 11
}

domain-scope:
    global
    global.x
    global.y    //不属于global.x
    global.tst
    global.tst.tst1
    global.tst.x

propert-scope:
    global
    global.x
    global.tst
    global.tst.tst1
    global.tst.x


d$        domain     scope
p$        property   scope



<global
    x=1
    y=2
    tst=ref$<tst>
>
    <tst
        x=1
        tst1=ref$<tst1>
    >
        <tst1></tst1>
    </tst>
</global>


/// 属性域
    //
    //
    //
    //




HasBinding(N)
CreateMutableBinding(N, D)
CreateImmutableBinding(N, S)
InitializeBinding(N,V)
SetMutableBinding(N,V, S)
GetBindingValue(N,S)
DeleteBinding(N)
HasThisBinding()
HasSuperBinding()

WithBaseObject ()



der:
    var
    const
    let
    class
    module
    import 
    function




domain-scope
$guid | tag |
//$guid 就使用 ast 节点的 guid

//tag 就是 name
//如果匿名函数 $anonymous  


get_scope_via_guid

//spl  sibseq-pathlist
get_scope_via_spl

//bpl  breadth-pathlist
get_scope_via_bpl

//tpl
//children  domain-scope 是不能重名的
get_scope_via_strict_tpl

// descedant
get_scope_via_half_strict_tpl

//每个tag  contains 即可
get_scope_via_loose_tpl



对于某个 绑定  
根据这个变量绑定的 $guid
可以获取到其scope





AST
DOMAIN-SCOPE
PROPERTY-SCOPE    
RUN-SCOPE
DIRECTIVE
PC


FUNC_TBL         function-identifier   绑定表   
                 [module,class,function,block]
VAR_TBL          variable-identifier   绑定表   var,const,let
PROP_TBL         property-identifier   绑定表


env_rec

has_binding(name)
create_mutable_binding(name,deletable)
create_immutable_binding(name,strict)
initialize_binding(name,val)
set_mutable_binding(name,val,strict)
get_binding_value(name,strict)
delete_binding(name)
has_this_binding()
has_super_binding()
with_base_object()







oer
    binding_obj          //binding_object


var d = {
    a:1111,
    b:2222
}

with(d) {
    console.log(this)
}

withEnvironment


=============================



fer
    this_value
    this_binding_status   
        lexical  //箭头函数
        initialized
        uninitialized
    function_object
    home_object          
    new_target                  





