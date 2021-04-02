> function Person(name){
...     return [name]
... }
undefined
> new Person('Bob')
[ 'Bob' ]
>
> ni = new Person('Bob')
[ 'Bob' ]
> ni
[ 'Bob' ]
>
> ni.
ni.__defineGetter__      ni.__defineSetter__      ni.__lookupGetter__
ni.__lookupSetter__      ni.__proto__             ni.constructor
ni.hasOwnProperty        ni.isPrototypeOf         ni.propertyIsEnumerable
ni.toLocaleString        ni.toString              ni.valueOf

ni.concat                ni.copyWithin            ni.entries
ni.every                 ni.fill                  ni.filter
ni.find                  ni.findIndex             ni.forEach
ni.includes              ni.indexOf               ni.join
ni.keys                  ni.lastIndexOf           ni.length
ni.map                   ni.pop                   ni.push
ni.reduce                ni.reduceRight           ni.reverse
ni.shift                 ni.slice                 ni.some
ni.sort                  ni.splice                ni.unshift

> ni.



> function Person(name){
...     this.name = name
...     return 5//return primitive 
... }
undefined
> ni = new Person('Bob')
Person { name: 'Bob' }
>
> ni.name
'Bob'
>

> function Person(name){
...     console.log(this)
...     this.name = name
...     return [name] //return object
... }
undefined
> ni = new Person('Bob')
Person {}
[ 'Bob' ]
> ni.name
undefined
>




function Foo() {
    if (!new.target) {
        console.log("-->",new.target);
    } else {
        console.log("-->",new.target);
    }
}

> Foo()
--> undefined
undefined
> new Foo()
--> [Function: Foo]
Foo {}
>
    
