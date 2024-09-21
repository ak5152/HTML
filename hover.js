let input=document.querySelector("button");
let body=document.querySelector("body");
let curst="light";
input.addEventListener("click",()=>{
    if(curst=="light"){
        curst="black";
       
        body.classList.add("myid");
    }else{
        
        curst="white"
        body.classList.add("youid");
    }
    console.log(curst);
});