let digiSecond=document.getElementById("seconds");
let digiMinuite=document.getElementById("minutes");
let digiHour=document.getElementById("hours");
let digiampm=document.getElementById("ampm");

function setClock(){
 let currentDate=new Date();

 let theSecond=currentDate.getSeconds();
 let theHour=currentDate.getHours();
 let theMinuite=currentDate.getMinutes();

 if(theHour===0){
  theHour=12;
 } else{
  theHour;
 }

 if(theHour > 11){
  digiampm=digiampm.innerText="PM";
  theHour=theHour-12;
 }

 if (theMinuite < 10){
  theMinuite="0"+theMinuite;
 }

 if (theHour < 10){
  theHour="0"+theHour;
 }

 if(theSecond < 10){
  theSecond="0"+theSecond;
 }


 digiSecond.innerText=theSecond;
 digiMinuite.innerText=theMinuite;
 digiHour.innerText=theHour;
}

setInterval(setClock,1000);
setClock();

