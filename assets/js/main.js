$('nav a[href^="#"], .menudrop a[href^="#"], a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset - 30
    }, 500);
    $('.menudrop').removeClass('active');
  });

  const isMobile = screen.width;
  if(isMobile < 560){
      $('.sec-3').addClass('mobile')
      $('.sec-5').addClass('mobile')


      $('.actionMenu').on('click', function(){
          $('.menudrop').addClass('active');
      })
      $('.imgClose').on('click', function(){
        $('.menudrop').removeClass('active');
    })

  }

  /*sanfona FAQ */
  $('.middle li, .right li').on('click', function(){
    $('p.active').removeClass('active');
    $('.img-mobile img.active ').removeClass('active');
    $(this).find('.txt').toggleClass('active');
    $(this).find('.img-mobile img').toggleClass('active');
  });

  $(document).ready(function(){
    $('.sec-3.mobile ul').bxSlider({auto: true});
    $('.sec-5.mobile ul').bxSlider({auto: true});
  });


  /*Send email*/

  $('form #send').on('click', function(){
    const dataForm = {
      nome: $('form #nome').val(),
      empresa: $('form #empresa').val(),
      email: $('form #email').val(),
      tel: $('form #tel').val(),
      cargo: $('form #cargo').val(),
      funcionarios: $('form option:selected').val(),
      comentario : $('form textarea').val()
    }
    $('#send').val('Enviando...');
    $.ajax({
        type: "POST",
        url: "sendmail.php",
        data: dataForm,
      })
      .done(function(response){
        console.log(response);
        $('form #nome').val('');
        $('form #empresa').val('');
        $('form #email').val('');
        $('form #tel').val('');
        $('form #cargo').val('');
        $('form option:selected').val('');
        $('form textarea').val('');
        $('.ajaxReturn').html('<span style="color:green"> Mensagem enviada com sucesso!</span>');
        $('#send').val('Enviar');
      })
      .fail(function(err){
        $('#send').val('Enviar');
        $('.ajaxReturn').html('<span style="color:red"> Erro ao enviar a mensagem, tente novamente!</span><br />');
        $('.ajaxReturn').append(`<span style="color:red">${err.responseText}</span>`);
      })

  });
