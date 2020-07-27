var button=document.getElementById("button");
var body=document.getElementsByTagName("body")[0];
var colors=["brown","red","blue","green","yellow"];

body.style.backgroundColor="orange";

button.addEventListener("click", colorsIndex);

function colorsIndex(){
    var color=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[color];
}
