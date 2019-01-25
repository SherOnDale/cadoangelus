require('opn')('https://egoist.sh', {
  wait: false
});

const words = [
  'osu!',
  'gahaha!',
  'moshimoshi?',
  'hentai!',
  'dame!',
  'yada!',
  'kimochi..',
  'baka!',
  'nande?',
  'yamedei!',
  'arigato!',
  'urusai!'
];

console.log(words[Math.floor(Math.random() * words.length)]);
