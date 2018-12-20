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
var slider = document.querySelector(".slider");

var active_dot = document.querySelector(".dot-active");
var active_slide = document.querySelector(".slide-active");
var dots = document.querySelectorAll(".main-slider .dot");
var slides = document.querySelectorAll(".slide");


var set_active_dot = function (dot) {
  if (active_dot) {
    active_dot.classList.remove("dot-active");
  }
  dot.classList.add("dot-active");
  active_dot = dot;
};

var set_active_slide = function (slide) {
  if (active_slide) {
    active_slide.classList.remove("slide-active");
  }
  slide.classList.add("slide-active");
  active_slide = slide;
};

var add_click_handler = function (dot, slide) {
  dot.addEventListener('click', function () {
    if (dot !== "dot-active") {
      set_active_dot(dot);
      set_active_slide(slide);
    }
  });
};

for (var k = 0; k < slides.length; k++) {
  add_click_handler(dots[k], slides[k]);
}


slide_next.addEventListener("click", function (evt) {
  var active_slide = slider.querySelector(".slide-active");
  if (active_slide.nextElementSibling) {
    active_slide.nextElementSibling.classList.add("slide-active");
    active_slide.classList.remove("slide-active");

  }
});

slide_back.addEventListener("click", function (evt) {
  var active_slide = slider.querySelector(".slide-active");
  if (active_slide.previousElementSibling) {
    active_slide.previousElementSibling.classList.add("slide-active");
    active_slide.classList.remove("slide-active");
  }
});



/*
var slide_back = document.querySelector(".button-slider-back");
var slide_next = document.querySelector(".button-slider-next");
var slider = document.querySelector(".slider");
var dots = document.querySelectorAll(".main-slider .dot");
var slides = slider.querySelectorAll(".slide");


function get_active_slide() {
  return slider.querySelector(".slide-active");
}

slide_next.addEventListener("click", function (evt) {
  var active_slide = get_active_slide();
  if (active_slide.nextElementSibling) {
    active_slide.nextElementSibling.classList.add("slide-active");
    active_slide.classList.remove("slide-active");
    var k = Array.from(slides).indexOf(active_slide.nextElementSibling);
    var target_dot = Array.from(dots)[k];
    document.querySelector(".dot-active").classList.remove("dot-active");
    target_dot.classList.add("dot-active");
  }
});

slide_back.addEventListener("click", function (evt) {
  var active_slide = get_active_slide();
  if (active_slide.previousElementSibling) {
    active_slide.previousElementSibling.classList.add("slide-active");
    active_slide.classList.remove("slide-active");

    var k = Array.from(slides).indexOf(active_slide.previousElementSibling);
    var target_dot = Array.from(dots)[k];
    document.querySelector(".dot-active").classList.remove("dot-active");
    target_dot.classList.add("dot-active");
  }
});

document.querySelector(".choice-slide").addEventListener("click",function(evt) {
  var dot = evt.target;

  if(dot && dot.nodeName === "BUTTON") {
    var k = Array.from(dots).indexOf(dot);
    var target_slide = Array.from(slides)[k];

    console.log(dot.innerText + " was clicked");
    document.querySelector(".dot-active").classList.remove("dot-active");
    dot.classList.add("dot-active");

    document.querySelector(".slide-active").classList.remove("slide-active");
    target_slide.classList.add("slide-active");

  }
});*/

var slider_2 = document.querySelector(".slider-2");
var active_slide_2 = document.querySelector(".slide-2-active");
var active_button_2 = document.querySelector(".active");
var buttons = document.querySelectorAll(".services-slider-button");
var slides_2 = slider_2.querySelectorAll(".service");

var setActiveButton = function (button) {
  if (active_button_2) {
    active_button_2.classList.remove("active");
  }
  button.classList.add("active");
  active_button_2 = button;
};

var setActiveSlide = function (slide) {
  if (active_slide_2) {
    active_slide_2.classList.remove("slide-2-active");
  }
  slide.classList.add("slide-2-active");
  active_slide_2 = slide;
};

var addClickHandler = function (button, slide) {
  button.addEventListener('click', function () {
    if (button !== "active") {
      setActiveButton(button);
      setActiveSlide(slide);
    }
  });
};

for (var i = 0; i < slides_2.length; i++) {
  addClickHandler(buttons[i], slides_2[i]);
}





/*
document.querySelector(".services-slider-buttons").addEventListener("click",function(evt) {
  var button = evt.target;
  console.log(button);

  if (button) {

    var k = buttons.indexOf(button);
    var target_slide = Array.from(slides_2)[k];

    console.log(button.innerText + " was clicked");
    document.querySelector(".active").classList.remove("active");
    button.classList.add("active");

    slider_2.querySelector(".slide-2-active").classList.remove("slide-2-active");
    target_slide.classList.add("slide-2-active");
  }
});

*/
