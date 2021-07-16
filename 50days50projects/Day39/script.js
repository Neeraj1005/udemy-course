const password = document.getElementById("password");
const background = document.getElementById("background");
const MIN_PASSWORD_LENGTH = 8

password.addEventListener("input", (e) => changeBehaviour(e));

function changeBehaviour(element) {
  const input = element.target.value;
  const length = input.length;
  const blurValue = (20 - length) * 2;
  
  background.style.filter = `blur(${blurValue}px)`;

  if (length >= MIN_PASSWORD_LENGTH) {
    password.classList.add("border-green-500");
  } else {
    password.classList.remove("border-green-500");
  }

}
