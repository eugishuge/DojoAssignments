var days = 60;

while (days >= 30) {
    console.log(days + " Until my birthday...SAD FACE")
    days = days - 1;
}

while (days < 30 && days >= 5) {
    console.log(days + " ITS ALMOST MY BDAY!")
    days = days -1 ;
}

while (days < 5 && days >= 1){
    console.log(days + " ITS HERE! ITS HERE!")
    days = days - 1;
}
while (days < 1 || days == 0) {
    console.log("ITS MY MFing BIRTHDAYYYYY")
    break
}
