var buttons = 1, winnerButton = 0;
function addButtons() {
  var numberOfButtons = document.getElementById("numberOfButtons").value, winnerNumber = Math.floor(Math.random() * numberOfButtons) + 1;
  winnerButton = winnerNumber;
  for (var i = 1; i <= numberOfButtons; ++i) {
    $('#insertButtons').append(`
        <button type="button" class="btn btn-secondary" id="` + buttons + `" onClick="return guessButton(this.id)">Button ` + buttons + `</button>
      `)
    ++buttons;
  }
}

function guessButton(clicked_id) {
  var clickedButton = clicked_id;
  if(clickedButton == winnerButton) {
    $('#winOrLose').append(`
      <div class="font">
        <p id="win" style="color:blue; font-size:35px;"> </p>
      </div>
      `);
    document.getElementById("win").innerHTML = "Congratulation, you won!";
  } else {
    $('#winOrLose').append(`
      <div class="font">
        <p id="lose" style="color:red; font-size:35px;"> </p>
      </div>
      `);
    document.getElementById("lose").innerHTML = "Wrong button! The winner button was: Button " + winnerButton + ". Better luck next time!";
  }
}
