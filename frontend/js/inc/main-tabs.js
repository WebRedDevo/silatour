let mainTabs = document.querySelectorAll('.aside-list__item')[0];

if (mainTabs !== undefined){
  document.querySelector('html').classList.remove('night');
  document.querySelectorAll('.aside-list__item')[0].addEventListener('click', function(){
    document.querySelectorAll('.main-initial__tab')[0].classList.add('active')
    document.querySelectorAll('.main-initial__tab')[1].classList.remove('active')
    document.querySelectorAll('.main-initial__tab')[2].classList.remove('active')
    document.querySelectorAll('.aside-list__item')[0].classList.add('active')
    document.querySelectorAll('.aside-list__item')[1].classList.remove('active')
    document.querySelectorAll('.aside-list__item')[2].classList.remove('active')
    document.querySelectorAll('.aside-list__item')[0].classList.remove('white')
    document.querySelectorAll('.aside-list__item')[1].classList.remove('white')
    document.querySelectorAll('.aside-list__item')[2].classList.remove('white')
    document.querySelector('html').classList.remove('night');
    document.querySelector('header').classList.remove('fixed');
  })
  document.querySelectorAll('.aside-list__item')[1].addEventListener('click', function(){
    document.querySelectorAll('.main-initial__tab')[0].classList.remove('active')
    document.querySelectorAll('.main-initial__tab')[1].classList.add('active')
    document.querySelectorAll('.main-initial__tab')[2].classList.remove('active')
    document.querySelectorAll('.aside-list__item')[0].classList.remove('active')
    document.querySelectorAll('.aside-list__item')[1].classList.add('active')
    document.querySelectorAll('.aside-list__item')[2].classList.remove('active')
    document.querySelectorAll('.aside-list__item')[0].classList.remove('white')
    document.querySelectorAll('.aside-list__item')[1].classList.add('white')
    document.querySelectorAll('.aside-list__item')[2].classList.remove('white')
    document.querySelector('html').classList.add('night');
    document.querySelector('header').classList.remove('fixed');
  })
  document.querySelectorAll('.aside-list__item')[2].addEventListener('click', function(){
    document.querySelectorAll('.main-initial__tab')[0].classList.remove('active')
    document.querySelectorAll('.main-initial__tab')[1].classList.remove('active')
    document.querySelectorAll('.main-initial__tab')[2].classList.add('active')
    document.querySelectorAll('.aside-list__item')[0].classList.remove('active')
    document.querySelectorAll('.aside-list__item')[1].classList.remove('active')
    document.querySelectorAll('.aside-list__item')[2].classList.add('active')
    document.querySelectorAll('.aside-list__item')[0].classList.remove('white')
    document.querySelectorAll('.aside-list__item')[1].classList.remove('white')
    document.querySelectorAll('.aside-list__item')[2].classList.remove('white')
    document.querySelector('html').classList.remove('night');
    document.querySelector('header').classList.add('fixed');
  })
}
