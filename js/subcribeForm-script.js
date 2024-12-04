$(document).ready(function() {
  $('.new-article-form').submit(function(e) {
    e.preventDefault();
    const email = $('input[type="email"]', this).val();
    console.log(email);
    alert(`Thank you for subscribing with email: ${email}`);
	$('input[type="email"]', this).val('')
  });
});