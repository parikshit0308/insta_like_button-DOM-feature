var con = document.querySelector("#container");
var like = document.querySelector("i");

con.addEventListener("dblclick", function () {
    console.log("hello world");
    like.style.transform = "translate(-45%,-50%) scale(1)";

    setTimeout(function(){
        like.style.transform = "translate(-45%,-50%) scale(0)";
    },900);
});     