
//  =======================   USER INPUT CLICK VALUE SHOW IN JAVA SCRIPT   ========================
// let submitBtn = document.getElementById("submitBtn");
// let name = document.getElementById("nameInput").value;
// let city = document.getElementById("cityInput").value;
// let email = document.getElementById("emailInput").value;


// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();

// console.log(nameInput.value);
// console.log(cityInput.value);
// console.log(emailInput.value);

// if(!nameInput.value){
//     alert("name is rquerd")
// }

// if(nameInput.value  === ''){
//     alert("name is rquerd")
// }

// if(nameInput.value || cityInput || emailInput){
//     alert("name is rquerd")
// }

// document.getElementById("userData").innerHTML = `Your Name :: ${nameInput.value} <br>  <br> City : ${cityInput.value} <br>  <br> Email : ${emailInput.value}`;

// nameInput.value = "";
// cityInput.value = "";
// emailInput.value = "";
// })

// ================== INPUT ADD NUMBER  =======================
function Add() {
    let addBtn = document.getElementById("addBtn")
    let input1 = document.getElementById("inputNumberOne").value;
    let input2 = document.getElementById("inputNumberTwo").value;

    input1 = parseInt(input1);
    input2 = parseInt(input2);


    let total = input1 + input2;

    addBtn.addEventListener("click", (b) => {
        b.preventDefault();

        document.getElementById("sumNumberOne").innerHTML = `${input1} + ${input2}  = ${total}`;
        input1.value = '';
        input2.value = '';

    })


}

function substrict() {
    let btn2 = document.getElementById("btn2")
    let input1 = document.getElementById("inputNumberOne").value;
    let input2 = document.getElementById("inputNumberTwo").value;

    input1 = parseInt(input1);
    input2 = parseInt(input2);


    let totalNumber = input1 - input2;

    btn2.addEventListener("click", (b) => {
        b.preventDefault();

        document.getElementById("sumNumberTwo").innerHTML = `${input1} - ${input2}  = ${totalNumber}`;
        input1.value = '';
        input2.value = '';

    })


}

function divid() {
    let btn3 = document.getElementById("btn3")
    let input1 = document.getElementById("inputNumberOne").value;
    let input2 = document.getElementById("inputNumberTwo").value;

    input1 = parseInt(input1);
    input2 = parseInt(input2);


    let totalNumber = input1 / input2;

    btn3.addEventListener("click", (b) => {
        b.preventDefault();

        document.getElementById("sumNumberThree").innerHTML = `${input1} / ${input2}  = ${totalNumber}`;
        input1.value = '';
        input2.value = '';

    })


}

function multiply() {
    let btn4 = document.getElementById("btn4")
    let input1 = document.getElementById("inputNumberOne").value;
    let input2 = document.getElementById("inputNumberTwo").value;

    input1 = parseInt(input1);
    input2 = parseInt(input2);


    let totalNumber = input1 * input2;

    btn4.addEventListener("click", (b) => {
        b.preventDefault();

        input1.value = '';
        input2.value = '';
        document.getElementById("sumNumberFour").innerHTML = `${input1} * ${input2}  = ${totalNumber}`;
        

    })


}


// function click() {
//     let btn = document.getElementById("btn")
//     let table = document.getElementById("tableInput").value;
//     let pera = document.getElementById("tablePrint");

   

//     btn.addEventListener("click", (b) => {
//         b.preventDefault();
//     })

//     table.innerHTML = "";
//     let i;
//     for (let i = 1; i <= 10; i++) {
//         pera.innerHTML = `${table} x ${i} = ${table * i} <br>`

//         if (table < 1) {
//             document.write("THESE IS NO TABLE FOR (0.) PLEASE PRINT A NUMBER GREATER THAN (0.)")

//         }
//     }

//     document.getElementById("tablePrint").innerHTML = table;
// }

function table() {
    let tableInput = document.getElementById("tableInputNumber").value;
    let dataInput = document.getElementById("display");
    dataInput.innerHTML = '';

    let i;
    for (let i = 1; i <= 10; i++) {
        dataInput.innerHTML += `${tableInput} x ${i} = ${tableInput*i} <br>`;

    }

    if (tableInput < 1) {
        document.write("THESE IS NO TABLE FOR (0.) PLEASE PRINT A NUMBER GREATER THAN (0.)")

    }
}



