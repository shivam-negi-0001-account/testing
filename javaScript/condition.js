
// ==================== JAVA SCRIPTR CONDITION ====================

// CONDITIONAL STAEMENT ==> TO TEST ANY CONDITION
// 1. IF => SINGLE STATEMEMNT
// 2. IF  ELSE ==> TWO CONDITION
// 3. IF ..ESLE IF ... ELSE IF ==> MULTIPLY CONNDITION
// 4. SWICH CASE ==> .....

// ============= ONE CONDITION  EXAMPLE ONE..... ===================

// let sales = 20000;
// let bouns = 0;
// if (sales>= 20000) {
//     bouns = sales*5/100;
// }
// console.log(`bouns is : ${bouns}`);


// let sales = 10000;

// if (sales>= 20000) {
//     console.log(1000);
// }else{
//     console.log(0);
// }


// ============= TWO CONDITION  EXAMPLE  TWO....===================

//  let salary =1100;
//  let hra = 0;

//  if (salary >= 122) {
//     hra = salary*10/100;
//     salary = salary+hra;
//  }
//  else{
//     hra = 0;
//     salary = salary + hra;
//  }

//  console.log(`your net salary ${salary}`);


// =============  MULTIPLY CONDITIONS  EXAMPLE  THREE....===================

// let sallry = 30000;
// let hra = 0;

// if (sallry <= 10000) {
//     hra = sallry * 5 / 100;
//     sallry += hra;
// }

// else if (sallry > 10000 && sallry <= 20000) {
//     hra = sallry * 10 / 100;
//     sallry += hra;
// }

// else if (sallry > 20000 && sallry <= 30000) {
//     hra = sallry * 20 / 100;
//     sallry += hra;
// }

// else  {
//     hra = sallry * 30 / 100;
//     sallry += hra;
// }

// console.log(`net sallary ${sallry}`);


// ======================= USER ENTER  HIS OWN  SALLRY   ==========================

// let sallry = +parseInt(prompt(" ENTER HIS OWN SALLARY "));
// let hra = 0;

// if (sallry <= 10000) {
//     hra = sallry * 5 / 100;
//     sallry += hra;
// }

// else if (sallry > 10000 && sallry <= 20000) {
//     hra = sallry * 10 / 100;
//     sallry += hra;
// }

// else if (sallry > 20000 && sallry <= 30000) {
//     hra = sallry * 20 / 100;
//     sallry += hra;
// }

// else  {
//     hra = sallry * 30 / 100;
//     sallry += hra;
// }

// console.log(`User Net Salary :  ${sallry}`);


//  ==============  SWITCH CASE =================== 
// let choice = prompt("choice number")
// switch (choice) {
//     case '1':
//         console.log('good mrg');
//         break;

//     case '2':
//         console.log('good aftrnoon');
//         break;

//     case '3':
//         console.log('good night');
//         break;

//     case '4':
//         console.log('good ');
//         break;

//     default:
//         console.log('your choice worng. try again!!');
//         break;
// }



// ================== HW  ONE CONDITIONS EXAMPLE ===================

// let sallry = 20000;
// let hra;

// if (sallry > 100) {
//     hra = sallry*10/100;
// }
// console.log(`hra is : ${hra}`);


// ============= TWO CONDITION  EXAMPLE  TWO....===================


// let sallary = 100;
// let hra;

// if (sallary >= 200) {
//     hra = sallary*10/100;
//     sallary = sallary+hra;
// }
// else{
//     hra = 0;
//     sallary = sallary + hra;
// }
// console.log(hra);


//  let salary =1000;
//  let hra = 0;

//  if (salary >= 2212) {
//     hra = salary*10/100;
//     salary = salary+hra;
//  }
//  else{
//     hra = 0;
//     salary = salary + hra;
//  }
//  console.log(hra);




// ============= MULTIPLY  CONDITION  EXAMPLE ONE..... ===================

// let voting = 80;

// if (voting <18 ) {
//     console.log('your age not vot');

// } else if (voting > 18 && voting <= 25) {
//     console.log('your vot now only pardhaan');
// }

// else if (voting > 25 && voting <= 45) {
//     console.log('your vot now p.m modi ');
// }

// else if (voting > 45 && voting <= 80) {
//     console.log('your vot now above');
// }
//  else{
//     console.log('your age is not match...');
//  }


// let sallary = 129;
// let hr;


// if (sallary <= 10000) {
//     hr = sallary * 5 / 100;
//     sallary = sallary + hr;
// }

// else if (sallary > 10000 && sallary <= 16000) {
//     hr = sallary * 10 / 100;
//     sallary = sallary + hr;
// }

// else if (sallary >= 16000 && sallary <= 25000) {
//     hr = sallary * 20 / 100;
//     sallary = sallary + hr;
// }

// if (sallary > 25000 && sallary <= 35000) {
//     hr = sallary * 25 / 100;
//     sallary = sallary + hr;
// }

// if (sallary > 35000 && sallary <= 50000) {
//     hr = sallary * 35 / 100;
//     sallary = sallary + hr;
// }
// else {
//     hr = sallary * 40 / 100;
//     sallary = sallary + hr;
// }

// console.log(`your hra is  : ${hr}`);

// let sallary = parseInt(prompt("YOUR SALLARY PRINT"));
// let hr;


// if (sallary <= 10000) {
//     hr = sallary * 5 / 100;
//     sallary = sallary + hr;
// }

// else if (sallary > 10000 && sallary <= 16000) {
//     hr = sallary * 10 / 100;
//     sallary = sallary + hr;
// }

// else if (sallary >= 16000 && sallary <= 25000) {
//     hr = sallary * 20 / 100;
//     sallary = sallary + hr;
// }

// if (sallary > 25000 && sallary <= 35000) {
//     hr = sallary * 25 / 100;
//     sallary = sallary + hr;
// }

// if (sallary > 35000 && sallary <= 50000) {
//     hr = sallary * 35 / 100;
//     sallary = sallary + hr;
// }
// else {
//     hr = sallary * 0 / 100;
//     sallary = sallary + hr;
//     // console.log('not');
// }

// console.log(`your hra is  : ${hr}`);



