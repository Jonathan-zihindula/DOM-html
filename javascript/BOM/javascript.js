var para = document.querySelector('p');
var loc = navigator.geolocation;
(function(){
    if (loc){
        loc.getCurrentPosition(coordonnes);
    }
    else {
        para.innerHTML = 'localisation non disponible ';
    }
})();
function coordonnes(x){
    para.innerHTML = 
    'latitude: ' + x.coords.latitude +
    '<br>Longitude : ' + x.coords.longitude;
}
