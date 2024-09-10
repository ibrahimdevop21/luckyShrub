// Select all article elements
const articles = document.querySelectorAll('article');

articles.forEach((article) => {
  // Add mousemove event to each article
  article.addEventListener('mousemove', (e) => {
    // Get article's dimensions and position
    const rect = article.getBoundingClientRect();

    // Calculate the mouse position relative to the center of the article
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Calculate the rotation values based on mouse position
    const rotateX = (y / rect.height) * 15; // Tilt up/down
    const rotateY = -(x / rect.width) * 15; // Tilt left/right

    // Apply the 3D rotation
    article.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  // Reset the article's transformation when the mouse leaves
  article.addEventListener('mouseleave', () => {
    article.style.transform = 'rotateX(0) rotateY(0)';
  });
});

document.getElementById().textContent = new Date().getFullYear();

// contact us
document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById('formResponse').innerText =
          'Thank you for your message! We will get back to you soon.';
        form.reset(); // Clear form fields
      })
      .catch((error) => {
        document.getElementById('formResponse').innerText =
          'Sorry, something went wrong. Please try again.';
      });
  });

//  the hamburger menue
