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
let navLinks = slctElems('.nav-link');
let subTitles = slctElems('.sub-title');


function handleLinkClicked(e){
  subTitles.forEach(title => {
    if(toggleNav && toggleNav.classList.contains('active')){
      toggleNav.click()
    }
    if(e.target.dataset.to === "home"){
      $([document.documentElement, document.body]).animate({
        scrollTop: 0
      }, 1000);
      return;
    }
    if(title.dataset.target === e.target.dataset.to){
      let elemClass = title.classList[1];
      $([document.documentElement, document.body]).animate({
        scrollTop: $("." + elemClass).offset().top - 70
      }, 1000);
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', handleLinkClicked)
});

window.addEventListener('scroll', handleScroll);
$(document).ready(function(){
  checkFavColor();
  handleScroll();
  $(".owl-carousel").owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    lazyLoad: true,
    autoplayTimeout: 4000,
    animateOut: 'fadeIn',
    autoplay: true,
    autoplayHoverPause: true,
    responsiveClass:true,
    stagePadding: 20,
    responsive:{
        0:{
            items:1,
            stagePadding: 10,
        },
        850:{
            items:2,
            stagePadding: 20

        },
        1100:{
            items:3,
            stagePadding: 20
        },
        1300:{
            items:4,
            stagePadding: 20
        }
    }
  });
});


// let start = title.offsetTop;
//
// if(title.offsetTop > document.documentElement.scrollTop){
//
//   let interval = setInterval(function () {
//     if(start > document.documentElement.scrollTop){
//       document.documentElement.scrollTop += start
//     } else{
//       clearInterval(interval)
//     }
//   }, 1000);
//
// } else{
//   let interval = setInterval(function () {
//
//     if(start <= document.documentElement.scrollTop){
//       document.documentElement.scrollTop -= start
//     } else{
//       clearInterval(interval)
//     }
//   }, 1000);
// }
