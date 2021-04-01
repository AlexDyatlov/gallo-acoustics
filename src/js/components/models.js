const modelsLink =  document.querySelectorAll('.models__list-link');
const modelsItem =  document.querySelectorAll('.models__item-img');

if (document.querySelector('.models__list')) {
  modelsLink.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
      modelsItem.forEach((elImg) => {
        elImg.setAttribute('src', e.currentTarget.dataset.src)
      })
    })
  });
}