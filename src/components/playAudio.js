let music;
function pauseAudio() {
  if (music && !music.paused) {
    music.pause();
    music.currenTime = 0;
  }
}
export default function playAudio(audio, mute, status, playing) {
  if (playing === false) {
    return;
  }

  if (status == "mute") {
    if (mute == false) {
      music.volume = 0.4;
    } else {
      music.volume = 0;
    }
  } else {
    pauseAudio();
    music = new Audio(audio);
    music.currenTime = 0;
    music.play();
    music.loop = true;
    if (mute == true) {
      music.volume = 0;
    }
  }
}
