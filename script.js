/*** Navbar behavior when scrolling ***/
window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
  var logo = document.querySelector('.logo');
  logo.style.display = 'none';
  var top  = window.pageYOffset || document.documentElement.scrollTop;
  if (top == 0){
    logo.style.display = 'inherit';
  }
})

/*** navbar active links***/
var navContainer = document.querySelectorAll(".navigation li a");
var length = navContainer.length;
for(var i=0; i<length; i++) {
    navContainer[i].addEventListener("click", function() {
        highlight(this);
    });
}

function highlight(element) {
    for(var i=0; i<length; i++) {
       navContainer[i].classList.remove("highlight");
    }

    element.classList.add("highlight");
}


/*** home img ***/
function imgSlider(anything){
  document.querySelector('.imgMLaver').src = anything;
}


function changeColor(color){
  const circle = document.querySelector('.circle');
  const btnLearnMore = document.querySelector('.btnLearnMore');
  const highlightTxt = document.querySelector('.highlightTxt');
  circle.style.background = color;
  btnLearnMore.style.background = color;
  highlightTxt.style.color = color;
}

function originalTxt(){
  var origineTxt = "AM-Faitout est spécialisé  dans le domaine du dépannage et des petits travaux, quelque soit la nature de votre besoin. de la réparation de toutes sorte d'appareils électroménagers, des travaux de plomberie, électrecité, aménagement et rénovation d'intérieur et aménagement de jardin. ";
  const text = document.querySelector('.text');
  text.innerHTML = origineTxt;
}

function bioTxt(){
  var bioTxt = 'En choisissant de réparer votre appareil, vous participez activement à la préservation des ressources naturels de la planet. ';
  const text = document.querySelector('.text');
  text.innerHTML = bioTxt;
}

/*** navbar small screen ***/
function toggleMenu(){
  var menuToggle = document.querySelector('.toggle');
  var navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
function closeMenu(){
  var menuToggle = document.querySelector('.toggle');
  var navigation = document.querySelector('.navigation');
  menuToggle.classList.remove('active');
  navigation.classList.remove('active');
}
