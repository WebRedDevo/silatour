// ajax web page rest in peace

var ajax = new XMLHttpRequest();

if(document.querySelector('.article-short-guidebook') !== null){
  var articleShortGuidebook = document.querySelectorAll('.article-short-guidebook');


    for(var i = articleShortGuidebook.length; i--;){
      articleShortGuidebook[i].addEventListener('click', clickAjax)
    }

  function clickAjax(){
    window.scrollTo(0,0);
    history.pushState(null,this.getElementsByTagName('h3')[0].innerHTML, this.getElementsByTagName('a')[0].href);

    document.querySelector('.main').classList.remove('category');
    document.querySelector('.main').classList.remove('category--country');

    ajax.open('GET', this.getElementsByTagName('a')[0].href ,false);
    ajax.send();

    // саксес распарс и пиас
    if(ajax.readyState == 4 && ajax.status == 200){

      var doc = new DOMParser().parseFromString(ajax.responseText, "text/html");

      document.querySelector('.main').innerHTML = doc.querySelector('.main').innerHTML;

      if(document.querySelector('.main .country-page') !== null ){

        var miniInfo = document.querySelector('.mini-info');
        var speedbar = document.querySelector('.speedbar');
        document.querySelector('.initial-screen__info').insertBefore(speedbar, miniInfo );
        document.querySelector('.close').addEventListener('click', function(){
          history.back();
        })

      }
    }
  }
}
