const root = document.documentElement;
const scene = document.querySelector('.scene');
const emojiElements = document.querySelectorAll('.emoji');
const emojis = [
    '👑', '🍰', '🏆', '👩🏾', '😁',
    '🍾', '🎊', '🏅', '🌞', '🥰',
    '🎇', '🍷', '🥇', '👼🏾', '🥳',
    '🎉', '☀️', '💕', '👩‍👦', '😍',
    '🎆', '🎂', '🎁', '👸🏾', '🎈'
];

const getSceneCoordinates = (x, y) => {
  const rect = scene.getBoundingClientRect();
  
  root.style.setProperty('--x', x - (rect.left + Math.floor(rect.width / 2)));
  root.style.setProperty('--y', y - (rect.top + Math.floor(rect.height / 2)));
}

const addEmoji = ({ clientX, clientY }) => {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const text = document.createTextNode(emoji);
  const node = document.createElement('div');
  
  node.appendChild(text);
  node.classList.add('emoji');
  node.style.left = clientX + 'px';
  node.style.top = clientY + 'px';
  node.addEventListener('animationend', () => node.remove());
  
  getSceneCoordinates(clientX, clientY);
  document.body.insertAdjacentElement('beforeend', node);
  
};

document.body.addEventListener('mousemove', _.throttle(addEmoji, 100));
document.body.addEventListener('touchstart', _.throttle(addEmoji, 0.01)); //only creates and add emoji at center for mobile
