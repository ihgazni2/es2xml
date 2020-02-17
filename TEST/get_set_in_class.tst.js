
class MyClass {
    static get sex() {}
    static set sex(value) {}
}

> class MyClass {
...     static get sex() {}
...     static set sex(value) {}
... }
undefined
>
> MyClass.sex
MyClass.sex

> MyClass.sex
undefined
>
> MyClass.sex=3
3
> MyClass.sex
undefined
>
> m = new MyClass()
MyClass {}
> m.sex
undefined
> m.sex = 5
5
> m.sex
5
> MyClass.sex
undefined
>


class MyClass3{
    static get _sex() {console.log("trigger static get")}
    static set _sex(value) {console.log("trigger static set")}
    get _sex() {console.log("trigger  get")}
    set _sex(value) {console.log("trigger set")}
}

> MyClass3._sex
trigger static get
undefined
> MyClass3._sex = 40
trigger static set
40
> MyClass3._sex
trigger static get
undefined
> m = new MyClass3()
MyClass3 {}
> m._sex
trigger  get
undefined
> MyClass3._sex
trigger static get
undefined
> m._sex = 50
trigger set
50
> m._sex
trigger  get
undefined
>



class MyClass4 {
    static get sex() {console.log("trigger static get")}
    static set sex(value) {console.log("trigger static set")}
}

> class MyClass4 {
...     static get sex() {console.log("trigger static get")}
...     static set sex(value) {console.log("trigger static set")}
... }
undefined
> MyClass4.sex
trigger static get
undefined
>
> MyClass4.sex = 444
trigger static set
444
>
> m = new MyClass4()
MyClass4 {}
>
> m.sex
undefined
> m.sex = 50
50
> m
MyClass4 { sex: 50 }
>

