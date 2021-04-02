1 function extend(subClass, supClass) {
 2         function Agent() {}
 3         Agent.prototype = supClass.prototype;
 4         var o = subClass.prototype;
 5         subClass.prototype = new Agent();
 6         if (Object.assign) {
 7           Object.assign(subClass.prototype, o);
 8         } else {
 9           if (Object.getOwnPropertyNames) {
10             var names = Object.getOwnPropertyNames(o);
11             for (var i = 0; i < names.length; i++) {
12               var desc = Object.getOwnPropertyDescriptor(names[i]);
13               Object.defineProperty(subClass.prototype, names[i], desc);
14             }
15           } else {
16             for (var prop in o) {
17               subClass.prototype[prop] = o[prop];
18             }
19           }
20         }
21         subClass.prototype.constructor = subClass; //防止子类的构造函数被覆盖
22         if (supClass.prototype.constructor === Object) {
23           supClass.prototype.constructor = supClass; //防止父类类的构造函数被覆盖
24         }
25         // 存储父类，方便继承构造函数调用
26         subClass.prototype.superClass = supClass;
27       }
28 //调用
29       function Father(_r) {
30         this.r = _r;
31         console.log("Father");
32       }
33       Father.prototype.play = function () {
34         console.log("play game");
35       };
36       function Ball(_r) {
37         this.superClass.call(this, _r);
38       }
39 40       var s = new Son(10);//Father
41       s.play();//play game
