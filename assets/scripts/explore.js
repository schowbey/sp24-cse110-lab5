// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  var select = document.getElementById('voice-select');
  let voices = [];

  function populateVoiceList() {            // code from Web Speech API documentation (provided) 
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      select.appendChild(option);
    }
    console.log(voices);
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  // next change voice based on user selection. 
  // let utterance = new SpeechSynthesisUtterance("Hello world!");
  // speechSynthesis.speak(utterance);
  var playBtn = document.querySelector('button');
  var text = document.getElementById('text-to-speak');
  var face = document.querySelector('img[alt="Smiling face"]');
  playBtn.addEventListener("click", function() {
    face.src = "assets/images/smiling-open.png";
    var selectedOption = select.options[select.selectedIndex];
    let utterance = new SpeechSynthesisUtterance(text.value);
    utterance.lang = selectedOption.getAttribute("data-lang");
    speechSynthesis.speak(utterance);
    utterance.onend = function() {
      face.src = "assets/images/smiling.png";
    };
  });
}