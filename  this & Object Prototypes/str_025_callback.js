function foo() {
    console.log(this.a);
  }

function doFoo(fn){
    fn();
}

  var obj = {
    a: 42,
    b: 3,
    foo: foo,
    doFoo: doFoo
  };

var a = 'global';

doFoo(obj.foo);
obj.doFoo(obj.foo);