// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // initializing confetti
  const jsConfetti = new JSConfetti();

  // changing webpage elements based on user selection (works via event listeners)
  var dropdown = document.getElementById("horn-select");
  var image = document.querySelector('img');
  var audio  = document.querySelector('audio');
  var currentHorn = '';
  var partyHorn = false;
  dropdown.addEventListener("change", function() {
    var idx = dropdown.selectedIndex;
    if (idx !== 0) {
      // get selected index
      currentHorn = dropdown.options[idx].value;
      // change image
      let strImage = "assets/images/" + currentHorn + ".svg";
      image.src = strImage;
      // change audio
      let strAudio = "assets/audio/" + currentHorn + ".mp3";
      audio.src = strAudio;
      // checking if chosen horn is party horn
    }
  });

  // changing webpage elements based on volume slider
  var slider = document.getElementById('volume');
  slider.addEventListener('change', function() {
    var value = slider.value;
    console.log(value);
    audio.volume = (value/100);   // changing volume attribute of the audio element
    var icon = document.querySelector('img[alt="Volume level 2"]');
    if(value==0){
      icon.src = "assets/icons/volume-level-0.svg";
    } else if (value < 33){
      icon.src = "assets/icons/volume-level-1.svg";
    } else if (value < 67){
      icon.src = "assets/icons/volume-level-2.svg";
    } else {
      icon.src = "assets/icons/volume-level-3.svg";
    }
  }); 

  // playing audio element once 'play sound' button has been clicked
  var playBtn = document.querySelector('button');
  playBtn.addEventListener('click', function(){
    audio.play();
    if (currentHorn == "party-horn"){
      jsConfetti.addConfetti();
    }
  });
}