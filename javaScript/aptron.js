
// const data =  {
//     name: "shiv",
//     id: 1001,
//     address:{
//         city: "delhi",
//         address: "c-block",
//         state: "new delhi",
//         pinCode: 234564,
//         hobbies: ['cricket' , 'ran' , 'football' , 'swimming', 'traveling']
//     }
// }

// console.log(data.id);
// console.log(data.name);
// console.log(data.address);
// console.log(data.address.hobbies[2]);





// DESTRUCTURING OF AN OBJECT

// const person =  {
//     name: "shiv",
//     id: 1001,
//     address:{
//         city: "delhi",
//         address: "c-block",
//         state: "new delhi",
//         pinCode: 234564,
//         hobbies: ['cricket' , 'ran' , 'football' , 'swimming', 'traveling']
//     }
// }



// const {id , name , address:{state , pinCode , hobbies}} = person;
// console.log(id);
// console.log(name);
// console.log(state);
// console.log(hobbies[1]);




// 1`234567y890-=098732 12346890

// const item = {
//     dFrig: 12453,
//     tv: 20000,
//     mobile: 17000,

//     details: {
//         name: 'shiv',
//         age: 21,
//         address: 'new delhi,',
//         state: 'delhi',
//         pinCodeNumber: 324301,
//         hobbies: ['ran', 'football', 'swimming', 'cricket'],



//     }
// }

// console.log(item.mobile);
// console.log(item.tv);
// console.log(item.details.age);
// console.log(item.details.state);
// console.log(item.details.user.hobbies[2]);

// const {dFrig , tv , details:{address , pinCodeNumber , age , hobbies } , } = item;
// console.log(dFrig); 
// console.log(tv);
// console.log(address);
// console.log(pinCodeNumber);
// console.log(age);
// console.log(hobbies[2]);
// console.log(fevHero);



// EVENTS IN JAVA SCRIPT

// function dateCheek() {

//     let date = document.getElementById("demo").innerHTML = Date();

// }

// function person(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
// }



// const myMother = new person('setal', 'devi', 50);
// const myFather = new person('shiv', 'singh', 60);
// document.getElementById("demo").innerHTML = ' my mother age  is ' + myMother.age + '. and my father age is ' + myFather.age + '<br>' + ' my mother name is ' + myMother.firstName + '  ' + myMother.lastName + '<br>' + ' my father name is ' + myFather.firstName + '  ' + myFather.lastName;


// const details = {
//     firstName: 'shiv',
//     lastName: 'singh',
//     age: 45,
//     city: 'new york',
// }

// document.getElementById("demo").innerHTML = ` my name is ${details.firstName} ${details.lastName} <br> my age is ${details.age} <br>  my city name is ${details.city}`


// 1234567890[]

// let name = "hello world";
// console.log(name.charAt(0));

// for (let i = 0; i <name.length; i++)
//      {
//    for (let j = 0; j<=i; j++) {

//     document.write(name.charAt(j)
//     // document.write(name.charAt(i))

//     )
//    }
//    document.write("<br>")


// let data = document.getElementById("data");
// let chars = document.getElementById("chars");
// let words = document.getElementById("words");
// data.addEventListener("input", () => {
//     // console.log(data.value.length);
//     chars.innerHTML = data.value.length;
//     let newDta = data.value.trim();
//     let totalWords = data.value.spilt(" ")
//     words.innerHTML = totalWords.length;
// })



// @@@@@@@@@@@@@@@@@@@@********************** TRIM() FUNCTION

// let name = "hello world        ";
// let user = name.trim();
// console.log(user.length);


// let name = "hello world        ";
// // let user = name.trim();
// console.log(name.length);



// PAD START FUNCTION @@@@@@@@@@@@@#####################3

// let nameStart = 'shiv';

// let total = nameStart.padStart(10 ,'0');
// console.log(total);


// PAD END FUNCTION (((((************************)))))

// let nameStart = '5';

// let total = nameStart.padEnd(3 ,'0');
// console.log(total);

// let nameStart = 'shiv';

// let total = nameStart.padEnd(10 ,' hii');
// console.log(total);




//REPEAT FUNCTION !!!!!!!!!!!!!!@@@@@@@@@@@@@@#################

// let userName = 'shiv ';

// let name = userName.repeat(6)
// console.log(name);


// let userName = 'hello world ';

// let name = userName.repeat(6)
// console.log(name);




// Replace FUNCTION )))))))(*&&&&&&&&&&&&&&&&&*((((())))))

// function tryIt() {
//     let newFun = document.getElementById("demo").innerHTML;
//      document.getElementById("demo").innerHTML = 
//     newFun.replace("microsoft" , "w3School")


// }




// =================== JAVA SCRIPT CLASSES ==================================

// class Addition {
//     numOne;
//     numTwo;

//     constructor(numOne, numTwo) {
//         this.numOne = numOne;
//         this.numTwo = numTwo;
//     }

//     totalNumber() {
//         let s = 0;
//         s = this.numOne + this.numTwo;

//         console.log(`sum of ${this.numOne} and ${this.numTwo} is ${s}`);
//     }
// }

// const result = new Addition(10, 100, 1000, 10000, 100000);
// result.totalNumber();


// ===================  ========================

// class Add {
//     sumNumOne;
//     sumNumTwo;
//     sumNumThree;
//     sumNumFour;
//     sumNumFive;
//     sumNumSix;

//     constructor(sumNumOne, sumNumTwo, sumNumThree, sumNumFour, sumNumFive, sumNumSix) {
//         this.sumNumOne = sumNumOne;
//         this.sumNumTwo = sumNumTwo;
//         this.sumNumThree = sumNumThree;
//         this.sumNumFour = sumNumFour;
//         this.sumNumFive = sumNumFive;
//         this.sumNumSix = sumNumSix;
//     }
//     totalSumNumber() {
//         let sumNumber = 0;
//         sumNumber = this.sumNumOne + this.sumNumTwo + this.sumNumThree + this.sumNumFour + this.sumNumFive + this.sumNumSix;
//         console.log(`sum of => ${this.sumNumOne} and => ${this.sumNumTwo} and => ${this.sumNumThree} and => ${this.sumNumFour} and => ${this.sumNumFive} and final => ${this.sumNumSix}...`);

//     }

// }

// const totalResult = new Add(10, 100, 1000, 10000, 100000, 1000000);
// totalResult.totalSumNumber();


// =================== moblie details   ========================

// class moblieDetails {
//     mobileName;
//     mobileModel;
//     mobliePrice;
//     mobileColor;

//     constructor(mobileName , mobileModel , mobliePrice , mobileColor){
//         this.mobileName = mobileName;
//         this.mobileModel = mobileModel;
//         this.mobliePrice = mobliePrice;
//         this.mobileColor = mobileColor;
//     }

//     mobileInfomation(){
//         console.log(` mobile name is => ${this.mobileName}`);
//         console.log(` mobile model is => ${this.mobileModel}`);
//         console.log(` mobile price is => ${this.mobliePrice}`);
//         console.log(` mobile color is => ${this.mobileColor}`);

//     }

// }
// const mb = new moblieDetails('samsung' , 's24' , '150000' , 'black')
// mb.mobileInfomation();

// console.log('=== NEXT MOBLIE INFORMACTION============');
// const phoneDetails = new moblieDetails ('infinix' , 'hot.12' , '20000' , 'green')
// phoneDetails.mobileInfomation();



// =================== moblie details SHOW BROWER SCREEN  ========================

// class moblieDetails {
//     mobileName;
//     mobileModel;
//     mobliePrice;
//     mobileColor;

//     constructor(mobileName, mobileModel, mobliePrice, mobileColor) {
//         this.mobileName = mobileName;
//         this.mobileModel = mobileModel;
//         this.mobliePrice = mobliePrice;
//         this.mobileColor = mobileColor;
//     }

//     mobileInfomation() {
//         document.getElementById("mobileDtat").innerHTML = ` mobile name is => ${this.mobileName} <br> mobile model is => ${this.mobileModel}
//         <br>  mobile price is => ${this.mobliePrice} <br> mobile color is => ${this.mobileColor} `
//     }

// }
// const mb = new moblieDetails('samsung', 's24', '150000', 'black')
// mb.mobileInfomation();

// const phoneDetails = new moblieDetails('infinix', 'hot.12', '20000', 'green')
// phoneDetails.mobileInfomation();




// =================== inhare  ========================

class parent {
    constructor(city) {
        console.log('parent class constructor...', city);
    }
    show() {
        return 'hello java script';
    }
}

class child extends parent {
    constructor(city) {
        super(city)
        console.log('child class constructor...', city);
    }
    get() {
        console.log(this.show());
    }

}
const cl = new child('noida');
cl.get();





let title = "Maine ajj \" web development \" Ki duniya mein ek aur \'kadan\' rakha.Maine sikha ki \'string\' likhne mai \' / \' ka kya use hota hai.";
document.write(title)