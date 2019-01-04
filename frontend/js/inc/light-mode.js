//checkbox Light Mode
(function(){
  var
    timus = new Date(),
    timusHour = timus.getHours(),
    lightMode = document.getElementById('light-mode');
    console.log(timus)
  lightMode.addEventListener('change', function (){
    if(lightMode.checked === true){
      localStorage.setItem('lightMode','on');
      document.querySelector('html').classList.add('night');
    }else{
      localStorage.setItem('lightMode','off');
      document.querySelector('html').classList.remove('night');
    }
  });

  if(localStorage.getItem('lightMode') === 'on'){
    lightMode.checked = true;
    document.querySelector('html').classList.add('night');
  }else{
    document.querySelector('html').classList.remove('night');
  }

  if(timusHour < 8 || timusHour > 22){
    lightMode.checked = true;
    document.querySelector('html').classList.add('night');
  }else{
    document.querySelector('html').classList.remove('night');
  }
}())
