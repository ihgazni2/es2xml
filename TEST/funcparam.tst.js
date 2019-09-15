> s2 = `function tst(f){f(3)}`
'function tst(f){f(3)}'
>
> function tst(f){
... f(3)
... }
undefined
> function f(x) {
...  console.log("i am "+ x)
... }
undefined
>
> tst(f)
i am 3
undefined
>

function tst(
    f = function f() {
        console.log("i am "+ x)
    }
) {
}


////wrong!!!


function tst(
    function f() {
        console.log("i am "+ x)
    }
) {
}
