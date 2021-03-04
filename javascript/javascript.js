var div1 = document.getElementById('div1');
var p1 = document.getElementById('p1');
var body = document.body;
var strong = document.querySelector('strong');
p1.addEventListener('click',CP1,true);
strong.addEventListener('click',CS,true);

function CP1 (){
    alert('capt paragraphe');
}
function CS (){
    alert('capt strong');
}

div1.addEventListener('click',BD1);
body.addEventListener('click',BB);

function BD1 (){
    alert('bouillonnement div')
}

function BB (){
    alert('bouillonnement body');
}