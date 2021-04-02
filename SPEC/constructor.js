> class Parent {
... }
undefined
>
> class Son extends Parent {
... }
undefined
>
> Son.
Son.__defineGetter__      Son.__defineSetter__      Son.__lookupGetter__
Son.__lookupSetter__      Son.__proto__             Son.hasOwnProperty
Son.isPrototypeOf         Son.propertyIsEnumerable  Son.toLocaleString
Son.valueOf

Son.apply                 Son.arguments             Son.bind
Son.call                  Son.caller                Son.constructor
Son.toString

Son.length                Son.name                  Son.prototype

> Son.prototype
Son {}
> Son.prototype.
Son.prototype.__defineGetter__      Son.prototype.__defineSetter__
Son.prototype.__lookupGetter__      Son.prototype.__lookupSetter__
Son.prototype.__proto__             Son.prototype.hasOwnProperty
Son.prototype.isPrototypeOf         Son.prototype.propertyIsEnumerable
Son.prototype.toLocaleString        Son.prototype.toString
Son.prototype.valueOf

Son.prototype.constructor

> Son.prototype.constructor
[Function: Son]
>
> Son.__proto__
[Function: Parent]
>
> Son.__proto__
[Function: Parent]
> Son.prototype
Son {}
> Son.__proto__.prototype
Parent {}
> son = new Son()
Son {}
> son.__proto__
Son {}
> son.prototype
undefined
> son.__proto__.prototype
undefined
> son.__proto__.__proto__
Parent {}
> son.__proto__.__proto__.__proto__
{}
> son.__proto__.__proto__.__proto__.__proto__
null
> son.constructor
[Function: Son]
> son.constructor.prototype
Son {}
> son.constructor.
...
> son.constructor
[Function: Son]
> son.constructor.constructor
[Function: Function]
> son.constructor.__proto__
[Function: Parent]
>
>
> son.constructor
[Function: Son]
> son.constructor.__proto__
[Function: Parent]
> son.constructor.__proto__.constructor
[Function: Function]
> son.constructor.__proto__.constructor.__proto__
[Function]
> son.constructor.__proto__.constructor.__proto__.constructor
[Function: Function]
> son.constructor.__proto__.constructor.__proto__.constructor.__proto__
[Function]
>

