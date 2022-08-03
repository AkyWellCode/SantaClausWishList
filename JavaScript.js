var wishNumber = 0;
var list = new Map();
function wishAdded() {
  var wish = $('#myWish').val();
  list.set(wishNumber, wish);
  alert("You wish has been added succesfully!");
  ++wishNumber;
  return false;
}

function search() {
  var wish = $('#searchWish').val(), stop = 0;
  for (var i = 0; i < wishNumber && stop == 0; ++i) {
    var position = i, checkThisWish = list.get(position);
    if (checkThisWish == wish) {
      alert("Your wish is on Santa's list!");
      stop = 1;
    }
  }
  if (stop == 0) {
    alert("Your wish is missing from Santa's list");
  }
  return false;
}
