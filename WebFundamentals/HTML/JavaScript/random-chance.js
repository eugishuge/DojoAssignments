var quarters = 100; // user starts with 100 coins
var win = Math.floor(Math.random()*100); // 1 in 100 chance
var pot = Math.trunc(Math.random()*100)+50; // pot payout is 50 - 100 coins

for (var x = quarters; x > 0; x--){

    var chance = Math.floor(Math.random()*100);

    if (chance == win) {
        console.log(pot + x + "winner");
    }
    else{
        console.log("loser");
    }
}
