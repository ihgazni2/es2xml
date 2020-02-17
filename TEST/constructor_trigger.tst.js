class tst4 extends Array {
    constructor(...items) {
        console.log(items)
        console.log("trigger  constructor")
        super(...items)
    }
}


var t = new tst4(1,2,3)

> var t = new tst4(1,2,3)
[ 1, 2, 3 ]
trigger  constructor
undefined
>


> t.push(4)
4
> t
tst4 [ 1, 2, 3, 4 ]
>

> t.pop()
4
> t
tst4 [ 1, 2, 3 ]
>

> t.unshift(1)
4
> t
tst4 [ 1, 1, 2, 3 ]
>


> t.shift()
1
> t
tst4 [ 2, 3, 4 ]
>

> t.concat([11,22,33])
[ 0 ]
trigger  constructor
tst4 [ 1, 2, 3, 11, 22, 33 ]
>
> t
tst4 [ 1, 2, 3 ]
>


> t.splice(1,0,66)
[ 0 ]
trigger  constructor
tst4 []
> t
tst4 [ 55, 66, 2, 3 ]
>

