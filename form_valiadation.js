const email = document.getElementById("email");
const names = document.getElementById("name");

email.addEventListener("input", () => {
  if (email.value === "") {
    email.setCustomValidity("please input your email");
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity("email not valid");
  } else {
    email.setCustomValidity("");
  }
});

names.addEventListener("input", (e) => {
  if (names.value === "") {
    names.setCustomValidity("please input your name");
  } else if (names.validity.tooShort) {
    names.setCustomValidity("your full name is short");
  } else if (names.value.length > 30) {
    names.setCustomValidity("your full name is long");
  } else {
    names.setCustomValidity("");
  }
});