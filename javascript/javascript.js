var ouvrir = document.getElementById('ouvrir');
var fermer = document.getElementById('fermer');
var fenetre = "";
ouvrir.addEventListener('click',fOuvrir);
fermer.addEventListener('click',fFermer);

function fOuvrir() {
    fenetre = window.open('http://pierre-giraud.com','_blankl','width  = 500');
}
function fFermer() {
    fenetre.close();
}