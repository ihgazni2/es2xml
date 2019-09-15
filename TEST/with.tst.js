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




obj = {
    a:1,
    b:2,
    c:3
}


with(obj) {
    console.log(a,b,c,d,e)
}



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
