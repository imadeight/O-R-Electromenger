/*** Navbar behavior when scrolling ***/
window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
  var logo = document.querySelector('.logo');
  logo.style.display = 'none';
  var telsticky = document.querySelector('.telNavbarSticky');
  telsticky.style.display = 'inherit';
  var top  = window.pageYOffset || document.documentElement.scrollTop;
  if (top == 0){
    logo.style.display = 'inherit';
    telsticky.style.display = 'none';
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
  var origineTxt = "<span class='text' ><b style='color:#4dcaff; font-size:1.4em;'>AM faitout</b> est une entreprise spécialisée dans plusieurs domaines tels que : <b>dépannage électroménager, travaux de rénovation intérieure, aménagement et décoration jardins, travaux d'électricité </b>ainsi que des travaux de <b>plomberie</b>.<br> </span >";
  var slogan = "Redonnez vie aux choses qui vous tiennent à coeur";
  const text = document.querySelector('.text');
  const sl = document.querySelector('.highlightTxt');
  text.innerHTML = origineTxt;
  sl.innerHTML = slogan;
}

function bioTxt(){
  var bioTxt = 'En choisissant de réparer votre appareil, vous participez activement à la préservation des ressources naturels de la planet. Notre mission : vous faire adopter le réflexe de réparer avant de jeter !';
  var bioSlogan = "Réparer, Rénover et Décorer";
  const text = document.querySelector('.text');
  const sl = document.querySelector('.highlightTxt');
  text.innerHTML = bioTxt;
  sl.innerHTML = bioSlogan;
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

/*** Box bigOnHover in services section for big screen***/
function bigOnHover1(){
  var bigBox = document.querySelector('#box1');
  bigBox.classList.toggle('bigger');
  var bigTxt = document.querySelector('#bigBoxTxt1');
  bigTxt.style.display = 'block';
  var pTagToHide = document.querySelector('#pTagToHide1');
  pTagToHide.style.display = 'none';
  if(!bigBox.className.includes('bigger')){
    bigTxt.style.display = 'none';
    pTagToHide.style.display = 'block';
  }

  console.log(bigTxt);
}
function bigOnHover2(){
  var bigBox = document.querySelector('#box2');
  //var navigation = document.querySelector('.navigation');
  bigBox.classList.toggle('bigger');
  //navigation.classList.toggle('active');
  var pTagToHide = document.querySelector('#pTagToHide2');
  pTagToHide.style.display = 'none';
  var bigTxt = document.querySelector('#bigBoxTxt2');
  bigTxt.style.display = 'block';

  if(!bigBox.className.includes('bigger')){
    bigTxt.style.display = 'none';
    pTagToHide.style.display = 'block';
  }

  console.log(bigTxt);
}
function bigOnHover3(){
  var bigBox = document.querySelector('#box3');
  //var navigation = document.querySelector('.navigation');
  bigBox.classList.toggle('bigger');
  //navigation.classList.toggle('active');
  var bigTxt = document.querySelector('#bigBoxTxt3');
  bigTxt.style.display = 'block';
  var pTagToHide = document.querySelector('#pTagToHide3');
  pTagToHide.style.display = 'none';
  if(!bigBox.className.includes('bigger')){
    bigTxt.style.display = 'none';
    pTagToHide.style.display = 'block';
  }

  console.log(bigTxt);
}
function bigOnHover4(){
  var bigBox = document.querySelector('#box4');
  //var navigation = document.querySelector('.navigation');
  bigBox.classList.toggle('bigger');
  //navigation.classList.toggle('active');
  var bigTxt = document.querySelector('#bigBoxTxt4');
  bigTxt.style.display = 'block';
  var pTagToHide = document.querySelector('#pTagToHide4');
  pTagToHide.style.display = 'none';
  if(!bigBox.className.includes('bigger')){
    bigTxt.style.display = 'none';
    pTagToHide.style.display = 'block';
  }
}
function bigOnHover5(){
  var bigBox = document.querySelector('#box5');
  //var navigation = document.querySelector('.navigation');
  bigBox.classList.toggle('bigger');
  //navigation.classList.toggle('active');
  var bigTxt = document.querySelector('#bigBoxTxt5');
  bigTxt.style.display = 'block';
  var pTagToHide = document.querySelector('#pTagToHide5');
  pTagToHide.style.display = 'none';
  if(!bigBox.className.includes('bigger')){
    bigTxt.style.display = 'none';
    pTagToHide.style.display = 'block';
  }
}

/** script to make a twisted txt for the footer logo **/
const logoText = document.querySelector('.circleFooterTxt p');
logoText.innerHTML = logoText.innerText.split("").map(
  (char, i) =>
`<span style="transform:rotate(${i * 9.6}deg)">${char}</span>`).join("");

 /**  popupGiveAway toggle function **/
 /**
 function popupGiveAwayToggle(){
   const popup = document.getElementById('popupGiveAway');
   popup.classList.toggle('active');
 }*/
