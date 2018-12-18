var message_link = document.querySelector(".contacts .button");
var message_popup = document.querySelector(".modal-message");
var close = message_popup.querySelector(".modal-message-close");
var user_name = message_popup.querySelector(".user-name");
var e_mail = message_popup.querySelector(".user-email");
var message = message_popup.querySelector(".user-message");
var form = message_popup.querySelector(".message-form");
var isStorageSupport = true;
var storage_user_name = "";
var storage_e_mail = "";

try {
  storage_user_name = localStorage.getItem("name");
  storage_e_mail = localStorage.getItem("e-mail");
} catch (err) {
  isStorageSupport = false;
}

message_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  message_popup.classList.add("modal-show");
  if (storage_user_name) {
    user_name.value = storage_user_name;
    if (storage_e_mail) {
      e_mail.value = storage_e_mail;
      message.focus();
    } else {
      e_mail.focus();
    }
  } else {
    console.log(user_name);
    // user_name.focus();
    message_popup.querySelector(".user-name").focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  message_popup.classList.remove("modal-show");
  message_popup.classList.remove("modal-error");
});


form.addEventListener("submit", function (evt) {
    var has_error = false;

    if (!user_name.value || !e_mail.value || !message.value) {
      evt.preventDefault();
      console.log("Нужно заполнить все поля!");
      message_popup.classList.remove("modal-error");
      message_popup.offsetWidth = message_popup.offsetWidth;
      message_popup.classList.add("modal-error");
      has_error = true;
    }

    if (!has_error && isStorageSupport) {
      localStorage.setItem("name", user_name.value);
      localStorage.setItem("e-mail", e_mail.value);
    }
  }
);

window.onkeydown = function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (message_popup.classList.contains("modal-show")) {
      message_popup.classList.remove("modal-show");
      message_popup.classList.remove("modal-error");
    }
    if (map_popup.classList.contains("modal-show")) {
      map_popup.classList.remove("modal-show");
    }
  }  
};

var map_link = document.querySelector(".map");
var map_popup = document.querySelector(".modal-map");
var map_close = map_popup.querySelector(".modal-map-close");

map_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.add("modal-show");
});

map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.remove("modal-show");
});

var slide_back = document.querySelector(".button-slider-back");
var slide_next = document.querySelector(".button-slider-next");
var slide = document.querySelectorAll(".slider li");
var index = 0; // Индекс текущего слайда


slide_back.addEventListener("click", function (evt) {

});

