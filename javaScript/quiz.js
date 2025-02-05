const Questions = [
    {
        ques: "HTML stands for",
        a: "hyper text markup language",
        b: "hyper text mark language",
        c: "hyper text marks language",
        d: "hyper text mark language",
        correct: "a",
    },
    {
        ques: "which one of the following is not a sematic tag",
        a: "footer",
        b: "div",
        c: "header",
        d: "nav",
        correct: "b",
    },
    {
        ques: "Largest heading in HTML5",
        a: "h2",
        b: "h5",
        c: "h6",
        d: "h1",
        correct: "d",
    },
    {
        ques: "Which one of the following in block element",
        a: "del",
        b: "span",
        c: "div",
        d: "mark",
        correct: "c",
    },
];

let total = Questions.length;
let index = 0;
let right = 0;
let wrong = 0;
let ques = document.getElementById('ques')
let optionInputs = document.getElementsByName('option')
function loadQuestion() {
    if (index === total) {
        endQuiz()
    }
    reset()
    let data = Questions[index];
    //  console.log(data);
    ques.innerText = `${index + 1}) ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d
}
loadQuestion();
function submitQuiz() {
    let data = Questions[index];
    let ans = checkAnswer();
    if (ans == data.correct)
        right++;

    else
        wrong++;
    index++;
    loadQuestion();
}
function checkAnswer() {
    let ans;
    optionInputs.forEach((input) => {
        if (input.checked)
            ans = input.value

    })
    return ans;
}

function reset() {
    optionInputs.forEach((input) => {
        input.checked = false
    })
}

function endQuiz() {
    let box = document.getElementsByClassName('box');
    box[0].innerHTML = `<div>
     <h2>Thank you playing quiz!!</h2>
     <h3 style="color:blue">Total questions :${total}</h3>
     <h3 style="color:yellow">Wrong questions :${wrong}</h3>
     <h3 style="color:green">Correct questions :${right}</h3>
   </div>`;
}





















    
