// document.querySelector will return a single element that is the first in matching the criteria within the ()
var header = document.querySelector("#header");
header.textContent = "Hello World!";
// documents.querySelectorAll will return an array like data structure which contains all elements that match the criteria passed with the ()
var pStyles = document.querySelectorAll(".p-styles");

for (var x = 0; x < pStyles.length; x++) {
  pStyles[x].textContent = "I'm pStyles " + (x +1);
}
// change text for individual paragraphs
// pStyles[0].textContent = "yo im 1st"
// pStyles[1].textContent = "im 2nd"
// pStyles[2].textContent = "i i'm 3rd"
//

var list = document.querySelectorAll('  li');

for (var x = 0; x < list.length; x++){
  list[x].textContent = "I'm " + (x+1);
}
//=======================================
// Another way to select an element by its id is document.getElementById

document.getElementById('second-header').textContent = "Hello World 2"

var awesomes = document.getElementsByClassName("awesome");

for (var x = 0; x < awesomes.length; x++){
awesomes[x].textContent = "paragraph " + (x + 1);
}

var h3s = document.getElementsByTagName('h3');

for (var x = 0; x < h3s.length; x++){
  h3s[x].textContent = "I'm " + (x + 1);
}
