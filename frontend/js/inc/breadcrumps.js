// replace speedbars into blocks for pages
var
  speedbar = document.querySelector('.speedbar'),
  countrypPage = document.querySelector('.main .country-page'),
  fullStory = document.querySelector('.fullstory'),
  videoPage = document.querySelector('.video-page '),
  travelTipPage = document.querySelector('.travel-tip-page');

if (travelTipPage !== null) document.querySelector('.initial-screen__info').appendChild(speedbar);

if(videoPage !== null) document.querySelector('.video-info').appendChild(speedbar);

if(fullStory !== null) document.querySelector('.initial-screen__info').appendChild(speedbar);

if(countrypPage!== null){
  var miniInfo = document.querySelector('.mini-info');
  document.querySelector('.initial-screen').appendChild(speedbar);
}

if(document.getElementsByClassName('category')[0] !== null){
  document.getElementsByClassName('info')[0].appendChild(speedbar)
}
