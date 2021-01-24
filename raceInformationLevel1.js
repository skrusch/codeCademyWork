//Introduction to purpose of program//
/* Start with declaring a single person
generate a bib number for that person
display race times
assign person to race time based on bib number*/


//Establish racer name function
function getEntrantName (entrant){
    return entrant;
}

console.log(getEntrantName("Suzie"));

//Establish race number generator
raceNumber = (Math.floor(Math.random() * 1000));

console.log(`Race number is ${raceNumber}`);

/*Establish conditions associated with race numbers 
if race number between 0 and 250  - race begins at 930 AM
if race number between 251 and 500 - race begins at 1000 AM
if race number between 501 and 750 - race begins at 1030 AM
*/

function getStartTime (raceNumber){
    if(raceNumber > 0 && raceNumber < 250){
        console.log("Your race will begin at 930 AM");
    }else if (raceNumber > 251 && raceNumber < 500){
        console.log("Your race will begin at 1000 AM");
    }else{
        console.log("Your race begins at 1030 AM");
    }
}

//print entrants' race time
getStartTime(raceNumber);