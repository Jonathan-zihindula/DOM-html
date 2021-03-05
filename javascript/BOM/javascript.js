var ouvrir = document.getElementById('ouvrir');
var fermer = document.getElementById('fermer');
var modifier = document.getElementById('modifier');
var fenetre = "";
ouvrir.addEventListener('click',fOuvrir);
modifier.addEventListener('click',Modifier);
fermer.addEventListener('click',fFermer);

function fOuvrir() {
    fenetre = window.open('http://pierre-giraud.com','_blankl','width  = 500');
}
function fFermer() {
    fenetre.close();
}
function Modifier() {
    fenetre.resizeTo(300,300);
}