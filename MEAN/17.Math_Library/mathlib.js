module.exports = function (){
  return {
    add: function(num1, num2) {
         return num1 + num2
    },
    multiply: function(num1, num2) {
         // add code here
         return num1 * num2
    },
    square: function(num) {
         // add code here
         return num*num
    },
    random: function(min, range) {
         // add code here
         return Math.floor(Math.random() * range) + min;
    }
  }
};
