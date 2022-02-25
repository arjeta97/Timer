let minutes=document.querySelector("#minutes");
let seconds=document.querySelector("#seconds");
let startBtn=document.querySelector("#startbtn");
let stopBtn=document.querySelector("#stopbtn");
let resetBtn=document.querySelector("#resetbtn")

let myTimer
let mySeconds=0;
let myCounter=0;
let myMinutes=0;


startBtn.addEventListener("click", function(){
    
    startBtn.disabled=true;
    
    
    myTimer=setInterval(function(){
    myCounter++
    mySeconds=myCounter;
    seconds.innerHTML=mySeconds;

    //Start counting seconds

    if(mySeconds>59){

        seconds.innerHTML="00";
        myCounter=0;
        myMinutes++;


    }else if(mySeconds>9){
        seconds.innerHTML=mySeconds;
  
    }else {
        seconds.innerHTML="0"+mySeconds;}


  //Start counting minutes

    if(myMinutes>59){

        minutes.innerHTML="00";
        seconds.innerHTML="0"
        myCounter=0;
        myMinutes=0;
        mySeconds=0;
        clearInterval(myTimer);


    }   else if(myMinutes>9){
        minutes.innerHTML=myMinutes;

    }else {
        minutes.innerHTML="0"+myMinutes;}

    },500)});

stopBtn.addEventListener("click", function(){
    startBtn.disabled=false;

clearInterval(myTimer);
console.log("sjdk");

});

resetBtn.addEventListener("click", function(){
    startBtn.disabled=false;
    clearInterval(myTimer)
    minutes.innerHTML="00";
    seconds.innerHTML="0"
    myCounter=0;
    myMinutes=0;
    mySeconds=0;

})



