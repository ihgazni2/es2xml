> class Array1 extends Array {}
undefined
> arr = [1,2,3]
[ 1, 2, 3 ]
>
> arr1 = new Array1(1,2,3)
Array1 [ 1, 2, 3 ]
>
>
> elel.decltype(arr,arr1)
[ 1, 2, 3 ]
>
> arr
[ 1, 2, 3 ]
> arr1
Array1 [ 1, 2, 3 ]
>
> elel.decltype(arr1,arr)
Array1 [ 1, 2, 3 ]
>
> arr
[ 1, 2, 3 ]
> arr1
Array1 [ 1, 2, 3 ]
>

