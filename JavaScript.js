var wishNumber = 0, list = new Map();

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
      $('#1').remove();
      $('#wishCheck').append(`
        <div id="1">
          <div class="checkBoxAnswear"
              <p class="font" id="+ id +" style="color:blue; font-size:35px;">Your wish is on Santa's list!</p>
          </div>
        </div>
        `);
      stop = 1;
    }
  }
  if (stop == 0) {
    $('#1').remove();
    $('#wishCheck').append(`
      <div id="1">
        <div class="checkBoxAnswear"
          <p class="font" id="+ id +" style="color:red; font-size:35px;"> Your wish is not on Santa's list! </p>
        </div>
      </div>
    `);
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
