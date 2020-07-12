var itemLink = document.querySelector(".products-item--link1");
var catalogModal = document.querySelector(".catalog-modal");
var modalClose = catalogModal.querySelector(".modal-close");

itemLink.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	catalogModal.classList.add("catalog-modal-active");
});

modalClose.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	catalogModal.classList.remove("catalog-modal-active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (catalogModal.classList.contains("catalog-modal-active")) {
      evt.preventDefault();
      catalogModal.classList.remove("catalog-modal-active");
    }
  }
});