document.querySelector('.contact-form').addEventListener('click', () => {
  document.querySelector('.modal-overlay').classList.add('is-open');
});

document.querySelector('.modal-close').addEventListener('click', () => {
  document.querySelector('.modal-overlay').classList.remove('is-open');
});