//  JAV SCRIPT DATA TIME ======================

// let d =  new Date();
// console.log(d);
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours()); 


// ===================== COUNT DOWN TIMER IN JAVA SCRIPT   ===============================

function countDown() {



    setInterval(() => {
        // console.log('hello');
        // document.write("hello")

        let dt = new Date('june  29 , 2024 , 12:00:00').getTime();
        // console.log(dt);

        let current = new Date().getTime();
        // console.log(current);

        let difference = dt - current;
        // console.log(difference);


        let day = Math.floor(difference / (1000 * 60 * 60 * 24))
        // console.log(day);

        let hour = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
        // console.log(hour);

        let minutes = Math.floor(difference % (1000 * 60 * 60 )/ (1000 * 60))
        // console.log(minute);

            let secound = Math.floor(difference % (1000 * 60) / (1000));
        // console.log(secound);


        document.getElementById("day").innerHTML = day;
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = secound;

        
    }, 1000)
}
countDown();