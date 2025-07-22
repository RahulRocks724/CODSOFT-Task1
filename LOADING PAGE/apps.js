// apps.js

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';

    // Wait for transition to finish, then remove from DOM
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
});
