// let tab = new Array(100000);
// let container = document.querySelector('.container');
// container.style.gridTemplateColumns = "repeat(60,20px)";
// container.style.gridTemplateRows = "repeat(100,20px)";

// (async () => {
//     await new Promise((resolve) => {
//         for(let i=0;i<tab.length;i++){
//             let subDiv = document.createElement('div');
//             subDiv.className="sub_container";
//             container.appendChild(subDiv)
//         }
//         resolve()        
//     })
// })()
// console.log('salut')

class Form{
    input; 
    constructor(){

    }
    getAllInput(){
        
    }   
}
let form = document.querySelector('#myForm')
var formData = new FormData(form)
let allField  =document.querySelectorAll('.field');
allField.forEach(el=>{
    el.addEventListener('input',(e)=>{
        formData.append(el.getAttribute('name'),e.target.value)
    })
})