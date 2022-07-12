function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop the function if key is not in 'asdfghjkl'
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.toggle('playing');
    audio.currentTime = 0; // reset the audio to the start
    audio.play();
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);