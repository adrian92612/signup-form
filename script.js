const inputs = document.querySelectorAll(".input");
const form = document.getElementById("form");
const pass = document.getElementById("password");
const pass2 = document.getElementById("password2");
const btnError = document.getElementById("btn-error");

form.addEventListener("submit", (e) => {
  let go = 0;
  inputs.forEach((e) => {
    e.classList.contains("error") || e.value === "" ? go++ : go;
  });
  if (go !== 0) {
    e.preventDefault();
    btnError.textContent = "Please complete the form";
  }
});

inputs.forEach((e) => {
  this.addEventListener("input", (e) => {
    validate(e, e.target.value);
  });
});

function validate(e, val) {
  if (e.target.id === "first-name") {
    /^(?![\s-])[\w\s-]*$/.test(val)
      ? success(e.target)
      : error(e.target, "First letter cannot be space");
  } else if (e.target.id === "last-name") {
    /^(?![\s-])[\w\s-]*$/.test(val)
      ? success(e.target)
      : error(e.target, "First letter cannot be space");
  } else if (e.target.id === "email") {
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val)
      ? success(e.target)
      : error(e.target, "Invalid email address");
  } else if (e.target.id === "number") {
    /^[0-9]*$/.test(val)
      ? success(e.target)
      : error(e.target, "Must contain only numbers");
  } else if (e.target.id === "password") {
    if (pass2.disabled) {
      if (val.length > 7) {
        success(e.target);
        pass2.disabled = false;
      } else {
        error(e.target, "Must be equal or greater than 8 characters");
      }
    } else {
      if (val === pass2.value && val.length > 7) {
        success(e.target);
        success(pass2);
      } else {
        if (val.length < 8) {
          error(e.target, "Must be equal or greater than 8 characters");
          error(pass2, "Must be equal or greater than 8 characters");
        } else {
          error(e.target, "Password do not match");
          error(pass2, "Password do not match");
        }
      }
    }
  } else if (e.target.id === "password2") {
    if (val === pass.value) {
      success(pass2);
      success(pass);
    } else {
      error(pass, "Password do no match");
      error(pass2, "Password do no match");
    }
  }
  e.target.nextElementSibling.classList.add("hover");
  if (val === "") {
    e.target.classList.remove("success");
    e.target.classList.remove("error");
    e.target.parentElement.lastElementChild.textContent = "";
    e.target.nextElementSibling.classList.remove("hover");
  }
}

function success(e, msg) {
  e.classList.add("success");
  e.classList.remove("error");
  e.parentElement.lastElementChild.textContent = msg;
}

function error(e, msg) {
  e.classList.remove("success");
  e.classList.add("error");
  e.parentElement.lastElementChild.textContent = msg;
}
