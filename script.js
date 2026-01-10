// Menu toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', ()=> nav.classList.toggle('show'));

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
      nav.classList.remove('show');
    }
  })
});

// Contact form handler (no backend) — simulate send
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form.addEventListener('submit', e=>{
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const message = data.get('message') || '';
  formMsg.textContent = 'Opening email client...';

  // Build mailto fallback so users can send directly from their mail app.
  const subject = encodeURIComponent(`Portfolio message from ${name || email}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  const mailto = `mailto:rictech634@gmail.com?subject=${subject}&body=${body}`;

  // Open user's default mail client
  setTimeout(()=>{
    window.location.href = mailto;
    form.reset();
    formMsg.textContent = 'If your mail app did not open, email rictech634@gmail.com';
  },300);
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
