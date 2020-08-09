
var timeOut;

function startTimer(){
    // Get HTML elements values
    var hours = document.getElementById('hours').value;
    var minutes = document.getElementById('minutes').value;
    var seconds = document.getElementById('seconds').value;
    var ring = document.getElementById('ring').value;

    // Show HOURS:MINUTES:SECONDS on the screen
    document.getElementById("output").innerHTML = hours + ":" + minutes + ":" + seconds;

    // Translate values in milliseconds
    var hours_ms = hours * 3600000; 
    var minutes_ms = minutes * 60000; 
    var seconds_ms = seconds * 1000; 

    // Total in milliseconds
    var total_ms = hours_ms + minutes_ms + seconds_ms;
    console.log(total_ms);

    if (total_ms) {
      // Timer
      timeOut = setTimeout(playAudio, total_ms);

      function playAudio(){
          console.log(ring);
          switch(ring) {
              case "ring1":
                  var audioFile = new Audio('audio/ring1.mp3');
                  break;
              case "ring2":
                  var audioFile = new Audio('audio/ring2.mp3');
                  break;
                case "ring3":
                  var audioFile = new Audio('audio/ring3.mp3');
                  break;
                case "ring4":
                  var audioFile = new Audio('audio/ring4.mp3');
            } 
          audioFile.play();
          document.getElementById("output").innerHTML = "00:00:00";
      }
    }
  else { 
    console.log("empty!");
  }


}

function stopTimer(){
  clearTimeout(timeOut);
  document.getElementById("output").innerHTML = "00:00:00";
}