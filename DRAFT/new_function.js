//new Function 的 [[Environment]] 是全局
b=2000
function tst() {
    let b = 1000;
    let func = new Function('','console.log(b)')
    func();
}
tst() //2000  但是当使用new Function()创建函数时，其[[Environment]]不是引用当前的词法环境，而是引用全局环境。





