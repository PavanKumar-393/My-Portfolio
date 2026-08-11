const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('#navMenu a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();
