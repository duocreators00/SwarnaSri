// Generate sparkles
const hero = document.getElementById('hero');
for (let i = 0; i < 50; i++) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.top = Math.random() * window.innerHeight + 'px';
  sparkle.style.setProperty('--x', (Math.random() * 400 - 200) + 'px');
  sparkle.style.setProperty('--y', (Math.random() * 400 - 200) + 'px');
  hero.appendChild(sparkle);
}

// Hide hero after 4.5s
setTimeout(() => {
  hero.classList.add('hidden');
  document.getElementById('surprise').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: "smooth" });
}, 4500);
