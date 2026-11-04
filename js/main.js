// Только минимальная логика модального окна; остальной сайт работает на HTML/CSS.
const modal = document.querySelector('dialog');
if (modal) {
  document.querySelectorAll('[data-open-dialog]').forEach(button => {
    button.addEventListener('click', () => modal.showModal());
  });
}
// Отправка формы только открывает учебное модальное подтверждение.
const orderForm = document.querySelector('.order-form');
if (orderForm) {
  orderForm.addEventListener('submit', event => {
    event.preventDefault();
    modal.showModal();
  });
}
