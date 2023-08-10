console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    for (let i = 1; i <= count; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}

printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, userAge){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `"Sorry ${userName}, but you need to wait until you're 16.`;

    if (userAge < 16) {
        console.log(belowSixteen);
    }
    else if (userAge >= 16){
        console.log(aboveSixteen);
    }
    else {
        console.log("Invalid input")
    }
}

checkAge("Matthew", 34);
checkAge("Layla", 16);
checkAge("Brent", 13);
checkAge(true, "Michael");

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkCoordinates(x, y){
    if (x > 0 && y > 0){
        console.log("Quadrant 1");
    }
    else if (x < 0 && y > 0){
        console.log("Quadrant 2");
    }
    else if (x < 0 && y < 0){
        console.log("Quadrant 3");
    }
    else if (x > 0 && y < 0){
        console.log("Quadrant 4");
    }
    else if (x == 0 && y != 0){
        console.log("X Axis");
    }
    else if (x != 0 && y == 0){
        console.log("Y Axis");
    }
    else if (x == 0 && y == 0){
        console.log("Origin");
    }
}

checkCoordinates(5, 7);
checkCoordinates(-3, 4);
checkCoordinates(-2, -5);
checkCoordinates(5, -1);
checkCoordinates(0, 3);
checkCoordinates(7, 0);
checkCoordinates(0, 0);

// Exercise 4
console.log("EXERCISE 4:\n==========\n");

function isTriangleValid(a, b, c){
    return a + b > c && a + c > b && b + c > a
}

function checkTriangle(a, b, c){
    let isValid = isTriangleValid(a, b, c);

    if (isValid){
        if (a == b && b == c){
            return `Equilateral`;
        } else if(a == b || b == c || a == c){
            return `Isosceles`;
        } else{
            return `Scalene`;
        }
    }else {
        return `Not a valid triangle`;
    }
}

console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));
console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));

// Exercise 5 
console.log("EXERCISE 5:\n==========\n");

function dataUsageFeedback(planLimit, day, usage){
    let periodLength = 30;
    let currentAverage = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAverage;
    let statusMsg;

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining.`);
    console.log(`Average projected use: ${projectedAvg.toFixed(2)} GB/day`);


    if (currentAverage > projectedAvg){
        statusMsg = "EXCEEDING";
    }else if (currentAverage < projectedAvg){
        statusMsg = "UNDER";
    }else {
        statusMsg = "AT";
    }

    console.log(`You are ${statusMsg} your average daily use (${currentAverage.toFixed(2)} GB/day), continuing this usage, you will end up using ${planLimit - (usage + projectedUsage)} GB from your data limit.`)

    console.log(`To stay below your data plan, use no more than ${(remainingData / remainingDays).toFixed(2)} GB/Day.`)
}

dataUsageFeedback(50, 12, 25);

