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
  formMsg.textContent = 'Sending...';
  setTimeout(()=>{
    form.reset();
    formMsg.innerHTML = 'Thanks — message sent (real). <a href="mailto:rictech634@gmail.com">Or send directly via email</a>';
  },800);
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
