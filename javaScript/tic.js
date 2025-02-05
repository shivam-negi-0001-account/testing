const boxes = document.querySelectorAll('.box');
const msg = document.querySelector('.msg');
const msgContainer = document.querySelector('.msg-container');
const reset = document.querySelector('#reset');
// console.log(boxes);
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
let turnO = true; // palyers X O

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        // console.log('btn clicked');
        // box.innerHTML = "ABCD"
        if(turnO) // player X
            {
            box.innerHTML = 'O';
            turnO=false;
            }
        else{ //player O
            box.innerHTML = 'X';
            turnO = true;
        }
        box.disabled=true;
        checkWinner()
    })
  })
  // diabledBoxes function
  const disabledBoxes = ()=>{
       for(box of boxes)
       {
         box.disabled = true;
       }
  }

// winning patterns

function checkWinner()
{
    winPatterns.forEach((pattern)=>{
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );

        let pos1 =  boxes[pattern[0]].innerText;
        let pos2 =  boxes[pattern[1]].innerText;
        let pos3 =  boxes[pattern[2]].innerText;
        if(pos1!=="" && pos2!=="" && pos3!=="")
        {
            if(pos1 === pos2 && pos2 === pos3)
                {
                    // console.log('winner',pos1);
                    showWinner(pos1)
                    disabledBoxes()
                }
        }
       
 })
}

function showWinner(winner)
{
    //   console.log('winner is :',winner);
      msg.innerHTML = `Congrations!, Winner is : ${winner}`;
      msgContainer.classList.remove('hide');
}

// reset function
reset.addEventListener('click',()=>{
    for(box of boxes)
    {
        box.disabled = false;
        box.innerHTML=""
        msgContainer.classList.add('hide')
    }
})
    