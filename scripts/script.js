(function () {
  let formBtn = document.querySelector('.hotel-search__link');
  let form = document.querySelector('.modal');
  let formClose = document.querySelector('.modal__close');

  if (!formBtn || !form) return;

  formBtn.addEventListener('click', function () {
    if (form.classList.contains('modal--closed')) {
      form.classList.remove('modal--closed');
    }
  });

  formClose.addEventListener('click', function () {
    if (!form.classList.contains('modal--closed')) {
      form.classList.add('modal--closed');
    }
  });
})();
