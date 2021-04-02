function* enumerate(obj) {
  let visited=new Set;
  for (let key of Reflect.ownKeys(obj)) {
      if (typeof key === "string") {
          let desc = Reflect.getOwnPropertyDescriptor(obj,key);
          if (desc) {
              visited.add(key);
              if (desc.enumerable) yield key;
          }
      }
  }
  /*
  let proto = Reflect.getPrototypeOf(obj)
  if (proto === null) return;
  for (let protoName of Reflect.enumerate(proto)) {
      if (!visited.has(protoName)) yield protoName;
  }
  */
}

g = enumerate(obj)
for(let each of g) { console.log(each)}


var obj = {a:{},b:200}
Reflect.ownKeys(obj)
Reflect.getOwnPropertyDescriptor(obj,'a')
var proto = Reflect.getPrototypeOf(obj)



