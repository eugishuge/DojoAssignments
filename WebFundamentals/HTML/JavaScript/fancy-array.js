function fancyarray(select, names, reversed){

    for (var x = 0; x < names.length; x++){

    if (reversed = true){

        console.log(x + select + names[names.length-1-x])
    }

        else console.log(x + select + names[x]);
    }


     }

var names = ["James", "Jill", "Jane", "Jack"]

fancyarray(" ** ", names, true)
