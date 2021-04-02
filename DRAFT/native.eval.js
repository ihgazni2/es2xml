//下面这个例子 符合正常规律
b = 2000
function tst() {
    let b = 1000;
    eval(`function inner(){console.log(b)}`);
    inner();
}

console.log(global.b)       //2000
tst()                       //1000      函数内部定义域的绑定
console.log(global.inner)   //undefined  正常规律 因为 inner 在函数内定义 外部看不到


//下面这个例子 动态修改了 父作用域的东西

b=2000
function tst() {
    let b = 1000;
    let myeval = eval;                              //先把eval 赋值给 一个变量,然后 用这个变量eval
    myeval(`function inner(){console.log(b)}`);
    inner();
}

console.log(global.b)       //2000          
tst()                       //2000            
console.log(global.inner)   //[Function: inner]   函数内部把eval里面的内容  丢到了全局作用域


//这个方法就是 浏览器里  插入 <script></script>的核心
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<p id="demo">单击按钮创建有文本的按钮</p>
<button onclick="load()">点我初始化</button>
<script>
function dyn() {
	alert("没被动态初始化")
}
function load(){
	var js=document.createElement("script");
	var t=document.createTextNode("function dyn(){alert('已经被动态初始化')}"); 
	js.appendChild(t);
	document.body.appendChild(js);
};
</script>
<button onclick="dyn()">检查</button>
</body>
</html>

18.2.1.1 Runtime Semantics: PerformEval( x, evalRealm, strictCaller, direct)
The abstract operation PerformEval with arguments x, evalRealm, strictCaller, and direct performs the following
steps:
1. Assert: If direct is false then strictCaller is also false.
2. If Type(x) is not String, return x.
3. Let script be the ECMAScript code that is the result of parsing x, interpreted as UTF-16 encoded Unicode
text as described in 6.1.4, for the goal symbol Script. If the parse fails or any early errors are detected,
throw a SyntaxError exception (but see also clause 16).
4. If script Contains ScriptBody is false, return undefined.
5. Let body be the ScriptBody of script.
6. If strictCaller is true, let strictEval be true.
7. Else, let strictEval be IsStrict of script.
8. Let ctx be the running execution context. If direct is true ctx will be the execution context that performed
the direct eval. If direct is false ctx will be the execution context for the invocation of the eval function.




