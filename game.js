let wishNumber = 0, wishList = new Map(), addText = document.createElement("text");

function wishAdded() {
  let wish = document.getElementById("myWish").value;
  wishList.set(wishNumber, wish);
  alert("You wish has been added succesfully!");
  ++wishNumber;
  return false;
}

function search() {
  let wish = document.getElementById("searchWish").value, stop = 0;
  document.getElementById("wishCheck").append(addText);
  for (let i = 0; i < wishNumber && stop == 0; ++i) {
    let position = i, checkThisWish = wishList.get(position);
    if (checkThisWish === wish) {
      addText.innerHTML = "Your wish is on Santa's list!";
      addText.style.color = "blue";
      addText.style.fontSize = "30px";
      stop = 1;
    }
  }
  if (stop === 0) {
    addText.innerHTML = "Your wish is not Santa's list!";
    addText.style.color = "red";
    addText.style.fontSize = "30px";
  }
  return false;
}
