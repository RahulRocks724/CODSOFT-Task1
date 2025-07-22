// Preloader fade out on page load
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
});

// Optional: Close mobile menu when clicking a nav link (for better UX)
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    const checkbox = document.getElementById('check');
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  });
});
