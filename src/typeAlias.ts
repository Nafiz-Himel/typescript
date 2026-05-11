type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    gender: 'male' | 'female';
    contactNo: string;
    address: {
        division: string;
        city: string;
    };
}


const user1:User = {
//     id: number;
//     name: { 
//         firstName: string; 
//         lastName: string 
//     };
//     gender: 'male' | 'female';
//     contactNo: string;
//     address: { 
//         division: string; 
//         city: string 
//     };
// } = {
    id: 123,
    name: { 
        firstName: 'Mr.', 
        lastName: 'X' 
    },
    gender: 'male',
    contactNo: '0190000',
    address: { 
        city: 'Dhaka', 
        division: 'Dhaka' 
    }
};

const user2: User = {
//     id: number;
//     name: { 
//         firstName: string; 
//         lastName: string 
//     };
//     gender: 'male' | 'female';
//     contactNo: string;
//     address: { 
//         division: string; 
//         city: string 
//     };
// } = {
    id: 123,
    name: { 
        firstName: 'Mrs.', 
        lastName: 'Y' 
    },
    gender: 'female',
    contactNo: '0190000',
    address: { 
        city: 'Mym', 
        division: 'Mym' 
    }
};


type IsAdmin = true
// const isAdmin: boolean = true;
const isAdmin: IsAdmin = true; 

type Name = string;
const myName: Name = 'Me. X';


// function
type AddFunc = (num1: number, num2: number) => 
    number;
const add:AddFunc = (num1,num2) => num1+num2
