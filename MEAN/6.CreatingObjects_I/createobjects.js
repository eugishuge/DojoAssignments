function VehicleConstructor(name, wheels, passengers){
    var vehicle = {}

    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;
    vehicle.makenoise = function(){
        var noise = "Beep Beep"
        console.log(vehicle.name+" goes "+noise)
    }
    return vehicle;
}

var bike= new VehicleConstructor("Kawaski", 2, 1)
bike.makenoise = function(){
    var noise = "Ring Ring";
    return (bike.name + " goes " + noise);
}

// console.log(bike.name);
// console.log(bike.wheels);
// console.log(bike.passengers);
// console.log(bike.makenoise());

bike.makenoise = function(){
    var noise = "Ring Ring";
    console.log(bike.name + " goes "+ noise);
}
var sedan = VehicleConstructor("toyota", 4, 5)

sedan.makenoise = function(){
    var s_noise = " Honk Honk";
    return (sedan.name + ' goes '+ s_noise);
}
// console.log(sedan.makenoise())

var count = 0;
var bus = VehicleConstructor("bus", 10, 25)

bus.pick_up = function(){
    if (count<bus.passengers){
        count +=bus.passengers;
    }
    return (count)
}

console.log(bus.pick_up())
