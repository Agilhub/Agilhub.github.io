
$(function($){          
  $( "#contactForm" ).submit(function( event ) {

    event.preventDefault();

    // Set disabled prop true and remove hidden class
    $('#submit-btn').prop("disabled", true);
    $('#loading-icon').removeClass('hidden');
    
    // Toastr Options:
    toastr.options.progressBar = true;
    toastr.options.positionClass = "toast-top-right";
    toastr.options.timeOut = 2200;
    
    //Ajax
    $.ajax({
        url: "https://formspree.io/contato@agilhub.com",
        method: "POST",
        data: { 
          name: $("#name").val(), 
          mail: $("#mail").val(), 
          message: $("#message").val()
        },
        dataType: "json",
    }).done(function() {
      toastr.success("<strong>Sucesso!</strong><h5>Email enviado com sucesso.</h5>");
      $('#name').val('');
      $('#mail').val('');
      $('#message').val('');
    }).fail(function() {
      toastr.error("<strong>Erro!</strong><h5>Erro ao enviar Email.</h5>");
    }).always(function() {
      $('#loading-icon').addClass('hidden');
      $('#submit-btn').prop("disabled", false);
    });
  });
});

