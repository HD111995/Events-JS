//event lev-1-1
let p = document.getElementById('alert');
p.addEventListener('click',()=>{
   alert('you clicked the p')
})


//lev-1-2 Event Datum
let b = document.getElementById('dat');
b.addEventListener('click',()=>{
    document.getElementById('show').innerHTML = new Date(Date.now())
})

//Events lev-1-3
let div = document.getElementsByClassName('card')
for ( i = 0; i < div.length ; i++ ){
    div[i].addEventListener('click',(e)=>{
        e.target.style.backgroundColor = 'red'
    })
}

//Event Lev-1-4
let pCons = document.getElementById('con-print')
pCons.addEventListener('click',()=>{
    console.log('you cliked the para')
})

//Events Counter lev-1-5
let b2 = document.getElementById('clickMe')
let j=0;
b2.addEventListener('click',()=>{
    j += 1;
    b2.innerHTML = 'Click me: '+j;
})

//Events Change lev-1-6

let pOp = document.getElementById('option-selected')
let select = document.getElementById('my-select')
select.addEventListener('change',(e)=>{
    pOp.innerHTML = 'Sie haben ausgewählt '+ e.target.value;
    e.target.value == 'select1'? console.log('true'):false; 
})


