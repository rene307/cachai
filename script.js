const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');
menuToggle.addEventListener('click', () => {
  const opened = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(opened));
  menuToggle.setAttribute('aria-label', opened ? 'Cerrar menú' : 'Abrir menú');
  menuToggle.textContent = opened ? '✕' : '☰';
});
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('showVideoInfo').addEventListener('click', () => {
  const info = document.getElementById('reelInfo');
  info.hidden = !info.hidden;
});
