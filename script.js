document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Form submitted successfully!');
        this.reset();
    } else {
        alert('Please fill out all required fields.');
    }
});

document.getElementById('feedbackForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let rating = document.getElementById('rating').value;
    let comments = document.getElementById('comments').value;
    
    if (name && email && rating && comments) {
        alert('Feedback submitted successfully!');
        this.reset();
    } else {
        alert('Please fill out all required fields.');
    }
});