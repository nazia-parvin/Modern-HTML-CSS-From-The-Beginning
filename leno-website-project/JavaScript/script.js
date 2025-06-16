// for Hamburger Menu or Mobile Menu
document.addEventListener('DOMContentLoaded', function(){
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    toggleButton.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
    });


    // Video Modal Menu
     const modal = document.getElementById('videoModal');
     const videoButton = document.querySelector('.preview__video-button');
     const closeButton = document.querySelector('.modal__close-button');
     const videoPlayer = document.getElementById('videoPlayer');
    // for showing the video window when clicked on the video play button
    videoButton.addEventListener('click', function(){
      modal.style.display='block';

      // Replace src with video
      videoPlayer.src= 'https://www.youtube.com/watch?v=8sXRyHI3bLw';

      // close button
      closeButton.addEventListener('click', function(){
        modal.style.display='none';
        videoPlayer.src = 'none';
      })

      //for closing from the click on the window
      window.addEventListener('click', function(event){
        if(event.target == modal){
          modal.style.display = 'none';
          videoPlayer.src = 'none';
        }
      }) 
    });


});


// scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});