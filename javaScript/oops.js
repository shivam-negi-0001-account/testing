// =============== OPPS IN JAVA SCRIPT ==============
/* 
OPPS => PBJECT ORIENTED PROGAMING
1. CLASS
CLASS CLASSNAME {
INSTANCE VARIABLES
INSTANCE METHOD
}

2. OBJECT 
OBJECTNAME = NEW CLASSNAME()
OR
ABJECTNAME = NEW CLASSNAME
 ========================

2. OBJECT
3.INHERITANCE
4.ENCAPSULATION
5.ABSTRACTION

*/


//  ================ EXAMPLE =================

// class test {

//     name = "aptron";   // INSTANCE VARIBALES

//     sayHello() {      // INSTANCE METHOD
//         // return "hello"
//         let n = 'hello';

//         console.log('hello' , n);

//     }
// }
// const ti = new test();
// console.log(ti.name);
// console.log(ti.sayHello());


// ======================= ===================
//  class Car {

//      model;
//      price;
//      color;

//      constructor( m , p , c) {

//         this.model = m;
//         this.price = p;
//         this.color = c;
//      }

//      move() {
        
//         console.log( ` Model Nu : ${this.model} `);
//         console.log( ` Price : ${this.price} `);
//         console.log( ` Color: ${this.color} `);

//      }

//  }

//  const shift = new Car( ' A300' , '14 Lakh' , 'White')
//  shift.move();
//  console.log('===========');

//  const Audi = new Car( ' Q70' , '80 Lakh' , 'blue')
//  Audi.move();
//  console.log('===========');

//  const Bmw = new Car( ' A200' , '91 Lakh' , 'black')
//  Bmw.move();
//  console.log('===========');

//  const marsdej = new Car( ' As380' , '1Cr' , 'green')
//  marsdej.move();
//  console.log('===========');

//  const RangRover = new Car( 'Q400 ' , '3 Cr 30 Lakh ' , 'gray')
//  RangRover.move();


// ========================== INHERITANCE ====================

// class one {
//   constructor (name)
//   {
//     console.log('perent class constructor ==> ', );
//   }
// }

// class two extends one {
//     constructor (name)
//     {
//         super(name)
//       console.log('child class constructor..');
//     }
//   }

// const b1 = new two ( 'aptron') ;


// ======================= localStorage========================
// localStorage.setItem( 'id' , 101)
// localStorage.setItem ( 'name' , 'aptron')

// console.log(localStorage.getItem('id'));
// console.log(localStorage.getItem('name'));


//  localStorage.removeItem('name'.)
// localStorage.clear()

// sessionStorage.setItem('id' , 1234)

 console.log(` Window Height : ${window.innerHeight}`)
 console.log ( ` Window Width : ${window.innerWidth}`)
 console.log( ` Port Number : ${location.port}`);
 console.log( ` Window HostName : ${location.hostname}`);
 console.log( ` Window PathName : ${location.pathname} `);


 console.log( navigator.appName);
 console.log(navigator.platform);