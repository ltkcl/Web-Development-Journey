let btn = document.querySelectorAll("button");
for(let i=1;i<5;i++){
    btn[i].i.addEventListener("onclick",printf);
    btn[i].addEventListener("dblclick",myname);
}
function printf(){
    alert("Hello world");
}
function myname(){
    alert("this is apna colleg");
}