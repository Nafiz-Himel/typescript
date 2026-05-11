//object destructuring
const user = {
    id : 123,
    name: {
        firstName: 'ntg',
        middleName: 'also',
        lastName: 'nothing',
    },
    gender: 'male',
    favouriteColor: 'black',
};

// const myFavouriteColor = user.favouriteColor;
// const middleName = user.name.middleName;

const {favouriteColor: myFavouriteColor} = user;
console.log(myFavouriteColor);

const {favouriteColor, name : {middleName}} = user;
console.log(middleName);



//array destructuring

const friends = ['karim', 'rahim', 'halim'];

// const myBestFriend = friends[1];
// console.log(myBestFriend);

// const [A,myBestFriend,C] = friends;
const [,myBestFriend] = friends;
console.log(myBestFriend);