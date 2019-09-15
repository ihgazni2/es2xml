var obj = { x: 1, y: 2 };
Reflect.get(obj, "x"); // 1

// Array
Reflect.get(["zero", "one"], 1); // "one"

// Proxy with a get handler
var x = {};
var obj = new Proxy(x, {
  get(t, k, r) { 
      return k + "bar"; 
  }
});
Reflect.get(obj, "foo"); // "foobar"



// Proxy with a get handler
var x = {};
var stag = new Proxy(x, {
  get(t, k, r) { 
      return("<"+ k +">"); 
  }
});
var etag = new Proxy(x, {
  get(t, k, r) { 
      return("</"+ k +">"); 
  }
});
