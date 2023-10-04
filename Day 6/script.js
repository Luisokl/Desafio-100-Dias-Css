let main = document.querySelector('.center');
let menu = document.querySelector('.menu');
let menuIcon = document.querySelector('.menuIcon');
let searchIcon = document.querySelector('.searchIcon');
let searchInput = document.querySelector('.search');

let menuOpen = false;

menuIcon.addEventListener('click', () => {
  if(menuOpen) {
    main.classList.add('show-menu');
    menu.classList.add('active');
    menuOpen = false;
  } else {
    main.classList.remove('show-menu');
    menu.classList.remove('active');
    menuOpen = true;
  }
})

let click = true;

searchIcon.addEventListener('click', () =>{
  if(click) {
    searchInput.classList.add('active');
    click = false;
  } else {
    searchInput.classList.remove('active');
    click = true;
  }
});