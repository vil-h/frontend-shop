document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");
  if (!form) return;
  const chosen = new URLSearchParams(location.search).get("product");
  const select = document.getElementById("product");
  if (chosen && Array.from(select.options).some(option => option.value === chosen)) select.value = chosen;
  form.addEventListener("submit", event => {
    event.preventDefault();
    form.classList.add("was-validated");
    const result = document.getElementById("orderResult");
    if (!form.checkValidity()) {
      result.classList.add("d-none");
      form.querySelector(":invalid")?.focus();
      return;
    }
    result.classList.remove("d-none");
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});