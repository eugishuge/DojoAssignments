// function PersonConstructor(name){
//     person ={
//         name: name,
//         distance_traveled: 0,
//         say_name: function(){
//             console.log(person.name);
//             return(person);
//         },
//         say_something: function(phrase){
//             console.log(person.name+" says "+ phrase)
//             return(person.name+" says "+ phrase)
//         },
//         walk: function(name){
//             person.distance_traveled +=3
//             console.log(name+" is walking. Distance traveled increased by "+person.distance_traveled)
//             return (name+" "+" is walking. Distance traveled increased by 3 ")
//         },
//         run: function(name){
//             person.distance_traveled+=10
//             console.log(name+" is running. Distance traveled increased by "+person.distance_traveled)
//             return (name+" "+" is running. Distance traveled increased by "+person.distance_traveled)
//         },
//         crawl: function(name){
//             person.distance_traveled +=1
//             console.log (name+" is crawling. Distance traveled increased by "+person.distance_traveled)
//             return (name+" "+" is crawling. Distance traveled increased by "+person.distance_traveled)
//         }
//     }
//     return person
// }
//
// var object = new PersonConstructor('eugo')
// object.say_name()
// object.say_something('im cool')
// object.crawl('eugo');

//ANSWER KEY

function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ["yellow", "red", "black"]
  ninja.name = name;
  ninja.cohort = cohort;
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if (ninja.beltLevel < 2){
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    return ninja
  }
  ninja.belt = belts[ninja.beltLevel];
  return ninja;
}

var ninja = new ninjaConstructor('eugene', 'kappa')

console.log(ninja.belt)




// function ninjaConstructor(name, cohort, beltlevel){
//     var ninja = {
//         name: name,
//         cohort: cohort,
//         beltlevel: beltlevel
//         ninja.levelup: function(){
//             if (beltlevel <2)
//
//         }
//     }
// }
