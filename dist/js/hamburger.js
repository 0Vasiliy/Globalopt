document.addEventListener('DOMContentLoaded',function(){
    //hamburger
     const menuElem = document.querySelector('.menu-hamburger'),
            burgerElem = document.querySelector('.hamburger');
      // Сокрытие элементов
      menuElem.style.display = 'none';
  
      burgerElem.addEventListener('click', (e) => {
              //Если меню скрыто то мы его показываем 
              burgerElem.classList.add('hamburger_active');
              e.preventDefault();
          if (menuElem.style.display == "none" && window.screen.availWidth < 768) {
              menuElem.style.display = 'block';  
          } else {
              //Если меню показано то мы его скрываем
              menuElem.style.display = 'none';
              burgerElem.classList.remove('hamburger_active');
          }
      });
      mdClose.addEventListener('click',(e) => {
        mdClose.classList.remove('active');
        over.classList.remove('active'); 
      })
})  