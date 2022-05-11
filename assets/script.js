let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
  document.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
      if (display.innerText) {
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
      }
    }
  });
});
