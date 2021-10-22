function foo(){
    console.log(this.a);
}

var obj = {
    a: 2,
    b: 3,
    foo: foo,
    bar: function(){
        console.log(this.b);
        console.log(this);
    }
}

obj.foo();
obj.bar();