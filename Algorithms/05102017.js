function (acronym){
    str = " this is a string"
    newstr = ""
    newstr1 = ""
    for (i = 0; i< str.length;i++){
        if (str[i] = " "){
            if (str[i] != " "){
                newstr += str[i+1]
                break
            }
        }
    }

    for (var x = i; x < str.length; x++){
        if (str[x] = " "){
            if (str[x] != " "){
                newstr1 += str[x+1]
                console.log (newstr)
            }
    }
}
    newstr = newstr + newstr1
    newstr.touppercase
    return acronym
}
