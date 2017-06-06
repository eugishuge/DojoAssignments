var array = [3,5,'Dojo', 'rocks', 'michael', 'sensei']
for (var i = 0; i < array.length; i++)
console.log (array[i]);

array.push('new');
console.log (array[i]);

array.push(['hello', 'javascript is fun', 'world'])
console.log (array[i])

var sum = 0
for (var i =0; i<501; i++){
    sum += i
}
console.log(sum)

array = [1,5,90,25,-3,0]
min = array[0]
for (var i =0; i<array.length; i++){
    if (array[i]<min) {
        min = array[i]
    }
}
console.log(min)

array = [1,5,90,25,-3,0]
sum = 0
count = 0
for (var i =0; i<array.length; i++){
    sum += array[i]
    count ++
}
avg = sum/count
console.log(sum)
console.log(count)
console.log(avg)

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for (var key in newNinja){
    console.log(key)
    console.log(newNinja[key])
}
