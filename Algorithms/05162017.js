function a_z (str){

    for (var x = 0; x < str.length; x++){
        if (str[x] > str[x+1]){
            return false}
    }
    return true
}
console.log(a_z ("abbc"))
