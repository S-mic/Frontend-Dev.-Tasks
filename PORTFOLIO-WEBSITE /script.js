const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    menuToggle?.addEventListener('click', () => {
      menu.classList.toggle('open');
    });

    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav a');
    const byId = id => document.querySelector(`.nav a[href="#${id}"]`);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const link = byId(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });

    sections.forEach(s => observer.observe(s));

    const form = document.getElementById('contactForm');
    const statusEl = document.getElementById('formStatus');
    form?.addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      statusEl.textContent = 'Thanks, ' + (data.name || 'friend') + '! I will get back to you soon.';
      form.reset();
    });

    document.getElementById('year').textContent = new Date().getFullYear();