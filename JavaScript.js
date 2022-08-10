var wishNumber = 0, list = new Map(), addText = document.createElement("text");

function wishAdded() {
  var wish = document.getElementById("myWish").value;
  list.set(wishNumber, wish);
  alert("You wish has been added succesfully!");
  ++wishNumber;
  return false;
}

function search() {
  var wish = document.getElementById("searchWish").value, wishCheck = document.getElementById("wishCheck"), stop = 0;
  wishCheck.append(addText);
  for (var i = 0; i < wishNumber && stop == 0; ++i) {
    var position = i, checkThisWish = list.get(position);
    if (checkThisWish == wish) {
      addText.innerHTML = "Your wish is on Santa's list!";
      addText.style.color = "blue";
      addText.style.fontSize = "30px";
      stop = 1;
    }
  }
  if (stop == 0) {
    addText.innerHTML = "Your wish is not Santa's list!";
    addText.style.color = "red";
    addText.style.fontSize = "30px";
  }
  return false;
}

function addListImage() {
  var wishOne = list.get(0), wishTwo = list.get(1), wishThree = list.get(2);
  $('#listImage').append(`
    <div class="imageSpace">
      <div class="container">
       <img src="list.jpg" alt="stickyNote" style="width:70%;">
       <div class="multiLine">
        <b>Your Wishlist</b>
        `+ wishOne +`
        `+ wishTwo +`
        `+ wishThree +`
       </div>
     </div>
    </div>
  `)
}
