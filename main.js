// VARIABLES EX. 1
console.log("starting JS", "\nand it is working")

// EX. 2
let myAge = 35;
console.log(myAge);

// EX. 3
let juliaAge = 32;
let ageDif = myAge - juliaAge;
console.log(ageDif);

// CONDITIONALS EX. 4
if (myAge > 21) {
    console.log("You are older than 21.");
} else {
    console.log("You are not older than 21.");
}; 

// EX. 5
if (juliaAge > myAge) {
    console.log("Julia is older than you.");
} else if (juliaAge < myAge) {
    console.log("Julia is younger than you.");
} else {
    console.log("You and Julia are the same age.");
};

// ARRAYS EX. 1
let quokkas = ["Marta", "Jess", "Angelina", "Karolina", "Arno", "Alex", "John", "Ottavia", "Raul"];
quokkas.sort();
console.log(quokkas);
console.log(quokkas[quokkas.length-1]);

for (let quokkaIndex = 0; quokkaIndex < quokkas.length; quokkaIndex++) {
    console.log(quokkas[quokkaIndex]);
};

// ARRAYS EX. 2
let quokkaAge = [27, 28, 29, 30, 31, 32, 33, 34, 35]; 

let num = 0;
while (num<quokkaAge.length) {
    if (quokkaAge[num]%2 == 0) {
        console.log(quokkaAge[num])
        };
        num++;
};

for (n=0; n<quokkaAge.length; n++) {
    console.log(quokkaAge[n]);
}; 

