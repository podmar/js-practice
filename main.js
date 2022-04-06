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
    let array = someString.split("").sort();
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

// console.log(findLongestWord("This is a string that has some long words in it: capitalising, slicing, concatenating."));

// EXTRA FUNCTION EX. 1
function noReturnFunction () {
    console.log("The multiplication of 2 and 4 equals ", 2*4);
    return;
};

// noReturnFunction();

// EXTRA FUNCTION EX. 2
function anotherNoParamFuntion () {
    let result = 2*4;
    console.log("The multiplication of 2 and 4 is ", result, ", and this is what this funtion will return.")
    return result;
};

// let resultOfAnotherNoParamFunction =  anotherNoParamFuntion()
// console.log("return value of the above funtion is: ", resultOfAnotherNoParamFunction);

// EXTRA FUNCTION EX. 3
function twoParamFuntion (a, b) {
    let multiplication = a*b;
    console.log("This function is multiplying the two numbers:\n" + a +", " + b + "\nprinting the result:\n", multiplication, "\nand returning the result." );
    return multiplication;
};

//Testing with 3 examples
let testArray = [[0,5], [143,5], [9,654]];

// for (n=0; n<testArray.length; n++) {
//     twoParamFuntion(testArray[n][0], testArray[n][1]);
// };

// EXTRA FUNCTION EX. 4
//Write a function that determines the type of a triangle given the length of its three sides.
//equilateral, isosceles, scalene

function triangleTypeBySideLenght (a, b, c) {
    let triangleSides = [a, b, c].sort(); 
    let triangleType = "";

    if (triangleSides[0]+triangleSides[1] <= triangleSides[2]) {
        console.log("The given dimentions do not form a triangle.");
        return triangleType = "not a triangle";
    } else if (triangleSides[0]+triangleSides[1] > triangleSides[2]) {
        triangleType = triangleTypeFinder(triangleSides);
    } else {
        console.log("Wrong input.");
        return triangleType; 
    };

    function triangleTypeFinder (triangleArray) {
        let tType = "";

        if (triangleArray[0] == triangleArray[1] && triangleArray[1] == triangleArray[2]) {
            tType = "Equilateral";
            return tType;
        } else if (triangleArray[0] == triangleArray[1] || triangleArray[0] == triangleArray[2] || triangleArray[1] == triangleArray[2]) {
            tType = "Isoceles"; 
        } else {
            tType = "Scalene"
        };
        return tType;
    };

    console.log(`The sides ${[a, b, c]} form ${triangleType=="Scalene" ? "a" : "an"} ${triangleType} triangle.`);
    return triangleType;
};

//testing
let testTriangles = [[2,3,4], [5,5,4], [4,5,5], [5,4,5], [3,3,3], [2,2,4]];

for (n=0; n<testTriangles.length; n++) {
    triangleTypeBySideLenght(...testTriangles[n]);
};

// EXTRA FUNCTION EX. 5
// generating test arrays
let testCharArray = ["Banana", "Kiwi", "Aubergine", "Pineapple"];

//solution to the task
function aTo1Replacement (someArray) {

    for (n=0; n<someArray.length; n++) {
        if (someArray[n].toUpperCase() == "A") {
            someArray[n] = "1";
        };
    };
    return someArray;
};

function aTo1ReplacementSol1 (someArray) {
    let solutionArray = [];

    for (n=0; n<someArray.length; n++) {
        if (someArray[n].toUpperCase() == "A") {
            solutionArray.push("1");
        } else {
            solutionArray.push(someArray[n]);
        };
    };
    return solutionArray;
};

// console.log(aTo1Replacement(["a"])); 

//testing - the test array in 1st solution is not iterating, only sisplaying the fisrt array. 
// for (n=0; n<testCharArray.length; n++) {
//     console.log(n, aTo1Replacement(testCharArray[n].split("")));
// };

//Testing Sol1 -> why is this loop not iterating? 
// for (n=0; n<testCharArray.length; n++) {
//     console.log(n, aTo1ReplacementSol1(testCharArray[n].split("")));
// };

//another solution with a funtion that takes strings, not arrays
// function aTo1ReplacementSol2 (someString) {
//     return someString.replace("a", "1");
// };

//testing the 2nd solution -> works well, does not replace capital "A"
// for (n=0; n<testCharArray.length; n++) {
//     console.log(aTo1ReplacementSol2(testCharArray[n]));
// };

// EXTRA FUNCTION EX. 6
//Write two functions. The first one should return the sum of all the elements of an array and the second one should return the smallest number in the array. Print the result in the main program.

let testNumArray = [1,4,6,8,-2,7];

function arrayElementSum (someArray) {
    let solution = someArray.reduce((valueA, valueB) => valueA+valueB, 0);
    return solution;
};

//testing
// console.log(arrayElementSum(testNumArray));

function smallestElement (someArray) {
    let smallest = someArray[0];

    for (n=1; n<someArray.length; n++) {
        if (someArray[n] < smallest) {
            smallest = someArray[n];
        };
    };
    return smallest;
};

//testing
// console.log(smallestElement(testNumArray));

// EXTRA FUNCTION EX. 7
//Write a function that adds the even numbers of an array. For example, the array: 1 2 8 3 2 would result in the sum of 2 + 8 + 2, since they are even numbers. Return the result and print it in the main program.

function evenElementsArraySum (someArray) {
    let evenSum = someArray.reduce((valueA, valueB) => valueB%2==0 ? valueA+valueB: valueA, 0);
    console.log(evenSum);
    return evenSum;
};

//testing
// evenElementsArraySum(testNumArray);

// EXTRA FUNCTION EX. 8
//Write a function that adds the even positions of an array. For example, the array: 1 2 8 3 2 3 4 would result in the sum of 8 + 2 + 4 since they are in even positions in the array (position 2,4,6). Return the result and print it in the main program.

function evenIndexArraySum (someArray) {
    let sum = 0;

    for (n=0; n<someArray.length; n+=2) {
        sum += someArray[n];
    };
    return sum; 
};

//testing
// let solution = evenIndexArraySum(testNumArray);
// console.log(solution);

// EXTRA FUNCTION EX. 9
//Write a function that by sending a number as parameter, tells you all the even numbers before it. For example, if you send to the function the number 9, it should print 2,4,6,8.

function listOfEvenNum (someNumber) {
    let evenArray = [];
    let startingValue = someNumber; 


    if (someNumber%2==0) {
        startingValue -= 2;
    } else if (someNumber%2==1) {
        startingValue -= 1;
    } else {
        console.log("Please enter an integer.");
        return;
    }
    
    for (n=startingValue; n>0; n-=2) {
            evenArray.push(n);
        }; 
    return evenArray;
};

//testing
// let solution = listOfEvenNum(6.4);
// console.log(solution);

// EXTRA FUNCTION EX. 10
//Write a function that by sending two numbers as parameters, it tells you the odd numbers between these. For instance, if you send the numbers 1 and 13 as parameters, it should print 1,3,5,7,9,11,13.

function oddBetween (a, b) {
    let oddNum = [];
    let startingValue = Math.abs(a)<Math.abs(b) ? a : b;

    if (a==b) {
        console.log("Please enter two different numbers.")
        return oddNum;
    } else if (startingValue%2==0) {
        startingValue += 1;
    } else if (startingValue%2==1) {
        startingValue += 2;
    } else {
        console.log("Please enter an integer.");
        return oddNum;
    };  

    for (n=startingValue; n< (Math.abs(a)>Math.abs(b) ? a : b); n+=2) {
        oddNum.push(n);
    };
    return oddNum;
};

//testing - not working with negative numbers
// let result = oddBetween(3,10);
// console.log(result);