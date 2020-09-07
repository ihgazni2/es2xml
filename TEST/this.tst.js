var myFunction = () => {
  console.log(this);
};

// call it
myFunction(); //global


var myObject = {
  myMethod: () => {
    console.log(this);
  }
};


myObject.myMethod() //global

var myMethod = myObject.myMethod;

myMethod() //global


var myObject = {
  myArrowFunction: null,
  myMethod: function () {
    this.myArrowFunction = () => { console.log("aaaa",this) };
  }
};


myObject.myMethod() 

myObject.myArrowFunction() //myObject
//> myObject.myArrowFunction()
//aaaa { myArrowFunction: [Function], myMethod: [Function: myMethod] }
//undefined

myArrowFunction = myObject.myArrowFunction;
myArrowFunction() //myObject
//> myArrowFunction()
//aaaa { myArrowFunction: [Function], myMethod: [Function: myMethod] }
//undefined
//>

var myObject = {
  myMethod: function () {
    helperObject.doSomethingAsync('superCool', () => {
      console.log(this); // this === myObject
    });
  },
};

//词法作用域向上找到第一个 函数 作用域, 这个函数作用域的this
//
//
//

var myObject = {
  myMethod: function () {
    (() => {
      console.log(this); // this === myObject
    })()
  },
};

myObject.myMethod()//myObject

var func = myObject.myMethod
func()//global



var myObject = {
  myMethod: function () {
    console.log("parent func this:",this)
    let d = {
      f : () => {console.log("arrow this",this);}, // this === myObject
      v : 888888
    }
    return(d)
  },
};

> myObject.myMethod()
parent func this: { myMethod: [Function: myMethod] }
{ f: [Function: f], v: 888888 }
>
> myObject.myMethod().f()
parent func this: { myMethod: [Function: myMethod] }
arrow this { myMethod: [Function: myMethod] }
undefined
>


var f = myObject.myMethod().f


> var f = myObject.myMethod().f
parent func this: { myMethod: [Function: myMethod] }
undefined
> f()
arrow this { myMethod: [Function: myMethod] }
undefined
>



// 上级函数级 作用域的  this

var pf = myObject.myMethod

pf().f()//global



var myObject = {
  myMethod: function () {
    console.log("parent func this:",this)
    let d = {
      f : () => {console.log("arrow this",this);}, // this === myObject
      v : 888888
    }
    return(d)
  },
  objThis:this
};



var obj ={
    a: {
        objthis:this,//global
        aa: {
            objthis:this,//global
        }
    },
    objthis:this//global
}


class X {
    constructor (){
        console.log(this)
    }
}

> x = new X()
X {}
X {}
>

class Y {
    constructor (){
        console.log("YY",this)
    }
}

> Y.constructor()()
undefined
> new Y()
YY Y {}
Y {}
>





with (obj) {
    console.log("with",this)//global
}


> function f() {
...     console.log(this)
... }
undefined
>
> nf = new f()
f {}
f {}
>



class tst {
    constructor () {
        console.log(this)
    }
}


> nt = new tst()
tst {}
tst {}
>
>


///题目初始化

var prop = 'global.prop';
var obj = {
    prop: 'obj.prop',
    array:[
        100,
        function() {
            console.log(this.prop);
        },
        200
    ]
}
obj.array.prop = 'obj.array.prop';


//预热
global.prop;
obj.prop;
obj.array.prop;
obj.array[1].prop;

//1.  
obj.array[1]();
    /*
     * A. 'global.prop'
     * B. 'obj.prop'
     * C. 'obj.array.prop'
     * D. undefined
     */
//2.
var f = obj.array[1];
f();
    /*
     * A. 'global.prop'
     * B. 'obj.prop'
     * C. 'obj.array.prop'
     * D. undefined
     */

//3.
var tmp = obj.array;
tmp[1]();
    /*
     * A. 'global.prop'
     * B. 'obj.prop'
     * C. 'obj.array.prop'
     * D. undefined
     */

//4.
var tmp = obj;
obj.array[1]();
    /*
     * A. 'global.prop'
     * B. 'obj.prop'
     * C. 'obj.array.prop'
     * D. undefined
     */

//5.
var f = obj.array[1];
var fx = f.bind(obj);
fx();
    /*
     * A. 'global.prop'
     * B. 'obj.prop'
     * C. 'obj.array.prop'
     * D. undefined
     */

//6.
var f = obj.array[1];
var fx = f.bind(obj.array);
fx();
    /*
     * A. 'global.prop'
     * B. 'obj.prop'
     * C. 'obj.array.prop'
     * D. undefined
     */

//7.
var f = obj.array[1];
var fx = f.bind(f);
fx();

    /*
     * A. 'global.prop'
     * B. 'obj.prop'
     * C. 'obj.array.prop'
     * D. undefined
     */






