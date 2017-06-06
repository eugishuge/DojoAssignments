//FUNCTIONS THAT TAKE VARIABLE INPUTS

function sum(num1, num2){
    sum = 0
    for (var i = num1; i<=num2; i++){
        sum += i
    }
    return sum
}
console.log(sum(1,5));

function min(arr){
    min = arr[0]
    for(var i =0; i<arr.length; i++){
        if (arr[i]<min) {
            min = arr[i]
        }
    }
    return min
}
console.log(min([1,4,5,-8, -10]))

function average(arr){
    sum = 0
    count = 0
    for (var i = 0; i<arr.length; i++){
        sum += arr[i]
        count++
    }
    avg = sum/count
    console.log(sum)
    console.log(count)
    return avg
}
console.log(average([1,2,3]))

//ANONYMOUS FUNCTIONS ASSIGNED TO VARIABLES

var sum = function(num1, num2){
    sum = 0
    for (var i = num1; i<=num2; i++){
        sum += i
    }
    return sum
}

var min = function(arr){
    min = arr[0]
    for(var i =0; i<arr.length; i++){
        if (arr[i]<min) {
            min = arr[i]
        }
    }
    return min
}
 var average = function(arr){
    sum = 0
    count = 0
    for (var i = 0; i<arr.length; i++){
        sum += arr[i]
        count++
    }
    avg = sum/count
    console.log(sum)
    console.log(count)
    return avg
 }

// FUNCTIONS WRITTED AS METHODS OF AN OBJECT

var object = {
    sum: function(num1, num2){
        sum = 0
        for (var i = num1; i<=num2; i++){
            sum += i
        }
        return sum
    },
    min: function(arr){
        min = arr[0]
        for(var i =0; i<arr.length; i++){
            if (arr[i]<min) {
                min = arr[i]
            }
        }
        return min
    },
    average: function(arr){
        sum = 0
        count = 0
        for (var i = 0; i<arr.length; i++){
            sum += arr[i]
            count++
        }
        avg = sum/count
        console.log(sum)
        console.log(count)
        return avg
    }
}
// CREATE A JAVASCRIPT OBJECT WITH THE FOLLOW METHODS AND PROPERTIES

var person ={}
person = {
    name: "eugene",
    distance_traveled: 0,
    say_name : function(){
        return (person.name)
    },
    say_something: function(myname){
        return(myname + " " + "says i'm cool")
    },
    walk: function(myname){
        person.distance_traveled +=3;
        return(myname + " " + "is walking, travel increased by 3")
    },
    run: function(myname){
        person.distance_traveled+=10
        return (myname+" "+"is running, travel increased by 10")
    },
    crawl: function(myname){
        person.distance_traveled +=1
        return (myname+" "+"is crawling, distance increased by 1")
    }
}

// console.log(person.say_name())
// console.log(person.say_something('eugo'))
console.log(person.run('eugo'))
console.log(person.distance_traveled)
