function baz(){
 console.log('baz');
 const bazVar = 'bazVar';
 console.log(bazVar);
 bar();   
}

function bar(){
    console.log("bar")
    foo();
}

function foo(){
    console.log('foo');
}

baz();
