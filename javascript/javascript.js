var title = document.getElementById('gros_titre');
var parent = document.body;
var newTitle = document.createElement('h2');
newTitle.id = 'medium_title';
newTitle.innerHTML = 'title amended in JS';

parent.replaceChild(newTitle,title);