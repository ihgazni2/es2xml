> s =`class ClassWithStaticMethod {
...   static staticMethod() {
.....     return 'static method has been called.';
.....   }
... }`
'class ClassWithStaticMethod {\n  static staticMethod() {\n    return \'static method has been called.\';\n  }\n}'
>
> d = ac.parse(s)
Node {
  type: 'Program',
  start: 0,
  end: 106,
  body:
   [ Node {
       type: 'ClassDeclaration',
       start: 0,
       end: 106,
       id: [Object],
       superClass: null,
       body: [Object] } ],
  sourceType: 'script' }
> d.body[0]
Node {
  type: 'ClassDeclaration',
  start: 0,
  end: 106,
  id:
   Node {
     type: 'Identifier',
     start: 6,
     end: 27,
     name: 'ClassWithStaticMethod' },
  superClass: null,
  body: Node { type: 'ClassBody', start: 28, end: 106, body: [ [Object] ] } }
>



