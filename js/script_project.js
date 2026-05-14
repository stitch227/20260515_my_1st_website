/* script_project.js — Individual Project Page (shared) */

// ── Parallax hero ────────────────────────────────────────
const heroBg = document.querySelector('.project-hero__bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `translateY(${y * 0.35}px)`;
    heroBg.style.opacity = Math.max(0, 1 - y / 600);
  }, { passive: true });
}

// ── Reveal on scroll ─────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.04}s`;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// ── Nav border on scroll ─────────────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 60
      ? 'rgba(255,255,255,0.12)'
      : 'rgba(255,255,255,0.06)';
  }, { passive: true });
}





// 이미지 슬라이드
const imgA = document.querySelector('.project-gallery__img--a');
const imgB = document.querySelector('.project-gallery__img--b');

if (imgA && imgB) {
  let showingA = true;
  setInterval(() => {
    if (showingA) {
      imgA.style.opacity = '0';
      imgB.style.opacity = '1';
    } else {
      imgA.style.opacity = '1';
      imgB.style.opacity = '0';
    }
    showingA = !showingA;
  }, 1750); // 2초마다 전환, 숫자 바꾸면 속도 조절
}


const slidesB = [
  document.querySelector('.gallery-slide-b--1'),
  document.querySelector('.gallery-slide-b--2'),
  document.querySelector('.gallery-slide-b--3'),
].filter(Boolean);

if (slidesB.length) {
  let current = 0;
  setInterval(() => {
    slidesB[current].style.opacity = '0';
    current = (current + 1) % slidesB.length;
    slidesB[current].style.opacity = '1';
  }, 1750);
}



const slidesP3A = [
  document.querySelector('.gallery-slide-p3a--1'),
  document.querySelector('.gallery-slide-p3a--2'),
].filter(Boolean);

if (slidesP3A.length) {
  let current = 0;
  setInterval(() => {
    slidesP3A[current].style.opacity = '0';
    current = (current + 1) % slidesP3A.length;
    slidesP3A[current].style.opacity = '1';
  }, 2000);
}