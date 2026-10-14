document.documentElement.classList.add('js');

// Fade sections in as they scroll into view
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  }
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Border under the sticky nav once the page is scrolled
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('mobile-menu');
const setMenu = (open) => {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menu.hidden = !open;
};
toggle.addEventListener('click', () => setMenu(menu.hidden));
menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// Close the sign-in dropdown when clicking elsewhere
const signin = document.querySelector('.signin');
document.addEventListener('click', (e) => {
  if (signin.open && !signin.contains(e.target)) signin.open = false;
});
