//Introduction to purpose of program//
/* Start with declaring a single person
generate a bib number for that person
display race times
assign person to race time based on bib number*/


//Establish racer name array
racerName = ['Stephanie', 'Suzie', 'Fred', 'Rachel'];
let racerNumber;

//racerName = ['Stephanie', 'Suzie', 'Fred', 'Rachel', 'Sally', 'Peter'];

//Establish race number generator - read through array and output racer name
for (r = 0; r < racerName.length; r++){

    
    if (racerName.length >= 0){
        console.log(racerName[r]);
        racerNumber = (Math.floor(Math.random() * 1000));

        /*Establish conditions associated with race numbers 
        if race number between 0 and 250  - race begins at 930 AM
        if race number between 251 and 500 - race begins at 1000 AM
        if race number between 501 and 750 - race begins at 1030 AM
        */

        if (racerNumber > 0 && racerNumber <= 250){
            console.log("Your race time is 930 AM");
        } else if (racerNumber > 251 && racerNumber <= 500){
            console.log("Your race time is 1000 AM");
        } else if (racerNumber > 501){
            console.log("Your race time is 1030 AM");
        }
            
        console.log(`Race number is ${racerNumber} \r\n`);
    }
    else{
        break;
    }
    
}

 

