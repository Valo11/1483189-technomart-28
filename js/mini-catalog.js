var itemlink=document.querySelector(".products-item--link1"),catalogmodal=document.querySelector(".catalog-modal"),modalClose=catalogmodal.querySelector(".modal-close");itemlink.addEventListener("click",function(a){a.preventDefault(),catalogmodal.classList.add("catalog-modal-active")}),modalClose.addEventListener("click",function(a){a.preventDefault(),catalogmodal.classList.remove("catalog-modal-active")}),window.addEventListener("keydown",function(a){27===a.keyCode&&catalogmodal.classList.contains("catalog-modal-active")&&(a.preventDefault(),catalogmodal.classList.remove("catalog-modal-active"))});