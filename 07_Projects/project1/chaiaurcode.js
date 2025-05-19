let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');

buttons.forEach((change) => {
  console.log(change);
  change.addEventListener('click', (e) => {
    let changeColor = e.target.id;

    switch (changeColor) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      default:
        console.log("Color not recognized");
    }
  });
});
