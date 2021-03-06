"use strict";
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
} // удаляет секцию, если она пустая


if (document.querySelector('.section--articles')) {
  if (document.querySelectorAll('.section--articles')[0].querySelector('article') === null) {
    document.querySelectorAll('.section--articles')[0].remove();
  }
}

if (document.querySelector('.section--articles')) {
  if (document.querySelectorAll('.section--articles')[2].querySelector('article') === null) {
    document.querySelectorAll('.section--articles')[2].remove();
  }
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
  }

  if (scrolled > 100) {
    document.querySelector('.header').style.position = 'fixed';
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

// yandex map
function createYandexMap() {
  var section = document.createElement('section');
  var h2 = document.createElement('h2');
  var div = document.createElement('div');
  var title = document.querySelector('h1').innerHTML;
  section.className = 'section section--map';
  div.setAttribute('id', 'map');
  h2.innerHTML = title + ' на карте мира';
  document.querySelectorAll('section')[2].after(section);
  document.querySelector('.section--map').appendChild(h2);
  document.querySelector('.section--map h2').after(div);
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      controls: ['zoomControl', 'typeSelector', 'fullscreenControl'],
      zoom: 2
    });
    var isoCountry = document.querySelectorAll('.midle-side ul li')[3].querySelector('p').innerHTML;
    console.log('properties.iso3166 = ' + '"' + isoCountry + '"');
    ymaps.borders.load('001', {
      lang: 'ru',
      quality: 3
    }).then(function (geojson) {
      var regions = ymaps.geoQuery(geojson);
      var road = regions.search('properties.iso3166 = ' + '"' + isoCountry + '"').setOptions({
        fillColor: '#262e4526',
        strokeColor: '#262e45'
      });
      road.addToMap(myMap);
    });
  }
} // yandex share


function createSocialShare(where) {
  var socialShare = document.createElement('div');
  socialShare.className = 'social-share';
  document.querySelector(where).after(socialShare);
}

function socialButtons() {
  var myShare = document.querySelector('.social-share');
  var share = Ya.share2(myShare, {
    content: {
      url: window.location,
      title: document.querySelector('h1').innerHTML // description: document.querySelector('.fullstory__content p').innerHTML,
      // image: document.querySelector('.initial-screen img').src

    },
    theme: {
      counter: true,
      services: 'vkontakte,facebook,twitter,odnoklassniki',
      bare: false
    }
  });
}

if (document.querySelector('.fullstory')) {
  createSocialShare('h1');
  socialButtons();
}

if (document.querySelector('.country-page')) {
  createSocialShare('.initial-screen__info .buttons');
  socialButtons();
  createYandexMap();
}
"use strict";

// replace speedbars into blocks for pages
var speedbar = document.querySelector('.speedbar'),
    countrypPage = document.querySelector('.main .country-page'),
    fullStory = document.querySelector('.fullstory'),
    videoPage = document.querySelector('.video-page '),
    travelTipPage = document.querySelector('.travel-tip-page');
if (travelTipPage) document.querySelector('.initial-screen__info').appendChild(speedbar);
if (videoPage) document.querySelector('.video-info').appendChild(speedbar);
if (fullStory) document.querySelector('.initial-screen__info').appendChild(speedbar);

if (countrypPage) {
  var miniInfo = document.querySelector('.mini-info');
  document.querySelector('.initial-screen').appendChild(speedbar);
}

if (document.querySelector('.category--country')) {
  document.querySelector('.info').appendChild(speedbar);
}

if (document.querySelector('.category--journal')) {
  document.querySelector('.info').appendChild(speedbar);
}

if (document.querySelector('.main__posts')) {
  document.querySelector('.main__posts-content p').after(speedbar);
  document.querySelector('.header').classList.remove('white');
}

if (document.querySelector('.page__documents')) {
  document.querySelector('.page-text h1').before(speedbar);
  document.querySelector('.header').classList.remove('white');
}

if (document.querySelector('.category--reference-guide')) {
  document.querySelector('.ref-guide__page h1').before(speedbar);
  document.querySelector('.header').classList.remove('white');
}
"use strict";

//checkbox Light Mode
(function () {
  var timus = new Date(),
      timusHour = timus.getHours(),
      lightMode = document.getElementById('light-mode');
  lightMode.addEventListener('change', function () {
    if (lightMode.checked === true) {
      localStorage.setItem('lightMode', 'on');
      document.querySelector('html').classList.add('night');
    } else {
      localStorage.setItem('lightMode', 'off');
      document.querySelector('html').classList.remove('night');
    }
  });

  if (localStorage.getItem('lightMode') === 'on') {
    lightMode.checked = true;
    document.querySelector('html').classList.add('night');
  } else {
    document.querySelector('html').classList.remove('night');
  }

  if (timusHour < 8 || timusHour > 22) {
    lightMode.checked = true;
    document.querySelector('html').classList.add('night');
  } else {
    document.querySelector('html').classList.remove('night');
  }
})();
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