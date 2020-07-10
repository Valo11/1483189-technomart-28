var itemlink = document.querySelector(".products-item--link1");
var catalogmodal = document.querySelector(".catalog-modal");
var modalClose = catalogmodal.querySelector(".modal-close");

itemlink.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	catalogmodal.classList.add("catalog-modal-active");
});

modalClose.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	catalogmodal.classList.remove("catalog-modal-active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (catalogmodal.classList.contains("catalog-modal-active")) {
      evt.preventDefault();
      catalogmodal.classList.remove("catalog-modal-active");
    }
  }
});