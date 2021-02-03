


//function for displaying values
function dis(val)
{
document.getElementById("edu").value+=val
}
//function for evaluation
function solve()
{
 let x = document.getElementById("edu").value
 let y = eval(x)
 document.getElementById("edu").value = y
// if (document.getElementById("oppretion")="/") {
//     for (let i = 0; i < x.length; i++) {
//         if(x[i] = "/" && x[i+1]== 0){
//             document.getElementById("edu").value ="division by zero is not supported"
//                                  }
//         else{
//             let x = document.getElementById("edu").value
//             let y = eval(x)
//             document.getElementById("edu").value = y    
//             }  
//          }
//     }

}

//function for clearing the display
function clr()
{
document.getElementById("edu").value = ""
}




















// document.addEventListener("DOMContentLoaded", function(){
//     const screenDisplay = document.getElementById('screen');
//     const spans = document.querySelectorAll('.buttons span');
//     const spanArray = Array.from(span);
//     document.querySelectorAll('.operater')[1].innerText = '/';
//     document.querySelectorAll('.operater')[2].innerText = '*';
//     spanArayy.map(button => button.addEventListener('click',
//     function(){
//         if(buttons.innerText !== "="){
//             screenDisplay.innerText += button.innerText};
         
//         if (buttons.innerText === "="){
//            screenDisplay.innerText = eval
//            (screenDisplay.innerText)
//         };
//         if (buttons.innerText === "C"){
//             screenDisplay.innerText = ""
//         }
//    }));
    
// });





















