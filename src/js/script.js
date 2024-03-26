document.addEventListener('DOMContentLoaded',function(){

  //Scroll
  // const links = document.querySelectorAll('.menu-item');
  // for(let i = 0; i < links.length; i++){
  //   links[i].addEventListener('click',function(event){
  //     event.preventDefault();
  //     const blockID = event.target.getAttribute('href')
  //     document.getElementById(blockID).scrollIntoView({
  //         behavior: 'smooth',
  //         block : "start"
  //     })
  //   }) ;
  // } 
      
      //Modal
  let over = document.querySelector('.overlay');
  let mdClose = document.querySelector('.modal__close');
  let btnsubmit = document.getElementById('phone__btn');
  let btnheader = document.getElementById('header__btn');
  let btnmini = document.getElementById('btn_mini');
  let btnDeliv = document.querySelectorAll('.delivery__item-btn');
  

  for(let i = 0; i < btnDeliv.length; i++){
      btnDeliv[i].addEventListener('click',(e)=>{
      e.preventDefault();
      over.classList.add('active');
    })
  }
  
  btnsubmit.addEventListener('click',(e) => {
    e.preventDefault();
    over.classList.add('active');
  })

  btnheader.addEventListener('click',(e) => {
    e.preventDefault();
    over.classList.add('active');      
  })

  btnmini.addEventListener('click',(e) => {
    e.preventDefault();
    over.classList.add('active');
  })

  mdClose.addEventListener('click',(e) => {
    mdClose.classList.remove('active');
    over.classList.remove('active'); 
  })

  document.addEventListener('click',(e) => {
    if(e.target ===over){
      over.classList.remove('active');
    }
  })

      // Up button
  let upp = document.querySelector('.pageup');

  window.onscroll = function(){
    if(window.pageYOffset > 580){
      upp.style.display = "block"
    }
    else{
      upp.style.display ="none"
    }
  }

  upp.addEventListener('click',function(){
    window.scrollBy({
      top:-document.documentElement.scrollHeight,
      behavior: "smooth"
    })
  })

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

//menu scroll

let menPro = document.querySelectorAll('.menu__promo');
// let linkList = document.getElementById('menu-hamb');

window.onload=function(){    
  menuElem.addEventListener("click", close);
    menuElem.addEventListener("click", scroll);
}

function close(){
  menuElem.classList.remove('active');
}

function scroll(event){
    for(let i = 0; i < menPro.length; i++) {  
        const blockID = event.target.getAttribute('href')
        event.preventDefault(); 
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block : "start"
        })           
            };    
}

close();
scroll();

})  






