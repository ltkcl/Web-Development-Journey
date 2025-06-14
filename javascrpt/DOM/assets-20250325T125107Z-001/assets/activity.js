let btn=document.querySelector("button");
let box =document.querySelector("div");
let header =document.querySelector("h1");   
btn.addEventListener("click",function (){
    header.innerText=randomColor();
    box.style.backgroundColor=randomColor( );
});
function randomColor(){
        let red =Math.floor(Math.random()*255);
        let green =Math.floor(Math.random()*255);
        let blue =Math.floor(Math.random()*255);
        let c = `rgb(${red},${green},${blue})`;
        return c;
}
