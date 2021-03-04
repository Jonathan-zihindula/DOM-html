var p1 = document.querySelector('p');

p1.addEventListener('mouseover',Function1);
p1.addEventListener('mousedown',Function2);
p1.addEventListener('mouseout',Reset1);
p1.addEventListener('mouseup',Reset2);

function Function1(){
    this.innerHTML = "click me now";
    this.style.backgroundColor = "orange";
}
function Function2(){
    this.innerHTML = "congratilation";
    this.style.color = "#26C";
    this.style.fontWeight = 'bold';
    this.style.fontSize = '24px';
    
}
function Reset1(){
    this.innerHTML = "click me ";
    this.style.backgroundColor = "";
}
function Reset2(){
    this.innerHTML = 'pass on me ';
    this.style.color = '';
    this.style.fontWeight = '';
    this.style.fontSize = '';
}