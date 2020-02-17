var a  = 11
var b  = 22
var c  = 33
let d = 44
e = 55

> global.e
55
> global.a
11
> global.b
22
> global.c
33
> global.d
undefined
> global.e
55
>


> var a = 200
undefined
> let a = 200
Thrown:
SyntaxError: Identifier 'a' has already been declared
>
>
TEST# node
> let a = 200
undefined
> var a
Thrown:
SyntaxError: Identifier 'a' has already been declared
>
> y = 2000
2000
> global.y
2000
> let y = 3000
undefined
> y
3000
> global.y
2000
>
>


d='global property d'
let d = 'global let d'

a = 'global property a'
let a = 'global let a'

e = 'global property e'

obj = {
    a:1,
    b:2,
    c:3
}

with(obj) {
    console.log(a,b,c,d,e)
}



> d='global property d'
'global property d'
> let d = 'global let d'
undefined
>
> a = 'global property a'
'global property a'
> let a = 'global let a'
undefined
>
> e = 'global property e'
'global property e'
>
> obj = {
...     a:1,
...     b:2,
...     c:3
... }
{ a: 1, b: 2, c: 3 }
>
> with(obj) {
...     console.log(a,b,c,d,e)
... }
1 2 3 'global let d' 'global property e'
undefined
>




window.ax
undefined
var ax
undefined
window.ax
undefined
window.hasOwnProperty("ax")
true
let ay
undefined
window.hasOwnProperty("ay")
false
