// Real Quarter Flip
// A coin flip that has a chance of landing on its side
$(document).ready(function(){
cLog = console.log

function coinFlip(){
    var chance = Math.floor(Math.random() * 6001) + 1;
    if(chance <= 3000){
        cLog("Heads!");
    }
    else if(chance > 3000 && 6000 >= chance){
        cLog("Tails!");
    }
    else{
        cLog("Side?");
    }
    cLog(chance);

}
coinFlip();

});