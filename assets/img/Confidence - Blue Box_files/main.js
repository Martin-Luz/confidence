$('nav a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset - 100
    }, 500);
  });

  const isMobile = screen.width;
  if(isMobile < 560){
      $('.sec-3').addClass('mobile')
      $('.sec-5').addClass('mobile')
  }

  $(document).ready(function(){
    $('.sec-3.mobile ul').bxSlider();
    $('.sec-5.mobile ul').bxSlider();
  });