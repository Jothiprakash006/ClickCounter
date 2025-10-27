const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlable = document.getElementById("countlabel");
let count = 0;
increasebtn.onclick=function(){
    count++;
    countlable.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    countlable.textContent=count;
}
resetbtn.onclick=function(){
    count=0
    countlable.textContent=count;
}
