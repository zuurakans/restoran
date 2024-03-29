const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: true,
    watchOverflow:true,
  
   slidesPerView: 1,
   spaceBetween: 3,
  

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
    
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
 breakpoints:{
1400:{
    slidesPerView: 3,
    spaceBetween:50,
  },
1024:{
  slidesPerView: 3,
  spaceBetween: 10,
},
756:{
  slidesPerView: 2,
  spaceBetween: 3,
}

 }
  });


//Burger menu

 const burger=document.querySelector('.burger');
 const nav=document.querySelector('.header__nav');
  
  burger.addEventListener('click',(e)=>{
    e.preventDefault();
  nav.classList.toggle('active'); 
  burger.classList.toggle('active');
});





  