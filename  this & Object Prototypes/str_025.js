function foo() {
    console.log(this.a);
  }
  
  var obj = {
    a: 42,
    b: 3,
    foo: foo,
  };
  
var bar = obj.foo;
var a = 'global';

bar();
obj.foo()