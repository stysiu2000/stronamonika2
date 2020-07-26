function scrollAppear(){
    var introText = document.querySelector('.contact');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = 900;

    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }

   
  }
  
window.addEventListener('scroll',scrollAppear);






// intro-apear ----> kontakt.scss
