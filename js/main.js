// Только минимальная логика модального окна; остальной сайт работает на HTML/CSS.
const modal = document.querySelector('dialog');
if (modal) {
  document.querySelectorAll('[data-open-dialog]').forEach(button => {
    button.addEventListener('click', () => modal.showModal());
  });
}
