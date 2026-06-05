document.addEventListener('DOMContentLoaded', () => {

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(
        this.getAttribute('href')
      ).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Ripple effect
  const rippleTargets = document.querySelectorAll(
    'button, .btn-main, .btn-project, .btn-submit, .back-link'
  );

  rippleTargets.forEach(target => {
    target.addEventListener('click', function (event) {

      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');

      const size = Math.max(rect.width, rect.height);

      ripple.className = 'ripple';

      ripple.style.width = size + 'px';
      ripple.style.height = size + 'px';

      ripple.style.left =
        event.clientX - rect.left - size / 2 + 'px';

      ripple.style.top =
        event.clientY - rect.top - size / 2 + 'px';

      ripple.style.animation =
        'ripple-effect 0.6s ease-out';

      this.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    });
  });

});