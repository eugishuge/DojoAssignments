function fib() {
  // Some variables here
  var prev = 0;
  var curr = 1;
  function nacci() {
    // do something to those variables here
    console.log(curr)
    var temp = prev;
    prev = curr;
    curr = prev + temp;
  }
  return nacci
}
var fibCounter = fib();

fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"