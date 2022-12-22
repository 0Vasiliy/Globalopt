

//Scroll
document.addEventListener('DOMContentLoaded',function(){
  const links = document.querySelectorAll('.menu-item');
  for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click',function(event){
      event.preventDefault();
      const blockID = event.target.getAttribute('href')
      document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block : "start"
      })
    }) ;
  } 
      
      //Modal
  let over = document.querySelector('.overlay');
  let mdClose = document.querySelector('.modal__close');
  let btnsubmit = document.getElementById('phone__btn');
  let btnheader = document.getElementById('header__btn');
  let btnmini = document.getElementById('btn_mini');
  let btnDeliv = document.querySelectorAll('.del_item_btn');
  // let btnDeliv_2 = document.getElementById('delivery__item-btn_2');
  // let btnDeliv_3 = document.getElementById('delivery__item-btn_3');
  // let btnDeliv_4 = document.getElementById('delivery__item-btn_4');
  
  for(let i = 0; i < links.length; i++){
    btnDeliv[i].addEventListener('click',function(e){
      e.preventDefault();
      over.classList.add('show');
    })
  }
  // btnDeliv.forEach((button)=>{
  //   button.addEventListener('click',(e)=>{
  //     e.preventDefault();
  //     over.classList.add('active');
  //   })
  // })

  // btnDeliv_1.addEventListener('click',(e) => {
  //   e.preventDefault();
  //   over.classList.add('active');
  // })
  // btnDeliv_2.addEventListener('click',(e) => {
  //   e.preventDefault();
  //   over.classList.add('active');
  // })
  // btnDeliv_3.addEventListener('click',(e) => {
  //   e.preventDefault();
  //   over.classList.add('active');
  // })
  // btnDeliv_4.addEventListener('click',(e) => {
  //   e.preventDefault();
  //   over.classList.add('active');
  // })



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
  
})  







 //Scroll
// document.addEventListener('DOMContentLoaded',function(){
//     const links = document.querySelectorAll('.menu-item');
//     for(let i = 0; i < links.length; i++){
//       links[i].addEventListener('click',function(event){
//         event.preventDefault();
//         const blockID = event.target.getAttribute('href')
//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block : "start"
//         })
//       }) ;
//     } 
        
//         //Modal
//     let over = document.querySelector('.overlay');
//     let mdClose = document.querySelector('.modal__close');
//     let btnsubmit = document.getElementById('phone__btn');
//     let btnheader = document.getElementById('header__btn');
//     let btnmini = document.getElementById('btn_mini');

//     btnsubmit.addEventListener('click',function(e) {
//       e.preventDefault();
//       over.classList.add('active');
//     })
  
//     btnheader.addEventListener('click',function(e) {
//       e.preventDefault();
//       over.classList.add('active');      
//     })

//     btnmini.addEventListener('click',function(e) {
//       e.preventDefault();
//       over.classList.add('active');
//     })

//     mdClose.addEventListener('click',function() {
//       mdClose.classList.remove('active');
//       over.classList.remove('active'); 
//     })

//     document.addEventListener('click',(e) =>{
//       if(e.target ===over){
//         over.classList.remove('active');
//       }
//     })

//         // Up button
//     let upp = document.querySelector('.pageup');

//     window.onscroll = function(){
//       if(window.pageYOffset > 580){
//         upp.style.display = "block"
//       }
//       else{
//         upp.style.display ="none"
//       }
//     }

//     upp.addEventListener('click',function(){
//       window.scrollBy({
//         top:-document.documentElement.scrollHeight,
//         behavior: "smooth"
//       })
//     })
// })  




