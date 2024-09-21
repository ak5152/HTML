let btn=document.querySelector("button");
let currstat="bright";
btn.addEventListener("click",()=>{
    if(currstat=="bright"){
        currstat="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currstat="bright";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currstat);
});