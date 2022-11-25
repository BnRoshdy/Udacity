var room = "gallery";
var weapon ="trophy";
var suspect ="Ms. Van Cleve";
var solved = false;


if ( room === "ballroom" && weapon ==="poison" && suspect ==="Mr. Kalehoff"){
    console.log(suspect +" did it in the "+ room +" with the"+ weapon + "!");
    solved = true;
}else if ( room === "gallery" && weapon ==="trophy" && suspect ==="Ms. Van Cleve"){
    console.log(suspect +" did it in the "+ room +" with the"+ weapon + "!");
    solved = true;
}else if ( room === "billiards room" && weapon ==="pool stick" && suspect ==="Mrs. Sparr"){
    console.log(suspect +" did it in the "+ room +" with the "+ weapon + "!");
    solved = true;
}else if ( room === "dining room" && weapon ==="knife" && suspect ==="Mr. Parkes"){
    console.log(suspect +" did it in the "+ room +" with the "+ weapon + "!");
    solved = true;
}

if (solved) {
    console.log("the murderer get arristed")
}else{
    console.log("\nlook again for the murder")
}