
var buy_links = document.querySelectorAll(".product-button-buy");
var buy_popup = document.querySelector(".modal-buy");
var buy_close = buy_popup.querySelector(".modal-buy-close");
var checkout = buy_popup.querySelector(".modal-checkout");
var buy_continue = buy_popup.querySelector(".modal-continue");



buy_links.forEach(function(buy_link, i, arr) {
  buy_link.addEventListener("click", function (evt) {
    evt.preventDefault();
    buy_popup.classList.add("modal-show");
  });
});

buy_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  buy_popup.classList.remove("modal-show");
});

checkout.addEventListener("click", function (evt) {
  evt.preventDefault();
  buy_popup.classList.remove("modal-show");
});

buy_continue.addEventListener("click", function (evt) {
  evt.preventDefault();
  buy_popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (buy_popup.classList.contains("modal-show")) {
      buy_popup.classList.remove("modal-show");
    }
  }
});
