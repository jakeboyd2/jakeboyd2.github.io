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

// Add click functionality to certification images
document.querySelectorAll('.cert-image-container').forEach(container => {
  container.addEventListener('click', function() {
    const image = this.querySelector('.cert-image');
    if (image) {
      window.open(image.src, '_blank');
    }
  });
});

// Add click functionality to education images
document.querySelectorAll('.education-image-container').forEach(container => {
  container.addEventListener('click', function() {
    const image = this.querySelector('.education-image');
    if (image) {
      window.open(image.src, '_blank');
    }
  });
});

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const html = document.documentElement;
  
  // Check for saved theme preference or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);
  html.setAttribute('data-theme', savedTheme);
  
  themeToggle.addEventListener('click', function() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update particles color scheme based on theme
    updateParticlesTheme(newTheme);
  });
});

// Function to update particles theme
function updateParticlesTheme(theme) {
  const particlesContainer = document.getElementById('particles-js');
  if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
    const pJS = window.pJSDom[0].pJS;
    
    if (theme === 'dark') {
      // Dark mode particle colors
      pJS.particles.color.value = ["#87CEEB", "#4A90E2", "#7B68EE", "#E2E8F0"];
      pJS.particles.line_linked.color = "#87CEEB";
    } else {
      // Light mode particle colors
      pJS.particles.color.value = ["#4A90E2", "#7B68EE", "#87CEEB", "#1E3A8A"];
      pJS.particles.line_linked.color = "#4A90E2";
    }
    
    // Refresh particles
    pJS.fn.particlesRefresh();
  }
}
