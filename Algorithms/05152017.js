function findchar(str) {
    var arr = [];
    car dict = {"(" : ")" , "{" : "}" , "[" : "]"}
    for (var x = 0; x < str.length; x++) {
        if (str[x] == "(" || str[x] == "[" || str[x] == "{") {
            arr.push(str[x])
        } else {
            if (str[x] == ")") {
                if (arr[arr.length - 1] == "(") {
                    arr.pop()
                } else {
                    return false
                }

            } else if (str[x] == "]") {
                if (arr[arr.length - 1] == "[") {
                    arr.pop()
                } else {
                    return false
                }

            } else if (str[x] == "}") {
                if (arr[arr.length - 1] == "{}") {
                    arr.pop()
                } else {
                    return false
                }
            }
        }
    }
    if (arr.length == 0) {
        return true
    } else {
        return false
    }
}

console.log(findchar("()"))
