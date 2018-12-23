"use strict";

var heightInitialScreen = document.querySelector('.initial-screen').offsetHeight,
    html = document.documentElement;

if (typeof fullContent !== 'undefined') {
  var articleContentScroll = function articleContentScroll() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled <= heightInitialScreen) {
      _fullContent.style.transform = 'translateY(' + -scrolled + 'px)';
      document.querySelector('.fullstory__left-side .wrap').style.transform = 'translateY(' + -scrolled + 'px)';
    }
  };

  var expandClick = function expandClick() {
    fullScreen(html);
  };

  var fullScreen = function fullScreen(element) {
    if (element.requestFullScreen) {
      element.requestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    }
  };

  var fullScreenCancel = function fullScreenCancel() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  var _fullContent = document.querySelector('.full-content');

  _fullContent.style.transform = 'translateY(' + -heightInitialScreen + 'px)';
  _fullContent.style.marginBottom = -heightInitialScreen + 'px';
  document.querySelector('.fullstory__left-side .wrap').style.transform = 'translateY(' + -heightInitialScreen + 'px)'; // Прокручиваемый контент в статье

  window.addEventListener('scroll', articleContentScroll);
  articleContentScroll();
  document.getElementsByClassName('expand')[0].addEventListener('click', expandClick);
  document.getElementsByClassName('close')[0].addEventListener('click', fullScreenCancel);
}
"use strict";

if (document.querySelector('.close') !== null) {
  document.querySelector('.close').addEventListener('click', function () {
    history.back();
    ajax.open('GET', location.href, false);
    ajax.send(); // саксес распарс и пиас

    if (ajax.readyState == 4 && ajax.status == 200) {
      var doc = new DOMParser().parseFromString(ajax.responseText, "text/html");
      containerMain.classList.add('category');
      containerMain.classList.add('category--country');
      containerMain.innerHTML = doc.querySelector('.main').innerHTML;
      xeros();
    }
  });
}

document.querySelector('html').classList.add('night');
var lastScrolled = 0;

window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if (lastScrolled > scrolled) {
    document.querySelector('.header').classList.add('fixed');
    document.querySelector('.header').style.transform = 'translateY(0px)';
    if (document.querySelector('.aside') !== null) document.querySelector('.aside').style.top = '60px';
  }

  if (lastScrolled < scrolled) {
    document.querySelector('.header').style.transform = 'translateY(-60px)';
    document.querySelector('.header').classList.remove('fixed');
    if (document.querySelector('.aside') !== null) document.querySelector('.aside').style.top = '0px';
  }

  if (scrolled < 100) {
    document.querySelector('.header').style.position = 'absolute';
    document.querySelector('.header').classList.remove('fixed');
    document.querySelector('html').classList.add('night');
  }

  if (scrolled > 100) {
    document.querySelector('.header').style.position = 'fixed';
    document.querySelector('html').classList.remove('night');
  }

  lastScrolled = scrolled;
};
"use strict";

document.querySelector('.header').classList.add('white');
// // ajax web page rest in peace
// var ajax = new XMLHttpRequest();
// var containerMain = document.querySelector('.main');
// function xeros(){
//
//   if(document.querySelector('.article-short-guidebook') !== null){
//     var articleShortGuidebook = document.querySelectorAll('.article-short-guidebook');
//     var ajaxik = function(){
//       var articleShortGuidebook = document.querySelectorAll('.article-short-guidebook');
//       ajax.open('GET', this.getElementsByTagName('a')[0].href ,false);
//       ajax.send();
//
//       // саксес распарс и пиас
//       if(ajax.readyState == 4 && ajax.status == 200){
//         var doc = new DOMParser().parseFromString(ajax.responseText, "text/html");
//         var locationHref = location.href;
//         history.pushState(null,this.getElementsByTagName('h3')[0].innerHTML, this.getElementsByTagName('a')[0].href);
//         window.scrollTo(0,0);
//         containerMain.classList.remove('category');
//         containerMain.classList.remove('category--country');
//         containerMain.innerHTML = doc.querySelector('.main').innerHTML;
//
//         // обработка действий страны
//         if(document.querySelector('.main .country-page') !== null ){
//           var miniInfo = document.querySelector('.mini-info');
//           var speedbar = document.querySelector('.speedbar');
//           document.querySelector('.initial-screen__info').insertBefore(speedbar, miniInfo );
//
//           document.querySelector('.close').addEventListener('click', function(){
//
//
//
//             ajax.open('GET', locationHref ,false);
//             ajax.send();
//             // саксес распарс и пиас
//             if(ajax.readyState == 4 && ajax.status == 200){
//
//               var doc = new DOMParser().parseFromString(ajax.responseText, "text/html");
//               containerMain.classList.add('category');
//               containerMain.classList.add('category--country');
//               history.back();
//               containerMain.innerHTML = doc.querySelector('.main').innerHTML;
//
//               xeros();
//             }
//           })
//         }
//       }
//     };
//     for(var i = articleShortGuidebook.length; i--;){
//       articleShortGuidebook[i].addEventListener('click', ajaxik)
//     }
//
//   }
//
// }
// xeros();
"use strict";
"use strict";

// replace speedbars into blocks for pages
var speedbar = document.querySelector('.speedbar'),
    countrypPage = document.querySelector('.main .country-page'),
    fullStory = document.querySelector('.fullstory'),
    videoPage = document.querySelector('.video-page '),
    travelTipPage = document.querySelector('.travel-tip-page');
if (travelTipPage !== null) document.querySelector('.initial-screen__info').appendChild(speedbar);
if (videoPage !== null) document.querySelector('.video-info').appendChild(speedbar);
if (fullStory !== null) document.querySelector('.initial-screen__info').appendChild(speedbar);

if (countrypPage !== null) {
  var miniInfo = document.querySelector('.mini-info');
  document.querySelector('.initial-screen').appendChild(speedbar);
}
// checkbox Light Mode
// let lightMode = document.getElementById('light-mode');
//
// lightMode.addEventListener('change', function (){
//   if(lightMode.checked === true){
//     localStorage.setItem('lightMode','on');
//     document.querySelector('html').classList.add('night');
//   }else{
//     localStorage.setItem('lightMode','off');
//     document.querySelector('html').classList.remove('night');
//   }
// });
//
// if(localStorage.getItem('lightMode') === 'on'){
//   lightMode.checked = true;
//   document.querySelector('html').classList.add('night');
// }else{
//   document.querySelector('html').classList.remove('night');
// }
"use strict";
"use strict";

var mainTabs = document.querySelectorAll('.aside-list__item')[0];

if (mainTabs !== undefined) {
  document.querySelector('html').classList.remove('night');
  document.querySelectorAll('.aside-list__item')[0].addEventListener('click', function () {
    document.querySelectorAll('.main-initial__tab')[0].classList.add('active');
    document.querySelectorAll('.main-initial__tab')[1].classList.remove('active');
    document.querySelectorAll('.main-initial__tab')[2].classList.remove('active');
    document.querySelectorAll('.aside-list__item')[0].classList.add('active');
    document.querySelectorAll('.aside-list__item')[1].classList.remove('active');
    document.querySelectorAll('.aside-list__item')[2].classList.remove('active');
    document.querySelectorAll('.aside-list__item')[0].classList.remove('white');
    document.querySelectorAll('.aside-list__item')[1].classList.remove('white');
    document.querySelectorAll('.aside-list__item')[2].classList.remove('white');
    document.querySelector('html').classList.remove('night');
  });
  document.querySelectorAll('.aside-list__item')[1].addEventListener('click', function () {
    document.querySelectorAll('.main-initial__tab')[0].classList.remove('active');
    document.querySelectorAll('.main-initial__tab')[1].classList.add('active');
    document.querySelectorAll('.main-initial__tab')[2].classList.remove('active');
    document.querySelectorAll('.aside-list__item')[0].classList.remove('active');
    document.querySelectorAll('.aside-list__item')[1].classList.add('active');
    document.querySelectorAll('.aside-list__item')[2].classList.remove('active');
    document.querySelectorAll('.aside-list__item')[0].classList.remove('white');
    document.querySelectorAll('.aside-list__item')[1].classList.add('white');
    document.querySelectorAll('.aside-list__item')[2].classList.remove('white');
    document.querySelector('html').classList.add('night');
  });
  document.querySelectorAll('.aside-list__item')[2].addEventListener('click', function () {
    document.querySelectorAll('.main-initial__tab')[0].classList.remove('active');
    document.querySelectorAll('.main-initial__tab')[1].classList.remove('active');
    document.querySelectorAll('.main-initial__tab')[2].classList.add('active');
    document.querySelectorAll('.aside-list__item')[0].classList.remove('active');
    document.querySelectorAll('.aside-list__item')[1].classList.remove('active');
    document.querySelectorAll('.aside-list__item')[2].classList.add('active');
    document.querySelectorAll('.aside-list__item')[0].classList.remove('white');
    document.querySelectorAll('.aside-list__item')[1].classList.remove('white');
    document.querySelectorAll('.aside-list__item')[2].classList.remove('white');
    document.querySelector('html').classList.remove('night');
  });
  document.querySelectorAll('.main-initial__tab')[0].classList.remove('active');
  document.querySelectorAll('.main-initial__tab')[1].classList.remove('active');
  document.querySelectorAll('.main-initial__tab')[2].classList.add('active');
  document.querySelectorAll('.aside-list__item')[0].classList.remove('active');
  document.querySelectorAll('.aside-list__item')[1].classList.remove('active');
  document.querySelectorAll('.aside-list__item')[2].classList.add('active');
  document.querySelectorAll('.aside-list__item')[0].classList.remove('white');
  document.querySelectorAll('.aside-list__item')[1].classList.remove('white');
  document.querySelectorAll('.aside-list__item')[2].classList.remove('white');
  document.querySelector('html').classList.remove('night');
}
"use strict";

;

(function (window, document) {
  // /templates/silatour-beta-1-0/images/svg/sprite.svg
  var file = 'images/svg/sprite.svg',
      revision = 1;
  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;

  var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
      request,
      data,
      insertIT = function insertIT() {
    document.body.insertAdjacentHTML('afterbegin', data);
  },
      insert = function insert() {
    if (document.body) insertIT();else document.addEventListener('DOMContentLoaded', insertIT);
  };

  if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
    data = localStorage.getItem('inlineSVGdata');

    if (data) {
      insert();
      return true;
    }
  }

  try {
    request = new XMLHttpRequest();
    request.open('GET', file, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();

        if (isLocalStorage) {
          localStorage.setItem('inlineSVGdata', data);
          localStorage.setItem('inlineSVGrev', revision);
        }
      }
    };

    request.send();
  } catch (e) {}
})(window, document);