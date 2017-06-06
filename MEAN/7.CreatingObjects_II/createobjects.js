function VehicleConstructor(name, wheels, passengers, speed){

    var distance_traveled = 0;
    var self = this;
    function updatedDistanceTravelled(){
        distance_traveled += self.speed;
        console.log(distance_traveled)
    }
    self.name = name;
    self.wheels = wheels;
    self.passengers = passengers;
    self.speed = speed;
    self.move = function(){
        this.makenoise();
        updatedDistanceTravelled();
    }
    self.checkMiles = function(){
        console.log(distance_traveled);
    }
    self.makenoise = function(){
        var noise = "Beep Beep"
        console.log(self.name+" goes "+noise)
    }

}

// var bike= new VehicleConstructor("Kawaski", 2, 1)
// bike.makenoise = function(){
//     var noise = "Ring Ring";
//     return (bike.name + " goes " + noise);
// }
//
// console.log(bike.name);
// console.log(bike.wheels);
// console.log(bike.passengers);
// console.log(bike.makenoise());
//
// bike.makenoise = function(){
//     var noise = "Ring Ring";
//     console.log(bike.name + " goes "+ noise);
// }
// var sedan = VehicleConstructor("toyota", 4, 5)
//
// sedan.makenoise = function(){
//     var s_noise = " Honk Honk";
//     return (sedan.name + ' goes '+ s_noise);
// }
// // console.log(sedan.makenoise())
//
// var count = 0;
// var bus = VehicleConstructor("bus", 10, 25)
//
// bus.pick_up = function(){
//     if (count<bus.passengers){
//         count +=bus.passengers;
//     }
//     return (count)
// }
//
// console.log(bus.pick_up())
var car = new VehicleConstructor('car', 4, 2, 40);
car.move();
car.checkMiles();
console.log(car.speed);
