function playSound(event, dataKey) {
  let audio, key;

  if (event === 'click') {
    audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    key = document.querySelector(`.key[data-key="${dataKey}"]`);  
  } else {
    audio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  }

  if (!audio) return;
  
  key.classList.toggle('playing');
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  
  event.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', function() {
  const dataKey = this.dataset.key;
  playSound('click', dataKey);
}));

window.addEventListener('keydown', playSound);