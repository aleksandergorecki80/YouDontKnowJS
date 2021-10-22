function foo(){
    console.log(this.a);
}

function logThis(){
    console.log(this);
}

var obj = { a:2 };
const obj2 = { a:4 };
 
foo.call(obj);
foo(obj);
foo();

logThis();
logThis(obj);
logThis.call(obj);
logThis.call(obj2);
logThis(obj2)
logThis.call(1)
logThis.call([1,2,3, 'kki'])