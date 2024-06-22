function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  document.getElementById("hexCode").innerText = newColor;
}