//formdan ma'lumot olish
// inputdan ma'lumot olish
const inputEl = document.querySelector("#name-input");
const formEl = document.querySelector("form");
// console.log(inputEl);

// inputEl.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(1);
  let formData = new FormData(e.target);

  let formDb = {
    login: formData.get("login"),
    parol: formData.get("parol"),
  };
  console.log(formDb);
  formEl.reset();
});
