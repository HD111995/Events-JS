function numHex(dec){
    let hex = dec.toString(16);
    console.log(hex)
    return hex.length == 1 ?"0" + hex :hex;
}
function rgbToHex(r,g,b){
    return '#' + numHex(r) + numHex(g) + numHex(b);
}
let p = document.getElementById('demo');
let click = document.querySelector('body p:nth-child(3)')
let change = document.querySelectorAll('input')
let add = document.querySelector('body p:nth-child(4)')
let body = document.querySelector('body').style;
let counter = 0;
let arr =[];
let color ;
console.log(change)
click.addEventListener('click',(e)=>{
e.target.innerHTML == "Rosa" ? arr = [254, 192, 203]:false;
e.target.innerHTML == "Lila" ? arr = [127, 0, 128] :false;
e.target.innerHTML == "Orange" ? arr = [255,152,0] :false;
body.backgroundColor = 'rgb('+arr+')';
for( j=0 ; j < arr.length ; j++ ){
    change[j].value = arr[j]
}
counter +=1;
p.innerHTML = 'DU hast die Farbe '+counter+' mal geändert!';
})

 
add.addEventListener('change',(e)=>{
    counter +=1;
    arr =[]
    change.forEach(elt => {
        arr.push(elt.value)
    });
    r = arr[0];
    g = arr[1];
    b = arr[2];
    console.log(r,g,b)
    color = 'rgb('+arr+')'
    body.backgroundColor = color
    p.innerHTML = color+' = '+rgbToHex(r,g,b);
})
console.log(body.backgroundColor)