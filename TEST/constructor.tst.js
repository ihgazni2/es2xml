> function Parent() {};
undefined
> function CreatedConstructor() {}
undefined
>
> CreatedConstructor.prototype = Object.create(Parent.prototype);
Parent {}
>
> CreatedConstructor.prototype.constructor
[Function: Parent]
> Parent.prototype
Parent {}
>
>
> CreatedConstructor.prototype.create = function create() {
...   return new this.constructor();
... }
[Function: create]
>
> ni = new CreatedConstructor()
Parent {}
>
> ni1 = ni.create()
Parent {}
>
> ni2 = ni1.create()
TypeError: ni1.create is not a function
>
> ni1.
ni1.__defineGetter__      ni1.__defineSetter__      ni1.__lookupGetter__
ni1.__lookupSetter__      ni1.__proto__             ni1.constructor
ni1.hasOwnProperty        ni1.isPrototypeOf         ni1.propertyIsEnumerable
ni1.toLocaleString        ni1.toString              ni1.valueOf

> ni1
Parent {}
>

