document.querySelector('.contact-form').addEventListener('click', () => {
  document.querySelector('.modal-overlay').classList.add('is-open');
});

document.querySelector('.modal-close').addEventListener('click', () => {
  document.querySelector('.modal-overlay').classList.remove('is-open');
});

document.querySelector('.burger-icon').addEventListener('click', () => {
  document.querySelector('.mobile-nav-sidebar').classList.toggle('is-open');
});

document
  .querySelector('.mobile-nav-sidebar-close')
  .addEventListener('click', () => {
    document.querySelector('.mobile-nav-sidebar').classList.remove('is-open');
  });
