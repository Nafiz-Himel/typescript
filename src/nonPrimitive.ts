//array, object
//ts - tuple

let bazarList: string[] = ["rice", "dal", "oil"];

// bazarList.push(12);


let mixedArr:(string|number)[] = ["eggs",12,"milk",1,"sugar",2];
// mixedArr.push(true);
let mixedArrr = ["eggs",12,"milk",1,"sugar",2];


// let cooerdinates: [number,number] = [20,30,50]; 
let coordinates: [number,number] = [20,30,];

let couple: [string,string] = ["HUsband", "Wife"];

let mezbaNameAndRoll: [string,number] = ["Mezba", 79];

// mezbaNameAndRoll[0] = 79;

let destination: [string, string, number] = ["DHaka","Chattogram",3];



//reference type: object

// const user : {
//     firstName: "Mezbaul",
//     middleName: "Abedin",
//     lastName: "Forhan"
// }

// const user : {
//     firstName: string;
//     middleName: string;
//     lastName: string;
// }={
//     firstName: "Mezbaul",

//     lastName: "Forhan",
// }

const user: {
    // organization: "nothing"; //value=> type: Literal types
    readonly organization: string;
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
}={
    organization: "nothing",
    firstName: "Mezbaul",
    lastName: "Forhan",
    isMarried: true,
}


// user.organization ="ntg";
console.log(user);


