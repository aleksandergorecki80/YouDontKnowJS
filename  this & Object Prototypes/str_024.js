function foo() {
  console.log(this.a);
}

var obj2 = {
  a: 42,
  b: 3,
  foo: foo,
};
var obj1 = {
  a: 2,
  b: 3,
  obj2: obj2,
  foo: foo,
};
var a = 'a';
obj1.foo();
obj1.obj2.foo();
foo();
console.log(this)
