var p2 = document.querySelectorAll('.para')[1];
var first = p2.firstChild;
var last = p2.lastChild;
var inner1 = first.nodeValue;
var inner2 = last.innerHTML;

alert('the content of first child : ' + inner1 + 
        '\nthe content of last child : ' + inner2);
