const btnMenuMobile = document.querySelector('.btn_mobile');

btnMenuMobile.addEventListener('click', function(){
  const mobileMenu = document.querySelector('.menu_mobile');
  mobileMenu.classList.toggle('active');
})
