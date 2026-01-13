// Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add click functionality to certification and education images
document.addEventListener('DOMContentLoaded', function() {
  // Certification images
  document.querySelectorAll('.cert-image-container').forEach(container => {
    container.addEventListener('click', function() {
      const image = this.querySelector('.cert-image');
      if (image) {
        window.open(image.src, '_blank');
      }
    });
  });

  // Education images
  document.querySelectorAll('.education-image-container').forEach(container => {
    container.addEventListener('click', function() {
      const image = this.querySelector('.education-image');
      if (image) {
        window.open(image.src, '_blank');
      }
    });
  });
});

// The site now runs in a fixed dark theme, so no theme toggle logic is needed.
