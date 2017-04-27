function newjoant(){

        var newarray = [];

    for (var x = 0; x < arr.length; x++){

        if (typeof arr[x] === "number") {
            newarray.push(arr[x]);
        }
        console.log(newarray)
    }
}
newjoant(arr = ["apple", 4, 89, "Eugene"]);
