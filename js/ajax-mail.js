$(function() {

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('.form-messege');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();
		// Toastr Options:
		toastr.options.progressBar = true;
		toastr.options.positionClass = "toast-top-right";
		toastr.options.timeOut = 2500;

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: "https://formspree.io/contato@agilhub.com",
			data: formData
		})
		.done(function(response) {
			toastr.success("<strong>Sucesso!</strong><h5>Email enviado com sucesso!</h5>");
			// Clear the form.
			$('#contact-form input,#contact-form textarea').val('');
		})
		.fail(function(data) {
			toastr.error("<strong>Oops!</strong><h5>Erro ao enviar Email.</h5>");
		});
	});

});
