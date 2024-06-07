let userEmail = document.getElementById("email").value;
let userPassword = document.getElementById("password").value;

let login = document.getElementById("btn");

login.addEventListener("click", () => {
  let userEmail = document.getElementById("email").value;
  let userPassword = document.getElementById("password").value;
  if (userEmail == "example@gmail.com" && userPassword == 123456) {
    window.location.href = "https://github.com/HaniyaMunawar";
  } else {
    alert("Please try again");
  }
});