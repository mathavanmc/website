const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.main-nav');
const yearEl = document.querySelector('#year');
const contactForm = document.querySelector('#contactForm');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const button = contactForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;

    button.textContent = 'Request Sent';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      contactForm.reset();
      alert('Thank you! Your project request has been submitted successfully.');
    }, 1500);
  });
}

// Lightweight lightbox for project images
function openLightbox(src, alt) {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt || '';

  const close = document.createElement('button');
  close.className = 'lightbox-close';
  close.innerHTML = '✕';

  overlay.appendChild(img);
  document.body.appendChild(overlay);
  document.body.appendChild(close);

  function removeLightbox() {
    overlay.remove();
    close.remove();
    document.removeEventListener('keydown', onKey);
  }

  function onKey(e) {
    if (e.key === 'Escape') removeLightbox();
  }

  overlay.addEventListener('click', removeLightbox);
  close.addEventListener('click', removeLightbox);
  document.addEventListener('keydown', onKey);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-card img').forEach((el) => {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', (e) => {
      openLightbox(e.currentTarget.src, e.currentTarget.alt);
    });
  });
  // Tabs behavior: Projects first, Services next
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const target = document.querySelector(btn.dataset.target);
      if (target) target.classList.add('active');
    });
  });
  // When nav link to #projects is clicked, ensure Projects tab is active
  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#projects') {
        const projectsBtn = document.querySelector('.tab-btn[data-target="#projects"]');
        if (projectsBtn) projectsBtn.click();
      }
    });
  });
});
