'use strict';
var
  heightInitialScreen = document.querySelector('.initial-screen').offsetHeight ,
  fullContent = document.querySelector('.full-content'),
  html = document.documentElement;


document.getElementsByClassName('article-short-guidebook')[0].addEventListener('click', ggggg)

function ggggg(){

fetch('http://localhost:3000/country-page.html')
  .then(res => res.json())
  .then(posts => console.log(posts))



fullContent.style.transform = 'translateY(' + -heightInitialScreen + 'px)'
fullContent.style.marginBottom = -heightInitialScreen + 'px'
document.querySelector('.fullstory__left-side .wrap').style.transform = 'translateY(' + -heightInitialScreen + 'px)'

// Прокручиваемый контент в статье
window.addEventListener('scroll', articleContentScroll);
function articleContentScroll() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled <= heightInitialScreen){
    fullContent.style.transform = 'translateY(' + -scrolled + 'px)'
    document.querySelector('.fullstory__left-side .wrap').style.transform = 'translateY(' + -scrolled + 'px)'
  }
}articleContentScroll();


document.getElementsByClassName('expand')[0].addEventListener('click', expandClick);
document.getElementsByClassName('close')[0].addEventListener('click', fullScreenCancel);

function expandClick(){
  fullScreen(html);
}


function fullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.webkitRequestFullScreen ) {
    element.webkitRequestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  }
}

function fullScreenCancel() {
	if (document.exitFullscreen) {
document.exitFullscreen();
	} else if (document.mozCancelFullScreen) {
document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
document.msExitFullscreen();
	}
}



console.log(fullContent.getElementsByClassName('quote').length)


// Переносим speedbar
document.querySelector('.fullstory__right-side .wrap .article-info').appendChild(document.querySelector('.speedbar'));
