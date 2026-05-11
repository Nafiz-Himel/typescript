//spread operator

//for array
const friends = ['Rahim', 'Karim'];

const schoolFriends = ['pintu', 'chintu', 'bulbul'];

const collegeFriends = ['Mr. Smart', 'Mr. very ver smart'];

// friends.push(schoolFriends);
friends.push(...schoolFriends);
friends.push(...collegeFriends);

console.log(friends);


//for object
const user = {name: 'Mezba', phone: "019000000"};
const otherInfo = {hobby:'outing', favouriteColor:'black'};

const userInfo = {...user, ...otherInfo};

console.log(userInfo);


//rest operator
// const sendInvite = (friend1: string, friend2: string, friend3: string) => {
//     console.log(`Sent Invitation to ${friend1}`);
//     console.log(`Sent Invitation to ${friend2}`);
//     console.log(`Sent Invitation to ${friend3}`);
// };

const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => 
    console.log(`Send invitation to ${friend}`)
    );
};

sendInvite('pinto', 'chinto', 'bulbul');