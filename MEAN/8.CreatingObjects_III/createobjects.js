function VehicleConstructor(name, wheels, passengers, speed){
    if (!(this instanceof VehicleConstructor)){
        return new VehicleConstructor(name,wheels,passengerNumber, speed);
    var vehicle ={}
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
    VehicleConstructor.prototype.move = function(){
        this.makenoise();
        updatedDistanceTravelled();
        return this;
    }
    VehicleConstructor.prototype.checkMiles = function(){
        console.log(distance_traveled);
    }
    VehicleConstructor.prototype.makenoise = function(){
        var noise = "Beep Beep"
        console.log(self.name+" goes "+noise)
    }

}
// // CREATING OBJECTS I
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
//
// // CREATING OBJECTS II
// var car = new VehicleConstructor('car', 4, 2, 40);
// car.move();
// car.checkMiles();
// console.log(car.speed);
//
// CREATING OBJECTS III
var acura = new VehicleConstructor("acura", 4, 5, "100mph")
var bmw = new VehicleConstructor("bmw", 4, 5, "200mph")
VehicleConstructor.prototype.VIN = function(){
    var VIN = Math.floor(Math.random() * (500 - 100)) + 100
    return (VIN)
}
console.log("Acura VIN", acura.VIN())
console.log("BMW", bmw.VIN())

// // PLATFORM SOLUTION
// function VehicleConstructor(name, wheels, passengerNumber,speed){
//   if (!(this instanceof VehicleConstructor)){
//     return new VehicleConstructor(name,wheels,passengerNumber, speed);
//   }
//   // String used to generate vin number
//   var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
//
//   this.distanceTraveled = 0;
//   this.speed = speed;
//   this.name = name || "unicycle";
//   this.wheels = wheels || 1;
//   this.passengerNumber = passengerNumber || 0;
//   // Invoke createVin to generate random vin number
//   this.vin = createVin();
//
//   function createVin(){
//     var vin = '';
//     for (var i = 0; i < 17; i+=1 ){
//       // Use Math.floor and Math.random to generate random index to access character from char string
//       vin += chars[Math.floor(Math.random()*35)];
//     }
//     return vin;
//   }
//
// }
//
// VehicleConstructor.prototype.makeNoise = function(noise){
//   var noise = noise || "Honk Honk";
//   console.log(noise);
//   return this;
// };
//
// VehicleConstructor.prototype.move = function(){
//   this.makeNoise();
//   this.updateDistanceTraveled();
//   return this;
// };
//
// VehicleConstructor.prototype.checkMiles = function(){
//   console.log(this.distanceTraveled);
//   return this;
// };
//
// VehicleConstructor.prototype.updateDistanceTraveled = function(){
//   this.distanceTraveled += this.speed;
//   console.log(this.distanceTraveled);
//   return this;
// }
//
// var car = new VehicleConstructor('car', 4, 4, 80)
