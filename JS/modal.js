(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    return;
  }

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", closeOnBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle(
      "modal-open",
      !refs.modal.classList.contains("is-hidden")
    );
  }

  function closeOnBackdropClick(event) {
    if (event.target !== refs.modal) {
      return;
    }

    refs.modal.classList.add("is-hidden");
    document.body.classList.remove("modal-open");
  }
})();
