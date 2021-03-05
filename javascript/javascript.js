var div1 = document.getElementById('div1');
var p1 = document.getElementById('p1');

div1.addEventListener('click',textD,true);
p1.addEventListener('click',textP,true);
function textD(e){
  e.priventDefault();
}

function textP(){
    alert('la methode privent ne declenche pas la propagation ');
}
