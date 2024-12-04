document.querySelector('.new-article-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
		console.log(email);
        alert(`Thank you for subscribing with email: ${email}`);
    });
