let audioFileURL = 'http://www.wavlist.com/soundfx/026/cymbal1.wav';

let context = new (window.AudioContext || window.webkitAudioContext)();

let xhr = new XMLHttpRequest();
xhr.open('GET', audioFileURL);
xhr.responseType = 'arraybuffer';
xhr.onload = function() {
  context.decodeAudioData(xhr.response, audio => {
    let buffer = context.createBufferSource();
    buffer.connect(context.destination);
    buffer.buffer = audio;
    buffer.start(0);
  })
}
xhr.send();
