
/*
  Reference: https://css-tricks.com/restart-css-animation/
*/

element = document.getElementById("start-button");
element2 = document.getElementById("startmenu");
element3 = document.getElementById("startmenu-backgronud");

element.addEventListener("click", function(e) {
  document.getElementById("startmenu").style.display='flex';
  document.getElementById("startmenu-backgronud").style.display='block';
  element2.classList.remove("scale-in-bl");
  element2.offsetWidth = element.offsetWidth;
  element2.classList.add("scale-in-bl");
}, false);

element3.addEventListener("click", function(e) {
  document.getElementById("startmenu").style.display='none';
  document.getElementById("startmenu-backgronud").style.display='none';
  element2.classList.remove("scale-in-bl");
  element2.offsetWidth = element.offsetWidth;
  element2.classList.add("scale-in-bl");
}, false);
