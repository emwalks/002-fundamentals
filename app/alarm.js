const peopleThatHaveUsedAlarm = [
    { name: "James", wakeUpTime: 7 },
    { name: "Susan", wakeUpTime: 13 },
    { name: "Geoff", wakeUpTime: 14 },
    { name: "Lisa", wakeUpTime: 6 }
];

/* Written with conditionals if/else

function wakeup(currentTime) {
    // currentTime will be a Javascript Date object
    // https://www.w3schools.com/jsref/jsref_obj_date.asp
    const currentHour = currentTime.getHours();

    if(currentHour < 12 ) {
        return "Ugggggh its too early - I'm not waking up yet";
    }
    else if (currentHour >12 &&  currentHour<14){
        return "Yessssss its lunch time!!!";
    }
    else {
        return "Get up!! You're wasting the day";
    }
}*/

/* Written with while loop

function wakeup(currentTime) {
    // currentTime will be a Javascript Date object
    // https://www.w3schools.com/jsref/jsref_obj_date.asp
    const currentHour = currentTime.getHours();

    while(currentHour < 12 ) {
        return "Ugggggh its too early - I'm not waking up yet";
    }
    while (currentHour >12 &&  currentHour<14) {
        return "Yessssss its lunch time!!!";
    }
    while (currentHour >14) {
        return "Get up!! You're wasting the day";
    }
}*/

function wakeup(currentTime) {
    // currentTime will be a Javascript Date object
    // https://www.w3schools.com/jsref/jsref_obj_date.asp
    const currentHour = currentTime.getHours();

    switch (currentHour) {
        case 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11: {
            return "Ugggggh its too early - I'm not waking up yet";
        }
        case 12, 13: {
            return "Yessssss its lunch time!!!";
        }
        case 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24: {
            return "Get up!! You're wasting the day";
        }

    }
}


function snooze() {

    let snoozeAttempts = 0;

    for (let i = 0; i < 20; i++) {
        snoozeAttempts++
    }

    return snoozeAttempts;
}

function announceNames() {

    let firstNames = [];

    peopleThatHaveUsedAlarm.forEach(function (person) {
        firstNames.push(person.name);
    });

    //forEach does not create a new array 
    //here we are pushing the value "name" int the new array

    return firstNames;
}

function oneHourLieIn() {

    let peopleWhoAddOneHour = peopleThatHaveUsedAlarm.map(function (person) {
        return {
            name: person.name,
            wakeUpTime: person.wakeUpTime + 1
        };
    });

    return peopleWhoAddOneHour;
}

function earlyRisers() {

    let peopleWhoWakeBefore9 = peopleThatHaveUsedAlarm.filter(function (person) {
        return person.wakeUpTime < 9;
    });

    return peopleWhoWakeBefore9;
}

module.exports = {
    wakeup,
    snooze,
    announceNames,
    oneHourLieIn,
    earlyRisers
};