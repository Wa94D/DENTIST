let menu = document.querySelector("#navbar__toggle");
let header = document.querySelector("header");
let navbar = document.querySelector(".navbar");
menu.onclick = ()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");  
}
window.onscroll = ()=>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");  
 

}
window.onload = ()=>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");  
}

function message(){
    let name= document.getElementById("name")
    let email= document.getElementById("email")
    let number= document.getElementById("number")
    let msg= document.getElementById("msg")
    let sucess= document.getElementById("sucess")
    let danger= document.getElementById("danger")
    if (name.value === '' || email.value === '' || number.value === '' || msg.value === ''    )
    {
        danger.style.display="block";
    }else{
        setTimeout(() =>{
            name.value='';
            email.value='';
            msg.value='';
        },2000);
        success.style.display="block"
    }
    setTimeout(() =>{
        danger.style.display="none";
        success.style.display="none";
    },3000)
}