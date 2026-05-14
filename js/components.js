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

  // 모달 자동 생성
  document.body.insertAdjacentHTML("beforeend", `
    <div id="figmaModal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.7); z-index:10000; align-items:center; justify-content:center;">
      <iframe width="800" height="450" src="https://embed.figma.com/proto/l3A8gKqCK7VWDvQfwhbsW5/Untitled?node-id=225-52&scaling=min-zoom&content-scaling=fixed&page-id=71%3A820&embed-host=share" allowfullscreen></iframe>
    </div>
  `);

  const btn = document.getElementById('headerAboutBtn');
  const modal = document.getElementById('figmaModal');

  btn.addEventListener('click', e => {
    e.preventDefault();
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
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

    el.style.display = 'block';
    el.style.width = '100%';
    el.style.textAlign = 'center';
  });
}

window.addEventListener('resize', fitFooterName);

createFooter();
