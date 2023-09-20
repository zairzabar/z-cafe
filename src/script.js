const audio = document.querySelector("audio");
const playBtn = document.querySelector("#play");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
});

// todo: add styles to the controls, need only play & pause button and volume control buttons
// todo: deploy the website
