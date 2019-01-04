// replace speedbars into blocks for pages
var
  speedbar = document.querySelector('.speedbar'),
  countrypPage = document.querySelector('.main .country-page'),
  fullStory = document.querySelector('.fullstory'),
  videoPage = document.querySelector('.video-page '),
  travelTipPage = document.querySelector('.travel-tip-page');

if (travelTipPage) document.querySelector('.initial-screen__info').appendChild(speedbar);

if(videoPage) document.querySelector('.video-info').appendChild(speedbar);

if(fullStory) document.querySelector('.initial-screen__info').appendChild(speedbar);

if(countrypPage){
  var miniInfo = document.querySelector('.mini-info');
  document.querySelector('.initial-screen').appendChild(speedbar);
}

if(document.querySelector('.category--country')){
  document.querySelector('.info').appendChild(speedbar);
}

if(document.querySelector('.category--journal')){
  document.querySelector('.info').appendChild(speedbar);
}
if(document.querySelector('.main__posts')){
  document.querySelector('.main__posts-content p').after(speedbar);
}
