var message_link = document.querySelector(".contacts .button");
var message_popup = document.querySelector(".modal-message");
var close = message_popup.querySelector(".modal-message-close");
var name = message_popup.querySelector(".user-name");
var e_mail = message_popup.querySelector(".user-email");
var message = message_popup.querySelector(".user-message");
var form = message_popup.querySelector(".message-form");
var isStorageSupport = true;
var storage_name = " ";
var storage_e_mail = " ";

try {
  storage_name = localStorage.getItem("name");
  storage_e_mail = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

message_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  message_popup.classList.add("modal-show");
  if (storage_name) {
    name.value = storage_name;
    if (storage_e_mail) {
      e_mail.value = storage_e_mail;
      message.focus();
    } else {
      e_mail.focus();
    }
  } else {
    console.log(name);
    // name.focus();
    message_popup.querySelector(".user-name").focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  message_popup.classList.remove("modal-show");
  message_popup.classList.remove("modal-error");
});


form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var has_error = false;

    if (!name.value || !e_mail.value) {
      evt.preventDefault();
      console.log("Введите ваше имя и адрес электронной почты");
      has_error = true;
    }

    if (!message.value) {
      console.log("Введите текст сообщения");
      message_popup.classList.remove("modal-error");
      message_popup.offsetWidth = message_popup.offsetWidth;
      message_popup.classList.add("modal-error");
      has_error = true;
    }

    if (!has_error && isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("e-mail", e_mail.value);
    }
  }
);

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (message_popup.classList.contains("modal-show")) {
      message_popup.classList.remove("modal-show");
      message_popup.classList.remove("modal-error");
    }
  }
});

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

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (map_popup.classList.contains("modal-show")) {
      map_popup.classList.remove("modal-show");
    }
  }
});

