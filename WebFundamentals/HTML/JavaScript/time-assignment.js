
function time (HOUR, MINUTE, PERIOD){

    if (MINUTE < 30 && PERIOD == "AM") {
        console.log("Its just after " + MINUTE + " in the morning");
    }
    else if (MINUTE > 30 && PERIOD == "AM"){
        console.log("It's just before " + (HOUR + 1) + " in the morning");
    }
    else if (MINUTE < 30 && PERIOD =="PM"){
        console.log("It's just after " + HOUR + " in the evening");
    }
    else {
        console.log("It's just before " + (HOUR +1) + " in the evening");
    }
}
time(8, 50, "AM");
time(7, 30, "PM");
time(7, 31, "AM");
