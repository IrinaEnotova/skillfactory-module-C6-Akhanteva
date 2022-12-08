const btn = document.querySelector('.btn');
const whiteIcon = document.querySelector('.white-icon');
const blackIcon = document.querySelector('.black-icon');

btn.addEventListener('click', () => {
  // alert('done');
  whiteIcon.classList.toggle('invisible-icon');
  blackIcon.classList.toggle('invisible-icon');
})