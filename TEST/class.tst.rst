
实验
----
- 原型对象链关系__proto__
- 实例对象---__proto__--->原型对象---__proto__--->超级原型对象{}--__proto__-->null
- 函数或类 --__proto__--->超级构造函数原型对象---__proto__--->超级原型对象{}--__proto__-->null
- 超级构造函数 -- constructor -->超级构造函数
- 函数或类 -- constructor -->超级构造函数
- 超级构造函数原型对象 -- constructor -->超级构造函数
- 原型对象 -- constructor --> 函数或类 -- constructor -->超级构造函数
- 两条链
- __proto__ 链条 总是通过 -->原型对象---__proto__--->超级原型对象{}--__proto__-->null
- constructor 链条 总是通过 --> 函数或类 -- constructor -->超级构造函数

    ::







                                      null
                                       ^
                                       |(__proto__原型模板)
                                       |
        Object函数----prototype---->超级原型对象{}
                                       |
                                       |(__proto__原型模板)
                                       |
        超级构造函数---prototype--->超级函数原型对象[Function]



                                      null
                                       ^
                                       |(__proto__原型模板)
                                       |
        Object函数----prototype---->超级原型对象{}
                                       |
                                       |(__proto__原型模板)
                                       |
        普通函数/普通类-prototype--> func{}原型对象/Cls{}原型对象
                                       |
                                       |(__proto__原型模板)
                                       |
                                     普通实例对象



- null
- $超级构造函数  [Function: Function]  //取值 Function
- _超级函数原型  [Function]            //取值 Function.prototype
- O超级对象原型  {}//prototype-obj     //取值 Function.prototype.__proto__ 或 Object.prototype
- Object函数     [Function: Object]    //取值 Object
- 对象分原型 以及 实例
- 原型                                 //原型是一种对象, 只有函数或类有原型
- 实例对象                             //实例是一种对象, 实例没有原型, 但是实例依托一个 原型模板
- 原型.__proto__                       //是 O超级对象原型  {}//prototype-obj
- 实例对象.__proto__                   //实例的[构造函数的原型]
- 只有超级函数原型 者一种原型 是函数,其他原型都是对象

    ::

        null
        //null
        Object
        //[Function: Object]
        var $超级构造函数 = Function
        //[Function: Function]
        var _超级函数原型 = Function.prototype
        //[Function]
        var O超级对象原型 = Function.prototype.__proto__
        //{}

        /*$超级构造函数 [Function: Function] 性质*/
        $超级构造函数.constructor === $超级构造函数
        $超级构造函数.prototype  === _超级函数原型
        $超级构造函数.__proto__  === _超级函数原型
        $超级构造函数.__proto__  === $超级构造函数.constructor.prototype

        typeof($超级构造函数) //function

        /*_超级函数原型 [Function] 性质*/
        _超级函数原型.constructor === $超级构造函数
        _超级函数原型.prototype === undefined
        //原型对象的 __proto__ 是 {}//prototype-obj
        //这一点和实例对象不同
        _超级函数原型.__proto__ === O超级对象原型
        _超级函数原型.__proto__  === Object.prototype
        _超级函数原型.__proto__ !== _超级函数原型.constructor.prototype

        typeof(_超级函数原型) //function

        /*O超级对象原型 {}//prototype-obj  性质*/
        O超级对象原型.constructor === Object
        O超级对象原型.prototype === undefined
        //下面这条规则例外
        O超级对象原型.__proto__ === null
        O超级对象原型.__proto__ !== O超级对象原型.constructor.prototype


        typeof(O超级对象原型) //object

        /*Object 函数 [Function: Object] 性质*/
        Object.constructor === $超级构造函数
        Object.prototype === O超级对象原型
        Object.prototype === _超级函数原型.__proto__
        Object.__proto__ === _超级函数原型
        Object.__proto__ === Object.constructor.prototype
        typeof(Object)  //function


        /*具体函数 与new的实例*/
        var f一个具体函数 = function func(){}
        var p具体函数原型 = f一个具体函数.prototype
        var i具体函数实例 = new f一个具体函数()

        f一个具体函数.constructor === $超级构造函数
        f一个具体函数.prototype === p具体函数原型
        f一个具体函数.__proto__ === _超级函数原型
        f一个具体函数.__proto__ === f一个具体函数.constructor.prototype

        p具体函数原型.constructor === f一个具体函数
        p具体函数原型.prototype === undefined
        //非实例对象 也就是原型对象的 __proto__ 是 {}//prototype-obj
        p具体函数原型.__proto__ === O超级对象原型
        p具体函数原型.__proto__ !== p具体函数原型.constructor.prototype

        i具体函数实例.constructor === f一个具体函数
        //实例没有 原型对象
        i具体函数实例.prototype === undefined
        //实例依托的 原型对象(对象模板)
        i具体函数实例.__proto__  === p具体函数原型
        //实例依托的 原型对象(对象模板) 是构造函数的原型对象
        i具体函数实例.__proto__  === i具体函数实例.constructor.prototype

        /*object*/
        var obj ={}
        obj.constructor === Object
        obj.prototype === undefined
        obj.__proto__ === O超级对象原型
        obj.__proto__ === obj.constructor.prototype
        obj.__proto__ === Object.prototype

        /*array*/
        var arr =[]
        var A原型对象 = Array.prototype

        arr.constructor === Array
        arr.prototype === undefined
        arr.__proto__ === A原型对象
        arr.__proto__ === arr.constructor.prototype



        /*具体class与new的实例*/
        class Cls {
        }

        var Cls原型 = Cls.prototype

        Cls.constructor === $超级构造函数
        Cls.prototype === Cls原型
        Cls.__proto__ === _超级函数原型
        Cls.__proto__ === Cls.constructor.prototype

        Cls原型.constructor === Cls
        //原型对象没有原型对象
        Cls原型.prototype === undefined
        Cls原型.__proto__ === O超级对象原型
        Cls原型.__proto__ !== Cls原型.constructor.prototype

        var clso = new Cls()
        clso.constructor === Cls
        //实例没有原型对象
        clso.prototype === undefined
        //实例依托的原型对象
        clso.__proto__ === Cls原型
        //实例依托的原型对象  是 构造函数的原型对象
        clso.__proto__ === clso.constructor.prototype

表格
---------

    ::

        name                  display                constructor    prototype      __proto__
        =======================================================================================
        null                  null                   -------        ------         ------
        =======================================================================================
        O超级对象原型         {}//prototype-obj      Object        ---------      null
        $超级构造函数         [Function: Function]   $超级构造函数  _超级函数原型  _超级函数原型
        _超级函数原型         [Function]             $超级构造函数  ---------      O超级对象原型
        Object                [Function: Object]     $超级构造函数  O超级对象原型  _超级函数原型
        ========================================================================================
        f一个具体函数         [Function: func]       $超级构造函数  p具体函数原型  _超级函数原型
        p具体函数原型         func {}//prototype-obj  f一个具体函数    ---------    O超级对象原型
        i具体函数实例         func {}//instance-obj   f一个具体函数  -----------    p具体函数原型
        =========================================================================================
        obj                   {}//instance-obj       Object         -----------    O超级对象原型
        arr                   []//instance-obj       Array          -----------    A原型对象
        A原型对象             []//prototype-obj      Array          ----------     O超级对象原型
        Array                 [Function: Array]      $超级构造函数  ----------     _超级函数原型
        ========================================================================================
        Cls                   [Function: Cls]        $超级构造函数  Cls原型        _超级函数原型
        Cls原型               Cls {}//prototype-obj  Cls            --------       O超级对象原型
        clso                  Cls {}//instance-obj   Cls            ---------      Cls原型




规则
----

constructor
===========
- constructor 是一个函数
- constructor 不能是自己

    ::

        例外: 超级构造函数[Function: Function] 的 构-

- 函数或类的constructor 是 超级构造函数[Function: Function]


prototype
=========
- prototype 是一个对象

    ::

        例外: 超级函数原型[Function]  是一个函数

- 对象没有prototype


__proto__
=========
- __proto__ 是一个对象

    ::

        例外: 超级构造函数[Function: Function] 的__proto__ 是一个函数  超级函数原型[Function]

- 函数/类与实例的 @.__proto__ === @.constructor.prototpye

    ::

        例外: 超级函数原型[Function] 的 __proto__ 是 超级对象原型 {}//prototype-obj
        例外: 超级对象原型{}//prototype-obj 的__proto__ 是null

- 函数原型/类原型的  @.__proto__ === 超级对象原型{}//prototype-obj


- 超级对象原型 {}//prototype-obj 的 __proto__ 是null


特殊函数与特殊对象
------------------

null
====
- null 没有constructor函数        #规则例外
- null 没有prototype对象          #规则例外
- null 没有__proto__对象          #规则例外

超级构造函数[Function: Function]
================================
- cons-pt-proto   自己:Function{}:Function{}
- [Function: Function] 的constructor函数       是自己                     #规则例外
- [Function: Function] 的prototype对象         是超级函数原型[Function]
- [Function: Function] 的__proto__对象         是超级函数原型[Function]

超级函数原型[Function]
======================
- cons-pt-proto   [Function: Function]:-:{}//prototype-obj
- [Function] 的constructor函数    是 超级构造函数[Function: Function]
- [Function] 没有prototype对象
- [Function] 的__proto__对象      是 超级对象原型{}                       #规则例外

超级对象原型 {}//prototype-obj
===============================
- cons-pt-proto   [Function: Object]:-:null
- {}//prototype-obj 的constructor函数 是Object
- {}//prototype-obj 没有prototype对象
- {}//prototype-obj 的__proto__对象   是null

Object
=======
- cons-pt-proto   [Function: Function]:{}//prototype-obj:[Function:{}]
- Object 的constructor函数 是 超级构造函数[Function: Function]
- Object 的prototype对象   是 超级对象原型 {}//prototype-obj
- Object 的__proto__对象   是 超级函数原型[Function:{}]

普通函数与类
============
- cons-pt-proto    [Function: Function]:func {}//prototype-obj或Cls {}//prototype-obj:[Function:{}]
- func/Cls    的constructor函数 是 超级构造函数[Function: Function]
- func/Cls    的prototype对象   是 func {}//prototype-obj或Cls {}//prototype-obj
- func/Cls    的__proto__对象   是 超级函数原型[Function:{}]


实例对象
========
- cons-pt-proto   func/Cls:-:func {}//prototype-obj或Cls {}//prototype-obj
- 实例            的constructor函数 是 new 后面那个函数
- 实例            没有prototype对象
- 实例            的__proto__对象    是 func {}//prototype-obj或Cls {}//prototype-obj



clso                  Cls {}//instance-obj   Cls            ---------      Cls原型



