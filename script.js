document.addEventListener('DOMContentLoaded', () => {
  const animatedItems = document.querySelectorAll(
    '.card-section, .project-card, .feature-card, .project-summary-item, .sp-genre-item, .footer-card, .hero-card, .detail-hero, .project-screenshot'
  );

  animatedItems.forEach(item => {
    item.classList.add('animated-card');
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedItems.forEach(item => revealObserver.observe(item));

  const rippleTargets = document.querySelectorAll('button, .btn-main, .btn-project, .btn-submit, .back-link');
  rippleTargets.forEach(target => {
    target.addEventListener('click', function (event) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.animation = 'ripple-effect 0.6s ease-out';

      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});