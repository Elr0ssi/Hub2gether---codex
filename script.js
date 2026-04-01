const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.18 });
reveals.forEach((el) => observer.observe(el));

const slides = Array.from(document.querySelectorAll('#heroCarousel .slide'));
let slideIndex = 0;
setInterval(() => {
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}, 3200);

const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting || entry.target.dataset.done === '1') return;
    const el = entry.target;
    const target = Number(el.dataset.target || 0);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const start = performance.now();
    const duration = 1200;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased).toLocaleString('fr-FR');
      el.textContent = `${prefix}${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    el.dataset.done = '1';
  });
}, { threshold: 0.45 });
counters.forEach((el) => counterObserver.observe(el));
