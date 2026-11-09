const modal = document.querySelector("dialog");
if (modal) {
  document.querySelectorAll("[data-open-dialog]").forEach(button => {
    button.addEventListener("click", () => modal.showModal());
  });
}
const orderForm = document.querySelector(".order-form");
if (orderForm && modal) {
  orderForm.addEventListener("submit", event => {
    event.preventDefault();
    if (orderForm.checkValidity()) modal.showModal();
  });
}