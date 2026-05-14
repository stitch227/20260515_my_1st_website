const HEADER_HTML = `
<header id="site-header">
  <a href="index.html" class="header-logo">Sangkyeong Kim</a>
  <nav class="header-nav">
    <a href="works.html">Works</a>
    <a href="imagery.html">IA Achive</a>
    <a href="#" id="headerAboutBtn">About</a>
    <a href="mailto:2232296@donga.ac.kr">Contact</a>
  </nav>
</header>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", HEADER_HTML);

  const btn = document.getElementById('headerAboutBtn');
  const modal = document.getElementById('figmaModal');
  btn.addEventListener('click', e => { e.preventDefault(); modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex'; });
});




function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer-wrap';

  footer.innerHTML = `
    <div class="footer-top">
      <div class="footer-info">
        <p>@ieojida</p>
        <p>2232296@donga.ac.kr</p>
        <p>+82 10-8127-5989</p>
        <p>Based in Buan, South Korea.</p>
        <p>© 2026 [ SANGKYEONG KIM ]. All rights reserved.</p>
        <p class="say-creative">stay creative :D</p>
      </div>
      <div class="footer-yarndings">V</div>
    </div>
    <p class="footer-name">Sangkyeong Kim</p>
  `;

  document.body.appendChild(footer);
  fitFooterName();
}
function fitFooterName() {
  const el = document.querySelector('.footer-name');
  if (!el) return;

  const parentEl = document.querySelector('.footer-wrap');
  if (!parentEl) return;

  document.fonts.ready.then(() => {
    const availableWidth = parentEl.clientWidth * (1 - 0.038 * 2);

    el.style.display = 'inline-block';
    el.style.width = 'auto';

    let size = 200;
    el.style.fontSize = size + 'px';

    while (el.offsetWidth > availableWidth && size > 10) {
      size -= 0.5;
      el.style.fontSize = size + 'px';
    }

    // 복구 + 중앙정렬 명시
    el.style.display = 'block';
    el.style.width = '100%';
    el.style.textAlign = 'center';
  });
}

window.addEventListener('resize', fitFooterName);

createFooter();