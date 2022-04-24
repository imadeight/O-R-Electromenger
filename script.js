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
  var origineTxt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';
  const text = document.querySelector('.text');
  text.innerHTML = origineTxt;
}

function bioTxt(){
  var bioTxt = 'En choisissant de réparer votre appareil, vous participez activement à la préservation des ressources naturels de la planet. ';
  const text = document.querySelector('.text');
  text.innerHTML = bioTxt;
}


function toggleMenu(){
  var menuToggle = document.querySelector('.toggle');
  var navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
