document.querySelectorAll('.aside-list__item')[0].addEventListener('click', function(){
  document.querySelectorAll('.main-initial__tab')[0].classList.toggle('active')
  document.querySelectorAll('.main-initial__tab')[1].classList.toggle('active')
  document.querySelectorAll('.aside-list__item')[0].classList.toggle('active')
  document.querySelectorAll('.aside-list__item')[1].classList.toggle('active')
})
document.querySelectorAll('.aside-list__item')[1].addEventListener('click', function(){
  document.querySelectorAll('.main-initial__tab')[0].classList.toggle('active')
  document.querySelectorAll('.main-initial__tab')[1].classList.toggle('active')
  document.querySelectorAll('.aside-list__item')[0].classList.toggle('active white')
  document.querySelectorAll('.aside-list__item')[1].classList.toggle('active white')
})
