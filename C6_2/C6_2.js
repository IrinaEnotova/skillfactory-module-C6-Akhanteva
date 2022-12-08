const btn = document.querySelector('.btn');
const resultElement = document.querySelector('.result');

btn.addEventListener('click', () => {
  let resultText = `Ширина экрана - ${window.screen.width}px\nВысота экрана - ${window.screen.height}px\nРазмер окна с учётом полосы прокрутки - ${window.innerWidth} на ${window.innerHeight}\nРазмер окна без учёта полосы прокрутки - ${document.documentElement.clientWidth} на ${document.documentElement.clientHeight}`
  alert(resultText);
})