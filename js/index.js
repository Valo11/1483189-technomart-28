var openmodalform = document.querySelector(".discription-contacts .button");
var modallapp = document.querySelector(".modall-app");
var modalClose = modallapp.querySelector(".modal-close");
var modalForm = modallapp.querySelector(".modall-app--form");
var textname = modallapp.querySelector(".text-rgey-name");
var textmail = modallapp.querySelector(".text-rgey-mail");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("name");
} catch (err) {
  	isStorageSupport = false;
}

openmodalform.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	modallapp.classList.add("modall-app--active");

  	if (storage) {
    	textname.value = storage;
    	textmail.focus();
  	} else {
  		textname.focus();
  	}
});

modalClose.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	modallapp.classList.remove("modall-app--active");
  	modallapp.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
	if (!textname.value || !textmail.value) {
		evt.preventDefault();
		modallapp.classList.remove("modal-error");
		modallapp.offsetWidth = modallapp.offsetWidth;
		modallapp.classList.add("modal-error");
	} else {
		 if (isStorageSupport) {
       localStorage.setItem("name", textname.value);
       localStorage.setItem("mail", textmail.value);
		}
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modallapp.classList.contains("modall-app--active")) {
      evt.preventDefault();
      modallapp.classList.remove("modall-app--active");
      modallapp.classList.remove("modal-error");
    }
  }
});

/*Modal mapp*/

var bm = document.querySelector("#bigg-mapp");
var modallmap = document.querySelector(".modall-map");
var lb = document.querySelector("#little-big");

 bm.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	modallmap.classList.add("modall-map--active");
  	});

 lb.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	modallmap.classList.remove("modall-map--active");
});

 window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modallmap.classList.contains("modall-map--active")) {
      evt.preventDefault();
      modallmap.classList.remove("modall-map--active");
    }
  }
});