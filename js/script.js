var link = document.querySelector(".write-to-us-btn-form");
var modal = document.querySelector(".write-to-us");
var close = document.querySelector(".form-btn-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("show-write-to-us");
});

close.addEventListener("click", function (evt) {
  evt.preventDeafault();
  modal.classList.remove("show-write-to-us");
});
