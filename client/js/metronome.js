let context;
let cymbalBuffer = null;
window.addEventListener('load', init, false);
function init() {
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();
    loadSound();
  }
  catch (e) {
    alert('Web audio not supported by browser');
  }
}

function promisifiedInit() {
  return new Promise((resolve, reject) => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();
    if (context) resolve();
    else reject();
  })
}
function loadSound(url) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
      context.decodeAudioData(request.response, (buffer) => {
        cymbalBuffer = buffer;
        console.log('decode hit');
        playSound(buffer);
      }, onError);
    }
    request.onError = () => {
      reject();
    }
    request.send();
  });

}

function playSound(buffer) {
  console.log('buffer is', buffer);
  let source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.start(0);
}
