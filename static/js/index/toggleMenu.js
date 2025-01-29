/* переключатель меню на мобилах*/


function toggleMenu(){
    var menu = document.querySelector('.menu');
    var hideMenu = document.querySelector(".hide_menu");
    hideMenu.classList.toggle('show');
    menu.classList.toggle('show');
  }