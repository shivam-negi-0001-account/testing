// let far = document.getElementById("farenhiet");
// let cel = document.getElementById("celius");

// far.addEventListener('input' , () => {
//     // console.log(far.value);
//     let cels = (far.value - 32) * 5/9
//     cel.value = cels.toFixed(4)
//     // console.log(cels);
//     if (far.value == '') {
//         cel.value = ''
//     }
// })

// cel.addEventListener('input' , () => {
//     // console.log(cel.value);
//     let faren = (cel.value * 9/5) + 32
//     far.value = faren.toFixed(4)

//     // console.log(faren);
//     if (cel.value == '') {
//         far = ''
//     }
// })
 


let farenhit = document.getElementById("farenhietInput");
let celius = document.getElementById("celiusInput");

farenhit.addEventListener('input' , () => {
    // console.log(farenhit.value);
   let fars= (farenhit.value - 32) * 9/5
   celius.value = fars.toFixed(4)
//    console.log(celius.value);

if (farenhit.value == '') {
    celius = ''
}
})

celius.addEventListener('input' , () => {
    // console.log(celius.value);
    let cels = (celius.value * 9/5) + 32
    farenhit.value = cels.toFixed(4)
    // console.log(cels);
    if (celius.value == '') {
        farenhit.value = ''
    }
})
