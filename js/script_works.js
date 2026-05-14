/* script_works.js — Horizontal Scroll Works */

(function () {
  const CARD_COUNT = 5;

  const section  = document.getElementById('works');
  const track    = document.getElementById('works-track');
  const fill     = document.getElementById('hud-fill');
  const current  = document.getElementById('hud-current');
  const hint     = document.getElementById('works-hint');
  const cards    = document.querySelectorAll('.works-card');

  if (!section || !track) return;

  function onScroll() {
    const rect        = section.getBoundingClientRect();
    const sectionH    = section.offsetHeight - window.innerHeight;
    const scrolled    = -rect.top;
    // 0 ~ 1 사이 진행도
    const progress    = Math.min(1, Math.max(0, scrolled / sectionH));

    // 트랙 이동: progress 0 → translateX(0), progress 1 → translateX(-(CARD_COUNT-1)*80vw)
    const cardWidth   = window.innerWidth <= 768 ? 80 : 68; // vw
    const maxMove     = (CARD_COUNT - 1) * cardWidth; // vw 단위
    const moveVw      = progress * maxMove;
    track.style.transform = `translateX(-${moveVw}vw)`;

    // 현재 카드 인덱스 (0-based)
    const rawIndex    = progress * (CARD_COUNT - 1);
    const activeIndex = Math.round(rawIndex);

    // 카드별 활성 상태
    cards.forEach((card, i) => {
      if (i === activeIndex) {
        card.classList.add('is-active');
      } else {
        card.classList.remove('is-active');
      }
    });

    // HUD 카운터
    if (current) {
      current.textContent = String(activeIndex + 1).padStart(2, '0');
    }

    // HUD 진행 바: 현재 카드 안에서의 세부 진행도
    if (fill) {
      const cardProgress = (rawIndex % 1); // 0~1, 현재 카드 내 진행
      fill.style.width = (cardProgress * 100) + '%';
    }

    // 힌트 숨기기
    if (hint) {
      if (progress > 0.05) {
        hint.classList.add('is-hidden');
      } else {
        hint.classList.remove('is-hidden');
      }
    }
  }

  // 첫 카드 활성화
  if (cards.length > 0) cards[0].classList.add('is-active');

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();