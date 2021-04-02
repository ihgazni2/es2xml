a = {
   toString(){
      return 'My little pony' + super.toString(); //这里的super又指向什么
   },
   tst(){
       console.log(super.toString())
   }
}

class Cat { 
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
class Lion extends Cat {
  constructor(name, color) {
     super(name); // Cat.prototype.constructor.call(this, name)
     this.color = color;
  }
  speak() {
    super.speak(); // Cat.prototype.speak.call(this) 
    console.log(this.name + ' roars.');
  }
}






作者：郑航
链接：https://www.zhihu.com/question/38292361/answer/105183980
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

class语句块内的constructor函数的定义内，例如：class B extends A {
    constructor(){
        super()
    }
}
建立class时，当且仅当“使用了extends关键字并指定了constructor函数”，super关键字必须以super([arg1[, arg2...  argN]])的形式使用一次。此时super([arg1[, arg2...  argN]])相当于创建了一个对象，且以该对象为context调用extends关键字指示的函数（以new的形式），随后这个对象成为constructor函数的context。因此super([arg1[, arg2...  argN]])必须出现在constructor函数内的第一个this关键字之前，否则会报“this is not defined”的ReferenceError。亦可以super . IdentifierName的形式出现（这就与是否使用了extends关键字无关了）。super.IdentifierName作为getter使用时，表示函数B的prototype属性对象的[[prototype]]；super.IdentifierName作为setter使用时，super表示this；





class语句块内的static函数的定义内，例如：class B extends A {
    static foo {
        super.test1() // 相当于A.test1.call(this)
        console.log(super.test2 === A.test2)
    }
}
必须以super . IdentifierName的形式出现。super.IdentifierName作为getter时，super表示该函数B的[[prototype]]（本例中B的[[prototype]]即A）。若通过super.IdentifierName()来调用函数，则此函数的相当于通过.call(this)调用。super.IdentifierName作为setter使用时，super表示this。

作者：郑航
链接：https://www.zhihu.com/question/38292361/answer/105183980
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。




class语句块内的一般方法（非static或constructor函数）的定义内，例如：class B extends A {
    foo() {
        super.foo()
    }
}
必须以super . IdentifierName的形式出现。super.IdentifierName作为getter时，super表示该函数B的prototype属性对象的[[prototype]]。同样，若通过super.IdentifierName()来调用函数，则此函数的相当于通过.call(this)调用；super.IdentifierName作为setter使用时，super表示this。

作者：郑航
链接：https://www.zhihu.com/question/38292361/answer/105183980
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



let a = {
    foo() {
        super.test()
    }
}

let b = {
    test() {
        console.log("I'm b.")
    }
}

Object.setPrototypeOf(a, b);
a.foo(); // "I'm b."



必须以super . IdentifierName的形式出现，super.IdentifierName作为getter时，super表示该对象的[[prototype]]。同样，若通过super.IdentifierName()来调用函数，则此函数的相当于通过.call(this)调用。super.IdentifierName作为setter使用时，super表示this。





function Foo(){}
let o = new Foo()

  o.constructor                 :  Foo
  o.__proto__                   :  Foo.prototype
  Foo.prototype.constructor     :  Foo

  Foo.prototype.__proto__       :  Object.prototype




> o.__proto__
Foo {}
> Foo.prototype
Foo {}
> o.constructor
[Function: Foo]
> Foo.prototype.constructor
[Function: Foo]
>
> type(Foo.prototype)
Uncaught ReferenceError: type is not defined
> typeof(Foo.prototype)
'object'
> o.__proto__.__proto__
{}
>
> o.__proto__.__proto__.__proto__
null
>



scope
property

proto 




====================


ger
    builtin_globals
    properties
    top_level_declarations




ger {
    base_object:
    oer:{},
    der:{},
    varnames:
}




lexical_scope

object_scope




