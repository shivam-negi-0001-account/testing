//  ======================== TABLE OF ANY NUMBER USING DO ==================

// let el = document.createElement('p');
// let data = document.getElementById("data");
// console.log(el);
// el.textContent = "hello";
// data.appendChild(el)


//  ==================== TABLE PRINT ======================
let btn = document.getElementById("click");
let inputBox = document.getElementById("data")
let tab = document.getElementById("table");

btn.addEventListener('click', () => {
    // console.log('click');
    // console.log(inputBox.value);

    let num = inputBox.value;
    if (isNaN(num)) {
        alert("Only Number Are Allowed")
    } else {
        tab.innerHTML = '';

        let table = document.createElement("table")
        // console.log(table);
        table.setAttribute('border', '2px', 'solid', 'green')

        for (let i = 1; i <= 10; i++) {
            let tr = document.createElement("tr");
            table.appendChild(tr)

            let td = document.createElement("tr")
            td.textContent = (`${num} x ${i} = ${num * i}`)
            tr.appendChild(td)

        }

        tab.appendChild(table)
    }

})









// ===================== CONTINUE STATMENT ====================

//  let a = 1;

//  while (a <= 10) {
//     a++ 
//     console.log('noida');
//     continue;
//  }
//  console.log(a);
//  a++


// ================== NESTED LOOPING ======================
// 1. OUTER LOOP
// 2. INNER LOOP




//  =========== ====================

for (let i = 1; i <= 5; i++){


    for (j = 1; j <= i; ++j)
        document.write(j)
    for (k = i - 1; k >= 1; --k)
    document.write(k)
    document.write("<br>")
    document.write("<br>")

}

