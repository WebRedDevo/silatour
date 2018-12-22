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
