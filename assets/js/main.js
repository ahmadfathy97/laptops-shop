let slctElem = (selector)=>{ return document.querySelector(selector)},
    slctElems = (selector)=>{ return document.querySelectorAll(selector)};

let toggleNav = slctElem('.toggle-nav');
function handleToggleNav() {
  if(this.classList.contains('active')){
    this.classList.remove('active')
    slctElem('.navbar-links').style.height= "0";
  } else{
    this.classList.add('active')
    slctElem('.navbar-links').style.height= "100vh";

  }
}
toggleNav.addEventListener('click', handleToggleNav)

function handleScroll() {
  if(document.documentElement.scrollTop > 150){
    slctElem('nav').style.background= 'rgba(0,0,0, .9)';
  } else{
    slctElem('nav').style.background= 'transparent';
  }
}
let root = document.documentElement;
let colorsContainer = slctElem('.colors');
let colors = slctElems('.color-item');
let openPallete = slctElem('.openPalette');
openPallete.addEventListener('click', function(){
  if(colorsContainer.classList.contains('show-palette')){
    colorsContainer.classList.remove('show-palette')
    this.textContent = '<'
  } else{
    colorsContainer.classList.add('show-palette')
    this.textContent= '>';
  }
})
colors.forEach(color =>{
  color.style.background = color.dataset.color;
  color.addEventListener("click", e => {
    window.localStorage.setItem('favColor', e.target.dataset.color);
    root.style.setProperty('--main-color', e.target.dataset.color);
  });
})

function checkFavColor() {
  if(localStorage && localStorage.getItem('favColor')){
    favColor = (localStorage.getItem('favColor'));
    root.style.setProperty('--main-color', favColor);
  }
}
window.addEventListener('scroll', handleScroll);
$(document).ready(function(){
  checkFavColor()
  $(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        850:{
            items:2
        },
        1200:{
            items:4
        }
    }
  });
});
