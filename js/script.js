

var link = document.querySelector(".write-to-us-btn");
var modal = document.querySelector(".write-to-us");
var close = document.querySelector(".modal-close");

write-to-us-btn.addEventListener("click", function (evt) {
  evt.prevendDefault();
  popup.classList.add("show-write-to-us");
});

close.addEventListener("click", function (evt) {
  evt.preventDeafault();
  popup.classList.remove("modal-show");
});
