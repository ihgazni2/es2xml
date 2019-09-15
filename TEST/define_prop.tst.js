Array.prototype.tst = function () {
    for(let i=0;i<this.length;i++) {
        let k = "$" + i.toString()
        this.__defineGetter__(k, function() { return this[i]; });
        this.__defineSetter__(k, function(v) { this[i]= v; });
        Object.defineProperty(this,k,{ 
            enumerable:false,
        })
    }
}



var arr = [66,77,88]
arr
arr.tst()

arr.$0 = 666
arr.$0
arr

arr[0] = 6666
arr
arr.$0

> arr
[ 66, 77, 88 ]
>
> arr.$0 = 666
666
> arr.$0
666
> arr
[ 666, 77, 88 ]
>
> arr[0] = 6666
6666
> arr
[ 6666, 77, 88 ]
> arr.$0
6666
>
