const btn = document.getElementById("unTouchableBtn");
const OFFSET = 100;

btn.addEventListener("click", () => {
  alert("Oh, You found another ways!");
  window.close();
});

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const butttonBox = btn.getBoundingClientRect();
  const horizontalDistanceFrom = distanceFromCenter(
    butttonBox.x,
    x,
    butttonBox.width
  );
  const verticalDistanceFrom = distanceFromCenter(
    butttonBox.y,
    y,
    butttonBox.height
  );

  const horizontalOffset = butttonBox.width / 2 + OFFSET;
  const verticalOffset = butttonBox.height / 2 + OFFSET;

  if (
    Math.abs(horizontalDistanceFrom) <= horizontalOffset &&
    Math.abs(verticalDistanceFrom) <= verticalOffset
  ) {
    setButtonPosition(
      butttonBox.x + (horizontalOffset / horizontalDistanceFrom) * 10,
      butttonBox.x + (verticalOffset / verticalDistanceFrom) * 10
    );
  }
});

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect();
  const buttonBox = btn.getBoundingClientRect();
  if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET;
  }
  if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET;
  }
  if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.width - OFFSET;
  }
  if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET;
  }
  btn.style.left = `${left}px`;
  btn.style.top = `${top}px`;
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}
