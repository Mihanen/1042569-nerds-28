

var link = document.querySelector(".map-btn");
var modal = document.querySelector(".write-to-us");
var close = document.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.prevendDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDeafault();
  popup.classList.remove("modal-show");
});
