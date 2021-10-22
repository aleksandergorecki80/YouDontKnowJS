function fizz(){
    console.log(this)
}

function bar(){
    console.log(this)
fizz()
}

function foo(){
    const b = '3'
    console.log(this.a)
    bar()
}
var a = 2;
foo();
