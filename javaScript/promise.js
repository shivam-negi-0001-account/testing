//  PROMISE FUCTION IN JAVA SCRIPT
// ======================== =========================
// console.log('hello');
// console.log('world');
// console.log('in java script');



// ============== ASYNC FUCTION =====================

// console.log('hello');

// setTimeout(() => {
//     console.log('world');
// }, 3000)

// console.log(' java script');


// let x = 30,y;
// console.log('loding...');

// setTimeout( () => {
//     y=20;
// } , 3000)

// console.log(x+y);


// ===================  PROMISS FUCTION EXAMPLE   ===========================

// let x = 30, y = 40, z;

// console.log('Loding..');


//  let data = new Promise((res, rej) => {
//     setTimeout(() => {
//         y = 40;
//         z = 30;
//         res('done');

//     }, 2000)
// }).then((res) => {
//     console.log(`Answer is ${x + y + z}  ${res};`)
// })

//     .catch(() => {
//         console.log('Error....')
//     })

//  =================== =====================

//     let x = 30, y = 20,z;
// console.log('Loding..');
// new Promise((res, rej) => {
//     setTimeout(() => {
//         y = 30;
//         z = 20;
//         rej();

//     }, 2000)
// }).then(() => console.log(x + y + z))
//     .catch(() => console.log('Error....'))


// ===================== ===========================


// let x = 30, y = 40, z;

// console.log('Loding..');


// let data = new Promise((res, rej) => {
//     setTimeout(() => {
//         y = 40;
//         z = 20;
//         z < 30 ? res ("done"): rej ("error");
//         // z > 30 ? res ("done"): rej ("error");


//     }, 2000)
// }).then((data) => {
//     console.log(`Answer is ${x + y + z}  ${data};`)
// })

//     .catch(() => {
//         console.log('Error....')
//     })
//     .finally(() => {
//         console.log('welcome')
//     })




//  ======================= API CALLS=================



    // ==================== ASYNC AWAIT =====================
    // async function getData() {

    //     const res = await fetch(`https://fakestoreapi.com/products`);
    //     // console.log(res);

    //     const data = await res.json();
    //     // console.log(data);

    //     document.write("<table border='1'> ")
    //     document.write(` <tr> <td>title</td> <td>price</td> <td>Image</td> </tr>`)
    //     for (i = 0; i < data.length; i++) {
    //         document.write("<tr>")
    //         document.write(`<td> ${data[i].title.slice(0, 20)} </td>`)
    //         document.write(` <td> ${data[i].price} </td>`)
    //         document.write(` <td> ${data[i].category} </td>`)
    //         document.write(` <td> <img src = ${data[i].image} width='100px' height'100px' </td>`)
    //         document.write("</tr>")


    //     }
    //     document.write("</table>");

    // }
    // getData();