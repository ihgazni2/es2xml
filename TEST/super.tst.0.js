class Array1 extends Array {
    
}

class Array2 extends Array1 {
    
}

var arr1 = new Array1(1,2,3)
> arr11 = arr1.concat([7,8])
Array1 [ 1, 2, 3, 7, 8 ]
>
> arr11
Array1 [ 1, 2, 3, 7, 8 ]
>


var arr2 = new Array2(4,5,6)
> arr22 = arr2.concat([7,8])
Array2 [ 4, 5, 6, 7, 8 ]
> arr22
Array2 [ 4, 5, 6, 7, 8 ]
>

class Array3 extends Array {
    concat(arr) {
        return(this.concat(arr))
    }
}

arr3 = new Array3(1,2,3)
> arr3.concat([7,8])
Thrown:
RangeError: Maximum call stack size exceeded
    at Array3.concat (repl:2:11)
    at Array3.concat (repl:3:21)
    at Array3.concat (repl:3:21)
    at Array3.concat (repl:3:21)
    at Array3.concat (repl:3:21)
    at Array3.concat (repl:3:21)
    at Array3.concat (repl:3:21)
    at Array3.concat (repl:3:21)
    at Array3.concat (repl:3:21)
    at Array3.concat (repl:3:21)
>

class Array5 extends Array {
    concat(...arr) {
        return(super.concat(...arr))
    }
}

var arr5 = new Array5(1,2,3)

> arr5.concat(7,8)
Array5 [ 1, 2, 3, 7, 8 ]
>
> arr5
Array5 [ 1, 2, 3 ]
>
>

//继承一定要使用super,否则返回的类型不是本类型



class Array6 extends Array5 {
    tst() {
        return(Array.from(this))
    }
}

var arr = new Array6(1,2,3)


> arr.tst()
[ 1, 2, 3 ]
>
> x = arr.tst()
[ 1, 2, 3 ]
>
> x instanceof Array5
false
>


class Array7 extends Array5 {
    tst() {
        return(super.from(this))
    }
}

var arr = new Array7(1,2,3)


> var arr = new Array7(1,2,3)
undefined
>
> arr
Array7 [ 1, 2, 3 ]
>
> x = arr.concat(7,8)
Array7 [ 1, 2, 3, 7, 8 ]
> x instanceof Array5
true
>


