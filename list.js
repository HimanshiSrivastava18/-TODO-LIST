

let inputs=document.getElementById("input");
let text=document.querySelector(".text");

function Add(){
    if(inputs.value==""){
        alert("enter your task");
    } else {
        let newEle=document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="material-symbols-outlined">delete </i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click",remove)
        function remove(){
            newEle.remove()
        }
    }
}
