// ? : ternary operator : decision making
// ?? : nulish coalescing operator : null/undefined
// ?. optional chaining




const isEligible = (Age: number) => {
    // if (Age >= 21) {
    //     console.log('You are eligible.');
    // }
    // else {
    //     console.log('you are not eligible!')
    // }

    const result = Age >= 21 ? "You are eligible" : "You are not eligible!";
    console.log(result); 
}

isEligible(21);





// const userTheme = undefined;
// const userTheme = null;
// const userTheme = "";
const userTheme = "Green theme";

const selectedtheme = userTheme ?? 'Light theme';

console.log(selectedtheme);



// const isAuthenticated = null;
const isAuthenticated ="";

const resultWithThernary = isAuthenticated ? isAuthenticated : 'you are guest';
const resultWithNulish = isAuthenticated ?? 'you are guest';

console.log({resultWithThernary},{resultWithNulish});





//optional chaining
const user: {
    address:  {
        city: string,
        town: string,
        postalCode?: string,
    }
}= {
    address: {
        city: 'Dhaka',
        town: 'Dhaka',

    },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);