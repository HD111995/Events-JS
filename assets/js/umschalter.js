let ul = document.getElementById('umschalter')
let li = document.getElementsByTagName('li')
let body = document.getElementById('body')
console.log(li);
ul.addEventListener('click',(e)=>{
    e.target.id == "grauTaste"? body.style.backgroundColor = "gray":false;
    e.target.id == "weissTaste"? body.style.backgroundColor = "#fff":false;
    e.target.id == "blauTaste"? body.style.backgroundColor = "blue":false;
    e.target.id == "gelbTaste"? body.style.backgroundColor = "yellow":false;
})