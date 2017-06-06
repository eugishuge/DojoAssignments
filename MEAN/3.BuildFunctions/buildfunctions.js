function runningLogger(){
    return ("I am running")
}
//
function multiplybyTen(val){
    var product = val * 10
    return product
}
// console.log(multiplybyTen(5));
// console.log(runningLogger());
//
function stringReturnOne(){
    return ("this is string one")
}
function stringReturnTwo(string){
    return ("this is string two")
}
//
// function caller(func){
//
//     if (typeof (func)  == 'function') {
//         console.log ("its a function")}
//     else {
//         console.log ('aint no function')
//     }
// }
// caller('multiplybyTen');
//
//
function myDoubleConsoleLog(param1, param2){
    if (typeof(param1) == 'function' && typeof(param2) == 'function'){
      console.log(param1(), param2());
    }
  }
  myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(param){
  console.log('starting');
  var x = setTimeout(function(){
    if (typeof(param)=='function'){
      // notice the passed parameters...
      param(stringReturnOne, stringReturnTwo);
    }
}, 2000);
  console.log('ending');
  return "interesting";
}

caller2(myDoubleConsoleLog);
