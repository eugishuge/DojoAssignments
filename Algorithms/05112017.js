function parens (str){
var count = 0;
for (var i = 0; i < str.length; i++){
    if(str[i] == "("){
        count++
    }
    if (str[i] == ")"){
    count--
        if(count<0){
            return false
        }
    }

}
if (count ==0) return true
else return false

// ternary operation condition ? if : then
return (count == 0)?  true : false

//null check
}
