const findTheOldest = function(people) {

    var date = new Date();
    var currYear = date.getFullYear();

    while(people.length>1){

        for(let i = 0; i<people.length-1; i++){

            if(people[i].yearOfDeath === undefined) {
                people[i].yearOfDeath = currYear;
            } else if (people[i+1].yearOfDeath === undefined) {
                people[i+1].yearOfDeath = currYear;
            }

            let currPersonAge = people[i].yearOfDeath - people[i].yearOfBirth;
            let nextPersonAge = people[i+1].yearOfDeath - people[i+1].yearOfBirth;
    
            if(currPersonAge < nextPersonAge) {
                people.splice(i, 1);
            } else {
                people.splice(++i, 1);
            }
        }
    }
    
    const person = {
        name: people[0].name,
    }

    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
