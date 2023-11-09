const audio = document.querySelector("#audio");
const mute = document.querySelector("#mute-button");
const muteAudio = () => {
    audio.muted = !audio.muted;
    mute.innerHTML = audio.muted
      ? '<i class="fa-solid fa-volume-xmark"></i>'
      : '<i class="fa-solid fa-volume-high"></i>';
  };
mute.addEventListener("click", muteAudio);

