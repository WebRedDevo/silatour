if(document.querySelector('.close') !== null){

  document.querySelector('.close').addEventListener('click', function(){

    history.back();
    ajax.open('GET', location.href ,false);
    ajax.send();
    // саксес распарс и пиас
    if(ajax.readyState == 4 && ajax.status == 200){

      var doc = new DOMParser().parseFromString(ajax.responseText, "text/html");
      containerMain.classList.add('category');
      containerMain.classList.add('category--country');
      containerMain.innerHTML = doc.querySelector('.main').innerHTML;
      xeros();
    }

  })
}
