class tst0 {
    constructor(...items) {
        console.log(items)
    }
}

> x = new tst0(1)
[ 1 ]
tst0 {}
> x = new tst0([1,2])
[ [ 1, 2 ] ]
tst0 {}
> x = new tst0(1,2)
[ 1, 2 ]
tst0 {}
>


class tst1 {
    constructor(item) {
        console.log(item)
    }
}

> x = new tst1(1)
1
tst1 {}
> x = new tst1([1,2])
[ 1, 2 ]
tst1 {}
> x = new tst1(1,2)
1
tst1 {}
>
