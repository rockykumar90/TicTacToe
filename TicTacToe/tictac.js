// let allbox = document.querySelectorAll(".box");
// let turno = true;



// allbox.forEach((box) => {
//     box.addEventListener("click", () =>{
//         if(turno){turno=false; box.innerText="O";
          
//         }
//         else{turno=true; box.innerText="X";}
//         box.disabled=true;
//         checkWinners();

//     });
    
// });




// const winPatterns = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// const checkWinners = () =>{
//     for(let pattern of winPatterns){
//         let pos1val = allbox[pattern[0]].innerText;
//         let pos2val = allbox[pattern[1]].innerText;
//         let pos3val = allbox[pattern[2]].innerText;
//         if(pos1val != "" && pos2val !="" && pos3val != ""){
//             if(pos1val === pos2val && pos2val === pos3val ){
//                 alert("winner is me")
//             }
//         }
        
//     }

// };
 let allbox= document.querySelectorAll(".box");
 let turno=true;

 allbox.forEach((box) => {
    box.addEventListener("click", ()=> {
         if(turno){turno=false; box.innerText="O";}
    else{turno=true; box.innerText="X"}
    box.disabled=true;
    checkWinner();
    });
   
    
 });

 const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

 const checkWinner= ()=>{
    for(let pattern of winPatterns ){
        let pos1val = allbox[pattern[0]].innerText;
        let pos2val = allbox[pattern[1]].innerText;
        let pos3val = allbox[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
               

            }
        }
    }
 };

 
 let msg = document.querySelector("p");
 let nwbtn = document.querySelector("newgame") ;
 let msgcont = document.querySelector(".msgcont");
 
msgcont.addEventListener("click", ()=>{
    msgcont.classList.add("hide");
   
});

 const showWinner = (winner) => {
msg.innerText=`Winner is ${winner}`;
msgcont.classList.remove("hide");




 }