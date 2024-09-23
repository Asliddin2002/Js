// Custom Promise Function

let isSucces = false;
function myCustomPromise(callBackSucc, callBackErr) {
  if (isSucces) {
    callBackSucc({ message: "Data imported successfully" });
  } else {
    callBackErr({ message: "Data not found" });
  }
}

myCustomPromise(
  (data) => {
    console.log(data.message);
  },
  (data) => {
    console.log(data.message);
  }
);

// Custom Form Validation

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const form = document.querySelector("form");
const errName = document.querySelector(".name-err");
const errEmail = document.querySelector(".email-err");

form.addEventListener("submit", (e) => {
  if (nameInput.value == "") {
    errName.textContent = "Please, Enter your name!";
  } else if (nameInput.value.length < 3) {
    errName.textContent = "Name should be at least 3 character!";
  } else {
    errName.textContent = "";
  }
  if (emailInput.value == "") {
    errEmail.textContent = "Please, Enter your email!";
  } else {
    errEmail.textContent = "";
  }
  e.preventDefault();
});
