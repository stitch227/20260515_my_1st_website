/* ============================================================
   script_home.js  —  Sangkyeong Kim Portfolio
   ============================================================ */

window.addEventListener("load", function () {

	/* ---------------------------------------------------------------- */
	/* 0. 섹션별 헤더 색상 변경                                            */
	/* ---------------------------------------------------------------- */
	const sections = [
		{ id: 'hero',        logo: '#ece1cf', nav: 'rgba(237,225,207,0.5)' },
		{ id: 'about',       logo: '#1A0905', nav: 'rgba(26,9,5,0.5)'      },
		{ id: 'works',       logo: '#ece1cf', nav: 'rgba(237,225,207,0.5)' },
		{ id: 'imagery-cta', logo: '#FAF7F2', nav: 'rgba(250,247,242,0.5)' },
		{ id: 'contact',     logo: '#ece1cf', nav: 'rgba(237,225,207,0.5)' },
	];

	const headerLogo  = document.querySelector('.header-logo');
	const headerLinks = document.querySelectorAll('.header-nav a');

	const headerObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const match = sections.find(s => s.id === entry.target.id);
				if (match) {
					headerLogo.style.color = match.logo;
					headerLinks.forEach(a => a.style.color = match.nav);
				}
			}
		});
	}, { threshold: 0.4 });

	sections.forEach(s => {
		const el = document.getElementById(s.id);
		if (el) headerObserver.observe(el);
	});

	/* ---------------------------------------------------------------- */
	/* 1. Hero — 단어 & 글리프 사이클링                                    */
	/* ---------------------------------------------------------------- */
	const WORDS  = ["UNEARTHS", "COMPOSES", "RESONATES"];
	const GLYPHS = [
		{ char: "S", img: "url('https://cdn.midjourney.com/dae75a75-b6e3-43ca-b09c-d31125ca1a00/0_1.png')" },
		{ char: "T", img: "url('https://cdn.midjourney.com/60733f0a-ca83-4649-b822-566784c6d7e7/0_0.png')" },
		{ char: "H", img: "url('https://cdn.midjourney.com/06ac66d7-56b6-4183-b8a2-534eda63f735/0_1.png')" },
	];
	let current = 0;

	const wordEl  = document.getElementById("heroWord");
	const glyphEl = document.getElementById("heroGlyph");

	if (!wordEl || !glyphEl) return;

	const HOLD_DURATION  = 1.4;
	const SLIDE_DURATION = 0.4;
	const EXIT_DURATION  = 0.3;
	const ROTATE_HALF    = 0.25;

	wordEl.textContent  = WORDS[0];
	glyphEl.textContent = GLYPHS[0].char;
	glyphEl.style.backgroundImage = GLYPHS[0].img;
	gsap.set(wordEl,  { y: "0%", opacity: 1 });
	gsap.set(glyphEl, { rotation: 0, opacity: 1 });

	function cycleNext() {
		current = (current + 1) % WORDS.length;
		const nextWord  = WORDS[current];
		const nextGlyph = GLYPHS[current];

		const tl = gsap.timeline({ onComplete: scheduleNext });
		tl.to(wordEl, { y: "-110%", opacity: 0, duration: EXIT_DURATION, ease: "power2.in" });
		tl.call(function () {
			wordEl.textContent = nextWord;
			gsap.set(wordEl, { y: "110%", opacity: 0 });
		});
		tl.to(wordEl, { y: "0%", opacity: 1, duration: SLIDE_DURATION, ease: "power3.out" });

		gsap.timeline({ delay: EXIT_DURATION * 0.3 })
    		.to(glyphEl, { scaleX: 0, rotation: "+=60", duration: ROTATE_HALF, ease: "power2.in" })
    		.call(function () {
       			glyphEl.textContent = nextGlyph.char;
        		glyphEl.style.backgroundImage = nextGlyph.img;
    		})
    		.to(glyphEl, { scaleX: 1, rotation: "+=60", duration: ROTATE_HALF, ease: "power2.out" });
	}

	function scheduleNext() {
		gsap.delayedCall(HOLD_DURATION, cycleNext);
	}

	gsap.delayedCall(HOLD_DURATION, cycleNext);


    












	/* ---------------------------------------------------------------- */
	/* 2. Ticker marquee                                                  */
	/* ---------------------------------------------------------------- */
	const TICKER_ITEMS = [
		"Brand Identity",
		"Type Design",
		"Product Design",
		"Editorial Design",
		"Photography",
	];

	const track = document.getElementById("tickerTrack");
	if (!track) return;

	function buildSet() {
		const frag = document.createDocumentFragment();
		TICKER_ITEMS.forEach(function (label) {
			const item = document.createElement("span");
			item.className = "ticker__item";
			item.textContent = label;
			frag.appendChild(item);

			const diamond = document.createElement("span");
			diamond.className = "ticker__diamond";
			diamond.setAttribute("aria-hidden", "true");
			frag.appendChild(diamond);
		});
		return frag;
	}

	track.appendChild(buildSet());
	track.appendChild(buildSet());

	requestAnimationFrame(function () {
		requestAnimationFrame(function () {
			const items   = track.querySelectorAll(".ticker__item");
			const oneSetW = Array.from(items)
				.slice(0, TICKER_ITEMS.length)
				.reduce(function (acc, el) { return acc + el.offsetWidth; }, 0);

			gsap.to(track, {
				x: -oneSetW,
				duration: oneSetW / 90,
				ease: "none",
				repeat: -1,
				modifiers: {
					x: function (x) {
						return (parseFloat(x) % oneSetW) + "px";
					},
				},
			});
		});
	});




	/* ---------------------------------------------------------------- */
	/* 3. About 섹션 애니메이션                                            */
	/* ---------------------------------------------------------------- */
	const aboutSection = document.querySelector('.about');
	if (aboutSection) {
		const collage  = aboutSection.querySelector('.about__photo');
		const infolist = aboutSection.querySelector('.about__infolist');
		const imWrap   = aboutSection.querySelector('.about__im-wrap');
		const bottom   = aboutSection.querySelector('.about__bottom');

		const aboutObserver = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (!entry.isIntersecting) return;
				aboutObserver.disconnect();

				gsap.timeline()
					.to(collage,  { opacity: 1, y: 0, duration: 0.7, delay: 0.1, ease: 'power3.out' })
					.to(infolist, { opacity: 1, y: 0, duration: 0.6, delay: 0.03, ease: 'power3.out' }, '-=0.45')
					.to(imWrap,   { opacity: 1, y: 0, duration: 1.2, delay: 0.28, ease: 'power3.out' }, '-=0.5')
					.to(bottom,   { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6');
			});
		}, { threshold: 0.2,
    		 rootMargin: '0px 0px -20% 0px'

		});

		aboutObserver.observe(aboutSection);
	}












	/* ---------------------------------------------------------------- */
	/* 4. Works 캐러셀                                                    */
	/* ---------------------------------------------------------------- */
	const worksTrack = document.getElementById('worksTrack');
	if (worksTrack) {
		let currentIndex = 0;
		const slides = worksTrack.querySelectorAll('.works__slide');
		const total = slides.length;
		let isScrolling = false;
		let inCarousel = false;

		// 섹션 진입/이탈 쿠션용
		let entryLocked = false;
		let exitScrollCount = 0;

		function moveTo(index) {
			currentIndex = Math.max(0, Math.min(index, total - 1));
			const slideWidth = slides[0].offsetWidth;

			let translateX;
			if (currentIndex === total - 1) {
                const trackWidth = worksTrack.scrollWidth;
                translateX = trackWidth - window.innerWidth + 100;
			} else {
				translateX = currentIndex * slideWidth;
			}

			worksTrack.style.transition = 'transform 0.8s cubic-bezier(0.16, 1.2, 0.3, 1.1)';
			worksTrack.style.transform = 'translateX(-' + translateX + 'px)';
		}

        
		// 섹션 진입 감지
        const worksSection = worksTrack.closest('.works');

        worksSection.addEventListener('mouseenter', function() {
            inCarousel = true;
            exitScrollCount = 0;
            entryLocked = true;
            setTimeout(function() {
                entryLocked = false;
            }, 1300);
        });

        worksSection.addEventListener('mouseleave', function(e) {
            const to = e.relatedTarget;
            if (!to || !document.body.contains(to)) return; // 창 밖으로 나간 거면 무시
            if (worksSection.contains(to)) return; // ← 섹션 안 요소로 이동한 거면 무시
            if (to.closest('#site-header')) return; // ← 헤더로 나간 거면 무시
            inCarousel = false;
            exitScrollCount = 0;
            moveTo(0);
        });
        
        
		const glyphs = worksTrack.querySelectorAll('.works__glyph');
		glyphs.forEach(function(glyph) {
    		const imgUrl = glyph.dataset.img;
    		if (!imgUrl) return;

    		glyph.addEventListener('mouseenter', function() {

				worksSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
				
        		glyph.style.backgroundImage =
           			 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("' + imgUrl + '")';
        		glyph.style.backgroundSize = 'cover';
        		glyph.style.backgroundPosition = 'center';
       		 	glyph.style.webkitBackgroundClip = 'text';
        		glyph.style.backgroundClip = 'text';
        		glyph.style.webkitTextFillColor = 'transparent';
        		glyph.style.color = 'transparent';
    		});

   			glyph.addEventListener('mouseleave', function() {
        		glyph.style.backgroundImage = '';
        		glyph.style.backgroundSize = '';
        		glyph.style.backgroundPosition = '';
        		glyph.style.webkitBackgroundClip = '';
        		glyph.style.backgroundClip = '';
        		glyph.style.webkitTextFillColor = '';
        		glyph.style.color = '';
    		});
		});




		window.addEventListener('wheel', function(e) {
			if (!inCarousel || entryLocked) return;


            // 글리프 영역(bounding box) 안에 커서가 있는지 체크

            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const isOnGlyph = Array.from(glyphs).some(function(glyph) {
                const rect = glyph.getBoundingClientRect();
                const padX = 80; // 좌우 여백 (px) - 숫자 키워서 조절
                const padY = 40;  // 상하 여백 (필요하면 추가)
                return mouseX >= rect.left - padX && mouseX <= rect.right + padX &&
                    mouseY >= rect.top - padY  && mouseY <= rect.bottom + padY;
            });
            if (!isOnGlyph) return;



			const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
			if (Math.abs(delta) < 60) return;

			if (delta < 0 && currentIndex === 0) {
				return;
			}

			if (delta > 0 && currentIndex === total - 1) {
                if (isScrolling) {
                e.preventDefault();
                return;
                }
                exitScrollCount++;
                if (exitScrollCount < 2) {
                    e.preventDefault();
                    isScrolling = true;
                    setTimeout(function() { isScrolling = false; }, 600);
                    return;
                }
                exitScrollCount = 0;
                return;
            }

			e.preventDefault();
			exitScrollCount = 0;
			isScrolling = true;

			if (delta > 0) {
				moveTo(currentIndex + 1);
			} else {
				moveTo(currentIndex - 1);
			}

			setTimeout(function() {
				isScrolling = false;
			}, 1000);

		}, { passive: false });

		// 터치
		let startX = 0;

		worksTrack.addEventListener('touchstart', function(e) {
			startX = e.touches[0].clientX;
		}, { passive: true });

		worksTrack.addEventListener('touchend', function(e) {
			const diff = startX - e.changedTouches[0].clientX;
			if (diff > 30 && currentIndex < total - 1) {
				moveTo(currentIndex + 1);
			} else if (diff < -30 && currentIndex > 0) {
				moveTo(currentIndex - 1);
			}
		});
	}



    

    /* ---------------------------------------------------------------- */
	/* 5. AI Archive 섹션 애니메이션                                       */
	/* ---------------------------------------------------------------- */
	const aiArchive = document.querySelector('.ai-archive');
	if (aiArchive) {
		const captured  = aiArchive.querySelector('.ai-archive__captured');
		const glyph     = aiArchive.querySelector('.ai-archive__glyph');
		const generated = aiArchive.querySelector('.ai-archive__generated');
		const lines     = aiArchive.querySelectorAll('.ai-archive__line');
		const img       = aiArchive.querySelector('.ai-archive__img');
		const cta       = aiArchive.querySelector('.ai-archive__cta');

		gsap.set([captured, glyph, generated], { opacity: 0, y: 40 });
		gsap.set(lines, { scaleX: 0, transformOrigin: 'left center' });
		gsap.set(img, { opacity: 0, y: 60 });
		gsap.set(cta, { opacity: 0 });

		const aiObserver = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (!entry.isIntersecting) return;
				aiObserver.disconnect();

				gsap.timeline()
					.to(captured,  { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
					.to(lines[0],  { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.4')
					.to(glyph,     { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
					.to(lines[1],  { scaleX: 1, duration: 0.5, ease: 'power3.out' }, '-=0.4')
					.to(generated, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.21')
					.to(img,       { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
					.to(cta,       { opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.4');
			});
		}, { threshold: 0.2 });

		aiObserver.observe(aiArchive);
	}

    

    /* ---------------------------------------------------------------- */
	/* 6. AI Archive 비디오 플레이리스트                                   */
	/* ---------------------------------------------------------------- */
	const aiVideo = document.getElementById('aiVideo');
	if (aiVideo) {
		const playlist = [
			{ src: 'https://cdn.midjourney.com/video/faffb0be-6725-4abe-b3fc-d769e138b9c3/3.mp4', start: 0.2, duration: 2.5 },
			{ src: 'https://cdn.midjourney.com/video/7d54aea5-dee3-42fc-b502-bc1bea5357b5/0.mp4', start: 1, duration: 2 },
			{ src: 'https://cdn.midjourney.com/video/737b6412-1944-43f4-99fa-391f6fbc5267/3.mp4', start: 0, duration: 1.2 },
		];
		let playIndex = 0;
		let timer = null;

		function playNext() {
			clearTimeout(timer);
			const current = playlist[playIndex];
			aiVideo.src = current.src;
			aiVideo.load();

			aiVideo.addEventListener('loadedmetadata', function onLoaded() {
				aiVideo.removeEventListener('loadedmetadata', onLoaded);
				aiVideo.currentTime = current.start;
				aiVideo.play();

				timer = setTimeout(function() {
					playIndex = (playIndex + 1) % playlist.length;
					playNext();
				}, current.duration * 1000);
			});
		}

		playNext();
	}




	/* ---------------------------------------------------------------- */
	/* 7. Contact 섹션 애니메이션                                          */
	/* ---------------------------------------------------------------- */
	const contactSection = document.querySelector('.beige-section');
	if (contactSection) {
		const title    = contactSection.querySelector('.contact__title');
		const desc     = contactSection.querySelector('.contact__desc');
		const topRight = contactSection.querySelector('.contact__top-right');

		gsap.set([title, desc, topRight], { opacity: 0, y: 40 });

		const contactObserver = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (!entry.isIntersecting) return;
				contactObserver.disconnect();

				gsap.timeline()
					.to(title,    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
					.to(desc,     { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
					.to(topRight, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4');
			});
		}, { threshold: 0.2 });

		contactObserver.observe(contactSection);
	}

}); // window load 끝


window.addEventListener('scroll', () => {
  const header = document.querySelector('#site-header');
  const beige = document.querySelector('.beige-section');
  const footer = document.querySelector('.footer-wrap');
  const about = document.querySelector('.about');
  const works = document.querySelector('.works');
  
  if (!header || !beige || !footer || !about || !works) return;

  const headerHeight = header.offsetHeight;  // ← 추가

  const beigeTop = beige.getBoundingClientRect().top;
  const footerTop = footer.getBoundingClientRect().top;
  const aboutTop = about.getBoundingClientRect().top;
  const aboutBottom = about.getBoundingClientRect().bottom;
  const worksTop = works.getBoundingClientRect().top;

  const inAbout = aboutTop <= headerHeight && aboutBottom > headerHeight;  // ← 수정
  const inWorks = worksTop <= headerHeight;  // ← 수정

  header.classList.remove('header-dark', 'header-red');

  if (beigeTop <= headerHeight || footerTop <= headerHeight) {  // ← 수정
    header.classList.add('header-red');
  } else if (inAbout && !inWorks) {
    header.classList.add('header-dark');
  }
});


document.querySelectorAll('.works__slide[data-href]').forEach(slide => {
  slide.style.cursor = 'pointer';
  slide.addEventListener('click', () => {
    window.location.href = slide.dataset.href;
  });
});






