
if(document.querySelector('.close') !== null){

  document.querySelector('.close').addEventListener('click', function(){

    history.back();
    ajax.open('GET', location.href ,false);
    ajax.send();
    // саксес распарс и пиас
    if(ajax.readyState == 4 && ajax.status == 200){

      var doc = new DOMParser().parseFromString(ajax.responseText, "text/html");
      containerMain.classList.add('category');
      containerMain.classList.add('category--country');
      containerMain.innerHTML = doc.querySelector('.main').innerHTML;
      xeros();
    }

  })
}

document.querySelector('html').classList.add('night');

var lastScrolled = 0;
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if( lastScrolled > scrolled ){
    document.querySelector('.header').classList.add('fixed');
    document.querySelector('.header').style.transform = 'translateY(0px)';
    if(document.querySelector('.aside') !== null)
    document.querySelector('.aside').style.top = '60px';
  }
  if(lastScrolled < scrolled){
    document.querySelector('.header').style.transform = 'translateY(-60px)';
    document.querySelector('.header').classList.remove('fixed');
    if(document.querySelector('.aside') !== null)
    document.querySelector('.aside').style.top = '0px';
  }
  if(scrolled < 100){
    document.querySelector('.header').style.position = 'absolute';
    document.querySelector('.header').classList.remove('fixed');

  }
  if(scrolled > 100){
    document.querySelector('.header').style.position = 'fixed';

  }

  lastScrolled = scrolled;
}
