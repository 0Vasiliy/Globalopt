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
  
     
   
   
//     const menu = document.querySelector('.menu'),
//           phoneMenu = document.querySelector('.menu__phone'),
//           closeMenu = document.querySelector('.menu__close');
   
   
//         //   mobile menu
//     phoneMenu.addEventListener('click', () => {
//         phoneMenu.classList.add('active');
//         menu.classList.add('active');
   
//     });
//     closeMenu.addEventListener('click', () => {
//         phoneMenu.classList.remove('active');
//         menu.classList.remove('active');
//     });
    
})  