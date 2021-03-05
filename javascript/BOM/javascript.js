var hauteur = screen.height;
var hauteurDispo = screen.availHeight;
var reso = screen.pixelDepth;

var para = document.querySelector('p');
para.innerHTML =
        'hauteur de l\'ecrcan ' + hauteur + 
         '<br>Hauteur disponible ' + hauteurDispo + 
         '<br>Resolution de l\'ecran : ' + reso + 'bits/px';