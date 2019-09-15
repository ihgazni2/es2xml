// 常规写法
var greeting = () => {let now = new Date(); return ("Good" + ((now.getHours() > 17) ? " evening." : " day."));}
greeting();          //"Good day."
console.log(now);    // ReferenceError: now is not defined 标准的let作用域

// 参数括号内定义的变量是局部变量（默认参数）
var greeting = (now=new Date()) => "Good" + (now.getHours() > 17 ? " evening." : " day.");
greeting();          //"Good day."
console.log(now);    // ReferenceError: now is not defined

// 对比：函数体内{}不使用var定义的变量是全局变量
var greeting = () => {now = new Date(); return ("Good" + ((now.getHours() > 17) ? " evening." : " day."));}
greeting();           //"Good day."
console.log(now);     // Fri Dec 22 2017 10:01:00 GMT+0800 (中国标准时间)

// 对比：函数体内{} 用var定义的变量是局部变量
var greeting = () => {var now = new Date(); return ("Good" + ((now.getHours() > 17) ? " evening." : " day."));}
greeting(); //"Good day."
console.log(now);    // ReferenceError: now is not defined
