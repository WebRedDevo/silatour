// yandex map
function createYandexMap(){
  var section = document.createElement('section');
  var h2 = document.createElement('h2');
  var div = document.createElement('div');
  var title = document.querySelector('h1').innerHTML;
  section.className = 'section section--map';
  div.setAttribute('id','map');
  h2.innerHTML = title + ' на карте мира';

  document.querySelectorAll('section')[2].after(section);
  document.querySelector('.section--map').appendChild(h2);
  document.querySelector('.section--map h2').after(div);


    ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                controls: ['zoomControl','typeSelector','fullscreenControl'],
                zoom: 2
            });

            var isoCountry = document.querySelectorAll('.midle-side ul li')[3].querySelector('p').innerHTML
            console.log('properties.iso3166 = ' +  '"' + isoCountry + '"')
            ymaps.borders.load('001', {
    lang: 'ru',
    quality: 3
  }).then(function (geojson) {
    var regions = ymaps.geoQuery(geojson);
    var road = regions.search('properties.iso3166 = ' +  '"' + isoCountry + '"').setOptions({
          fillColor: '#262e4526',
          strokeColor: '#262e45'
      });
    road.addToMap(myMap);
  });

        }
}

// yandex share
function createSocialShare(where){
  var socialShare = document.createElement('div');
  socialShare.className = 'social-share';
  document.querySelector(where).after(socialShare);
}

function socialButtons(){
  var myShare = document.querySelector('.social-share');
  var share = Ya.share2(myShare, {
      content: {
          url: window.location,
          title: document.querySelector('h1').innerHTML,
          // description: document.querySelector('.fullstory__content p').innerHTML,
          // image: document.querySelector('.initial-screen img').src
      },
      theme: {
        counter: true,
        services: 'vkontakte,facebook,twitter,odnoklassniki',
        bare: false
      }

  });
}
if(document.querySelector('.fullstory')){
  createSocialShare('h1');
  socialButtons();
}

if(document.querySelector('.country-page')){
  createSocialShare('.initial-screen__info .buttons');
  socialButtons();

  createYandexMap();
}
