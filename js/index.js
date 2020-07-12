var openModalForm = document.querySelector(".discription-contacts .button");
var modallApp = document.querySelector(".modall-app");
var modalClose = modallApp.querySelector(".modal-close");
var modalForm = modallApp.querySelector(".modall-app--form");
var textName = modallApp.querySelector(".text-rgey-name");
var textMail = modallApp.querySelector(".text-rgey-mail");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("name");
} catch (err) {
  	isStorageSupport = false;
}

openModalForm.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	modallApp.classList.add("modall-app--active");

  	if (storage) {
    	textName.value = storage;
    	textMail.focus();
  	} else {
  		textName.focus();
  	}
});

modalClose.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	modallApp.classList.remove("modall-app--active");
  	modallApp.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
	if (!textname.value || !textmail.value) {
		evt.preventDefault();
		modallApp.classList.remove("modal-error");
		modallApp.offsetWidth = modallApp.offsetWidth;
		modallApp.classList.add("modal-error");
	} else {
		 if (isStorageSupport) {
       localStorage.setItem("name", textName.value);
       localStorage.setItem("mail", textMail.value);
		}
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modallApp.classList.contains("modall-app--active")) {
      evt.preventDefault();
      modallApp.classList.remove("modall-app--active");
      modallApp.classList.remove("modal-error");
    }
  }
});

/*Modal mapp*/

var bm = document.querySelector("#bigg-mapp");
var modallMap = document.querySelector(".modall-map");
var lb = document.querySelector("#little-big");

bm.addEventListener("click", function (evt) {
	evt.preventDefault();
	modallMap.classList.add("modall-map--active");
});

lb.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	modallMap.classList.remove("modall-map--active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modallMap.classList.contains("modall-map--active")) {
      evt.preventDefault();
      modallMap.classList.remove("modall-map--active");
    }
  }
});