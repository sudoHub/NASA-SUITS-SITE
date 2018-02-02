var wrapperMenu = document.querySelector('.wrapper-menu');
var navBar = document.querySelector('.navbar-collapse');
var menuBtn = document.querySelector('.navbar-toggler');

menuBtn.addEventListener('click', function(){
  if(navBar.className !== "navbar-collapse collapsing"){
    wrapperMenu.classList.toggle('open');
  }
})
