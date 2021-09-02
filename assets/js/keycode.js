let check = document.getElementById('check');
let key1 = document.getElementById('key');
let key2 = document.getElementById('key-code')
let code = document.getElementById('code')
let res =document.getElementById('result')
check.addEventListener('keydown',(e)=>{
    key1.innerHTML = e.key;
    key2.innerHTML = e.keyCode;
    code.innerHTML = e.code;
    res.innerHTML = e.keyCode;
    console.log(e)
})