

// =================== JAVA SCRIPT OBJECT =================

// let person = {
//     name:'shiv',
//     age: 22,
//     id: 123,

//     class : function() {
//         return 12
//     }
// };

// console.log(person.age);
// console.log(person.id);

// person.city = 'delhi'
// console.log(person);



// ============== OBJECT WITH ARRAY ================

// let data = [
//     {
//         id: 123,
//         name: 'shivam',
//     },

//     {
//         id: 124,
//         name: 'aman',
//     },

//     {
//         id: 125,
//         name: 'harshit',
//     },
// ]

// console.log(data[0].id);


// -================== OBJECT DESTRUCTRUING =================== 

// let person = {
//     namee: "shivam",
//     id: 1232,
//     email: ' ravi@gmail.com',
//     address: {
//         homeNU: 'a-36',
//         city: "noida",
//         pinCode: 124355,
//         state: "utar pardesh",
//     }
// }

// let {namee , id, email , address} = person;
// // console.log(namee);
// // console.log(id);

// let { homeNU , city , pinCode , state} = address;  // YOU CAN NAME CHANGE KEY EXAMPLE (ADDRESS:HOMEADRESS) 
// console.log(city);
// console.log(state);



//  ========================    ==============================

let result = prompt("enter your number");

let num = 0;

if ( num <= 250) {
    document.write("your are fail..!")

} else if (num > 250 && num <= 300) {
    document.write("your second possition...")
}
else if (num > 300 && num <= 400) {
    document.write("your first possition...")
}

else if (num > 440 && num <= 480) {
    document.write("your top possition in class...")
}
else {
    document.write("not spport !!")
}

