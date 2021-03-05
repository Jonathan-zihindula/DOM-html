var para = document.querySelectorAll('p');
var charger = document.getElementById('charger');
var recharger = document.getElementById('recharger');
var changer = document.getElementById('changer');

charger.addEventListener('click',charge);
recharger.addEventListener('click',recharge);
changer.addEventListener('click',change);
function charge (){
    location.assign('http://pierre-giraud.com');
}
function recharge (){
    location.reload();
}
function change (){
    location.replace('http://pierre-giraud.com');
}

var url = location.href;
var chemin = location.pathname;

para[0].innerHTML = 'url : ' + url + 
    '<br>chemin : ' + chemin ;