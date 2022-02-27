function foo(a) {
  var b = a * 2;
  function bar(c) {
    console.log(a, b, c);
  }
  bar(b * 3);
}
foo(2);

const a = 2;
{
  const a = 3;
  console.log(a);
}

console.log(a);

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 1; i <= 5; i++) {
//   (function () {
//     setTimeout(function timer() {
//       console.log(i);
//     }, i * 1000);
//   })();
// }

for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}

for (var i=1; i<=5; i++) {
  let j = i; // yay, block-scope for closure!
  setTimeout( function timer(){
  console.log( j );
  }, j*1000 );
  }

  for (let i=1; i<=5; i++) {
    setTimeout( function timer(){
    console.log( i );
    }, i*1000 );
    }