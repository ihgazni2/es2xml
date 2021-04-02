internal_methods




internal_slots
    proto_type
        data_property      :    get     
        accessor_property  :    get / set
    extensible


O:         ordinary_object
P:         property_key_value
V:         value
desc:      property_desc


GetPrototypeOf
SetPrototypeOf
IsExtensible
PreventExtensions
GetOwnProperty
OrdinaryGetOwnProperty
DefineOwnProperty
OrdinaryDefineOwnProperty
IsCompatiblePropertyDescriptor
ValidateAndApplyPropertyDescriptor
HasProperty
OrdinaryHasProperty


Get
Set
Delete
Enumerate
OwnPropertyKeys
ObjectCreate

OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto, internalSlotsList )


GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )

Call( thisArgument, argumentsList)
PrepareForOrdinaryCall( F, newTarget )
OrdinaryCallBindThis ( F, calleeContext, thisArgument )
OrdinaryCallEvaluateBody ( F, argumentsList )

Construct ( argumentsList, newTarget)

FunctionAllocate
FunctionInitialize
FunctionCreate

GeneratorFunctionCreate
AddRestrictedFunctionProperties
%ThrowTypeError% ( )
MakeConstructor (F, writablePrototype, prototype)

MakeClassConstructor ( F)
MakeMethod ( F, homeObject)

SetFunctionName(F, name, prefix)
    函数名字 可以是 字符串 或者 Symbol
    函数名字 可以传入 前缀 把显示格式  prefix+' '+name
                           和调用格式  name
                      分开
    


FunctionDeclarationInstantiation(func, argumentsList)




o = {}
//添加属性  值 原始值  或者 对象
o.prop_num = 100
o.prop_obj = {}
//添加方法
o.one_prop_function = function tst() {
    if(this === o) {
        console.log('a method')
    }
}


//函数用法
call func_tem                     函数模板
用来创建函数实例frame             实参 上下文 进入点[用于返回] 

//类用法 
extends    继承链
new class_tem                     对象模板
用来创建对象实例                  属性
                                  方法
                                  this指向就是此实例




//需要兼容的用法
new func_tem                      对象模板
func_tem.prototype = {
}                                 方法需要 用 prototype 创建
用来创建对象实例                  callee[this]



Primitive   原始值   实现时直接使用
    undefined
    null
    数字
    字符串
    true
    false
    正则


ID_TBL        符号表



VAR_TEM_TBL         变量符号表

LEVEL_DB

----------------------------------|
name  |  所属定义域 |   guid      |
      |             |   guid      |      
      |             |   guid      |
      |             |   guid      |
----------------------------------|

guid$v
   guid$var
   guid$let
   guid$const

guid$scope
    guid$blk
    guid$func_tem
    guid$cls_tem
    guid$catch









SCOPE_TBL       定义域符号表  
                用来存 定义域
                   block
                   function 模板
                   class    模板
                   catch    



LEVEL_DB
===========================
scope


function  function名称
class     class 名称

匿名函数  自动命名 normal_func_[guid]
箭头函数  自动命名 arrow_func_[guid]

block   自动命名, 随机的block_[guid]
catch   自动命名, 随机的catch_[guid]

====
scope.



//用来存储被调用的函数 被执行的函数
FUNC_FRAME_LEVEL_STACK     函数帧      LEVEL_STACK
//用来存储 被实例化的 对象
//包括 new 的
OBJ_INSTANCE_LEVEL_STACK   对象实例    LEVEL_STACK



a = {
    x:()=>{}, //匿名
    y:200
}
b = 1000

LEVEL DB 层级 仅存储 目录层级
=====================================
global           |
global.a         |  global.a.x<leaf>
                 |  global.a.y<leaf>
global.b<leaf>   |    

K:V  平坦化表(纯K:V数据库)
保证名字[带层级后] 唯一化
值如果是原始值,直接可取
如果是  函数模板  / 类模板 到 函数模板表里
==========================================
global            |  -           
global.a          |  -
global.a.x<leaf>  |  到函数表取找 anonymous_[n] 的函数
global.a.y<leaf>  |  200
global.b<leaf>    |  1000
                    


O:      对象      构造对象  create_object
                  添加属性  add_property
                  删除属性  del_property
                  添加方法  add_method
                  删除方法  del_method













#########

var f = function cons() {
    this.a=100;
    this.b=200;
    //return({a:300,b:400})
}

f.prototype = {
    showa:function showa() {
        console.log(this.a)
    }
}

var o = new f()
> o.showa()
100


var f = function cons() {
    this.a=100;
    this.b=200;
    return({a:300,b:400})    // 有返回,这个写法没有意义,但是合法,所以要处理这种情况
}

f.prototype = {
    showa:function showa() {
        console.log(this.a)
    }
}





##########


enviroment
formal_parameters
function_kind        :   normal | class_constructor | generator
ecma_script_code
constructor_kind     :   base | derived
realm

this_mode
    lexical       // 指箭头函数寻找this的机制 
    strict        //  undefined
    global        //  global


strict
home_object


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


running_excecuion_context
callee_context
env
env_rec
ecma_script_code
strict
formal_parameters
formals
parameter_names
bound_names
has_duplicates
simple_parameter_list
is_simple_parameter_list
has_parameter_expressions
var_names
var_declared_names
var_declarations
var_scoped_declarations
lexical_names
lexically_declared_names
function_names
functions_to_initialize
variable_declaration
for_binding
generator_declaration
bound_names
function_names
arguments_object_needed
param_name
parameter_names
already_declared
env_rec
create_mutable_binding
has_duplicates
initialize_binding
arguments_object_needed
simple_parameter_list
create_unmapped_arguments_object
create_list_iterator
has_duplicates
iterator_binding_initialization
iterator_record
has_parameter_expressions
instantiated_var_names
parameter_names
create_mutable_binding
env
env_rec
var_env
var_env_rec



this_argument
argument_list
new_target




