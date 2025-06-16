//togggle mobile menu


document.addEventListener('DOMContentLoaded', function(){
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    // console.log(toggleButton); HTMLDivElement
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    toggleButton.addEventListener('click', function(){
       mobileMenu.classList.toggle('active');
    });
});

//Change navbar background on scoll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});