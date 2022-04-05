// VARIABLES EX. 1
// console.log("starting JS", "\nand it is working")

// EX. 2
// let myAge = 35;
// console.log(myAge);

// EX. 3
// let juliaAge = 32;
// let ageDif = myAge - juliaAge;
// console.log(ageDif);

// CONDITIONALS EX. 4
// if (myAge > 21) {
//     console.log("You are older than 21.");
// } else {
//     console.log("You are not older than 21.");
// }; 

// // EX. 5
// if (juliaAge > myAge) {
//     console.log("Julia is older than you.");
// } else if (juliaAge < myAge) {
//     console.log("Julia is younger than you.");
// } else {
//     console.log("You and Julia are the same age.");
// };

// ARRAYS EX. 1
let quokkas = ["Marta", "Jess", "Angelina", "Karolina", "Arno", "Alex", "John", "Ottavia", "Raul"];
// quokkas.sort();
// console.log(quokkas);
// console.log(quokkas[quokkas.length-1]);

// for (let quokkaIndex = 0; quokkaIndex < quokkas.length; quokkaIndex++) {
//     console.log(quokkas[quokkaIndex]);
// };

// ARRAYS EX. 2
let quokkaAge = [27, 28, 29, 29, 30, 30, 31, 32, 33, 34, 35, 35]; 

// let num = 0;
// while (num<quokkaAge.length) {
//     if (quokkaAge[num]%2 == 0) {
//         console.log(quokkaAge[num])
//         };
//         num++;
// };

// for (n=0; n<quokkaAge.length; n++) {
//     console.log(quokkaAge[n]);
// }; 

// ARRAYS EX. 3
function printLowestNumber (someArray) {
    let lowestNumber = someArray[0];
    
    for (let n = 1; n<someArray.length; n++) {
        if (someArray[n]<lowestNumber) {
            lowestNumber = someArray[n]
        };
    };
    return lowestNumber
};

// console.log("The youngest quokka is ", printLowestNumber(quokkaAge), " years old.")

// ARRAYS EX. 4
function printHighestNumber (someArray) {
    let highestNumber = someArray[0];

    for (let n = 1; n<someArray.length; n++) {
        if (someArray[n] > highestNumber) {
            highestNumber = someArray[n];
        };
    };
    return highestNumber; 
} ;

// console.log("The highest age in the quokkaAge array is ", printHighestNumber(quokkaAge), ". ");

// ARRAYS EX. 5
function printItemAtIndex (array, index) {
    // console.log(array[index]);
    console.log("The value at index", index, "in array", array, "is", array[index]);
};

// printItemAtIndex(quokkaAge, 6); 

// ARRAYS EX. 6
function repeatValues (array) {
    let values = [];

    for (num = 0; num < array.length; num++) {
        if (array.includes(array[num], num+1) == true) {
            values.push(array[num]);
        };
    };
    return values; 
};

// console.log(repeatValues(quokkaAge)); 

// ARRAYS EX. 7
let myColor = ["Red", "Green", "White", "Black"];

function concatenateArray(array) {
    let stringValue = ""

    for (n = 0; n<array.length; n++) {
        stringValue = stringValue + array[n];
    };
    return stringValue;
};

// console.log(concatenateArray(myColor));

function turnToString (array) {
    return String(array);
}; 

// console.log(turnToString(myColor));

// STRINGS EX. 1
//-> SOL1
function reverseNumberS1 (number) {
    let reversedNumber = String(number).split("").reverse().join("");
    return reversedNumber;
};

// console.log(reverseNumberS1(123456)); 

//-> SOL2
// function reverseNumberS2 (number) {
//     let reversedNumber = Number();
//     // let remainder = number
//     // let loopCounter = 1

//     // while (remainder > 10) {
//     //     let digit = remainder%(10*loopCounter);
//     //     remainder /= 10
//     //     reversedNumber = digit*Math.floor(remainder); 
//     //     loopCounter++;
//     //     console.log(digit, loopCounter, remainder);
//     // };
//     // return reversedNumber;

//     for (i = 1; i < 5; i++) {
//         let digit = number%(10**i);
//         reversedNumber = reversedNumber * 10 + digit;
//         number -= digit * 10**i;
//     }

// };

// console.log(reverseNumberS2(123456));

//-> SOL3
// function reverseNumberS3 (someNumber) {
//     let numberString = new String(someNumber);
//     console.log(numberString);
//     let reversedNumber = "";

//     for (n = numberString.length-1; n==0; n--) {
//         console.log(n, numberString[n]);

//         reversedNumber += numberString[n];
//         console.log(numberString[n]);
//     };

//     return reversedNumber;
// };

// reverseNumberS3(9876); 

// console.log(reverseNumberS3(123456)); 

// STRINGS EX. 2
function order (someString) {
    let array = someString.split("").sort()
    let alString = "";

    for (n = 0; n<array.length; n++) {
        alString = alString + array[n];
    };

    return alString;
};

// console.log(order("bla"));

// STRINGS EX. 3
function firstUpper (someString) {
    let array = someString.split(" ");
    let capitalisedString = "";

    for (n = 0; n < array.length; n++) {
        array[n] = array[n][0].toUpperCase() + array[n].slice(1);
        capitalisedString = capitalisedString + array[n] + " "
    };
    return capitalisedString;
};

// console.log(firstUpper("This is a function that capitalises the first letter of every word."));

// STRINGS EX. 4
function findLongestWord (someString) {
    let array = someString.split(" ");
    let longestWord = "";

    for (n = 0; n < array.length; n++) {
        if (longestWord.length < array[n].length) {
            longestWord = array[n];
        };
    };
    return longestWord;
};

console.log(findLongestWord("This is a string that has some long words in it: capitalising, slicing, concatenating."));