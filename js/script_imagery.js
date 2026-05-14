gsap.registerPlugin(ScrollTrigger);

/* ════════════════════════════════════════════
   LENIS    여기까지가 정상이야 더 이상 뒤로 가지 그만.
════════════════════════════════════════════ */
const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

/* ════════════════════════════════════════════
   섹션 1: PHOTOS
════════════════════════════════════════════ */
const CONFIG = { count: 15, holeRadius: 280 };

const SETS = {
  A: [
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778550811/20220520_190104_dvkh2j.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778550835/20220607_144201_nqrkb9.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778550854/20220617_191333_ahd5bs.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778551042/20220628_185032_s6vfqw.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778551067/20220716_192118_v6qsrd.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778557752/20220225_161943_ms0txb.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778551158/20221026_125507_a8iqzp.jpg",


    "https://res.cloudinary.com/dzayipaad/image/upload/v1778661492/20211019_145817-2_mss3h5.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778661493/20220618_174322_ysdsdh.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778661493/20220428_131834_ryjudi.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778661493/20220604_162722_pkmtuv.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778661493/20220618_180306_j8gd8n.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778661493/20220415_172025_vja6zi.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778661493/20220630_160410_iev5te.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778661493/20220630_173414_t2mrau.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778661494/20220906_160735_wrgrjs.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778661494/20221026_125507_vi1wiu.jpg",



  ],
  B: [
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778560425/20220519_194116_dovlqt.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778560493/20220527_194548_3_vqhspx.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778560488/20220629_215126_rezyzc.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778560517/20220520_200006_lfu7me.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778560401/20220716_193933_vlimfy.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778560422/20220519_195852_1_hzbyer.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778560901/20220406_203959_z7n4i9.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778560889/20220506_192949_nj0gzx.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778560861/20220615_195355_ypni9s.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778560401/20220716_192246_seo1fm.jpg",

    "https://res.cloudinary.com/dzayipaad/image/upload/v1778662228/20230219_200750_10_ga0pc3.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778662227/20220519_193323_id8plg.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778662227/20220605_004954_1_et2rl0.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778662228/20220223_194208_trweeo.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663080/20220617_182215_cbuxmk.jpg"
  ],
  C: [
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663066/20210805_145455_bap6az.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663067/20220715_094547_necrrb.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663067/20220927_165409_1_rqcrw5.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663067/20220811_074726_rbwtij.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663069/20220729_154042_ljhdjl.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663068/20220411_172249_1_jwzrf3.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663070/20221001_175212_tg5s31.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663069/20220905_075345_gu2k5j.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663072/20220719_182145_zvvm3u.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663075/20220729_153558_xhelol.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663073/20221022_152808_1_axl8b0.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663077/20220630_193110_vmnrku.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663076/20220628_104841_qioagb.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663078/VideoCapture_20220804-181140_tnrpbr.jpg",
    "https://res.cloudinary.com/dzayipaad/image/upload/v1778663080/20220225_162142_1_fjkhwy.jpg"

  ],
};

const rand      = (a, b) => Math.random() * (b - a) + a;
const lerp      = (a, b, t) => a + (b - a) * t;
const clamp     = (v, a, b) => Math.max(a, Math.min(b, v));
const easeIO    = (t) => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2;


function getRingPosZoned(cW, cH, forceZone = null) {
  const cx = innerWidth / 2;
  const cy = innerHeight / 2;
  const holeRx = 320;
  const holeRy = 230;

  const zones = [
    { xMin: -cW*0.3,  xMax: cx*0.7,       yMin: -cH*0.3,  yMax: cy*0.7 },   // 0 좌상단
    { xMin: cx*0.3,   xMax: cx,            yMin: -cH*0.3,  yMax: cy*0.35 },  // 1 상단 좌중
    { xMin: cx,       xMax: cx*1.7-cW,    yMin: -cH*0.3,  yMax: cy*0.35 },  // 2 상단 우중
    { xMin: cx*1.1,   xMax: innerWidth,    yMin: -cH*0.3,  yMax: cy*0.7 },   // 3 우상단
    { xMin: cx*1.3,   xMax: innerWidth,    yMin: cy*0.3,   yMax: cy*1.7-cH },// 4 우측
    { xMin: cx*1.1,   xMax: innerWidth,    yMin: cy*1.2,   yMax: innerHeight },// 5 우하단
    { xMin: cx*0.3,   xMax: cx,            yMin: cy*1.5,   yMax: innerHeight },// 6 하단 좌중
    { xMin: cx,       xMax: cx*1.7-cW,    yMin: cy*1.5,   yMax: innerHeight },// 7 하단 우중
    { xMin: -cW*0.3,  xMax: cx*0.7,       yMin: cy*1.2,   yMax: innerHeight },// 8 좌하단
    { xMin: -cW*0.3,  xMax: cx*0.5,       yMin: cy*0.3,   yMax: cy*1.7-cH }, // 9 좌측
  ];

  const zone = forceZone !== null ? zones[forceZone] : zones[Math.floor(rand(0, zones.length))];

  let x = rand(zone.xMin, zone.xMax);
  let y = rand(zone.yMin, zone.yMax);

  const dx = (x + cW/2 - cx) / holeRx;
  const dy = (y + cH/2 - cy) / holeRy;
  if (dx*dx + dy*dy < 1) {
    const angle = Math.atan2(y + cH/2 - cy, x + cW/2 - cx);
    x = cx + Math.cos(angle) * holeRx * rand(1.15, 1.4) - cW/2;
    y = cy + Math.sin(angle) * holeRy * rand(1.15, 1.4) - cH/2;
  }

  return { x, y };
}



function getOut(cW, cH) {
  const pad = 350, s = Math.floor(rand(0,4));
  if (s===0) return { x: -cW-pad,         y: rand(0,innerHeight) };
  if (s===1) return { x: innerWidth+pad,   y: rand(0,innerHeight) };
  if (s===2) return { x: rand(0,innerWidth), y: -cH-pad };
  return           { x: rand(0,innerWidth), y: innerHeight+pad };
}

function makeSet(list) {
  const layer = document.getElementById("card-layer");

  const zoneIndices = [0,1,2,3,4,5,6,7,8,9].sort(() => Math.random() - 0.5);


  return Array.from({length: CONFIG.count}, (_, i) => {
    const el = document.createElement("img");
    el.src = list[i % list.length];
    el.classList.add("card");
    
    const ratios = [[4,3], [3,2], [16,9], [3,4], [2,3]];
    const ratio = ratios[Math.floor(rand(0, ratios.length))];
    const w = Math.round(rand(200, 260));
    const h = Math.round(w * ratio[1] / ratio[0]);
    
    Object.assign(el.style, { width:w+"px", height:h+"px", zIndex:Math.floor(rand(1,20)), opacity:"0" });
    layer.appendChild(el);
    const start=getOut(w,h), mid=getRingPosZoned(w,h, i < 10 ? zoneIndices[i] : null), end=getOut(w,h);
    el.style.transform = `translate(${start.x}px,${start.y}px)`;
    return { el, w, h, start, mid, end,
             startRot:rand(-60,60), midRot:rand(-25,25), exitRot:rand(-90,90) };
  });
}

function drawCards(cards, mode, t) {
  const et = easeIO(clamp(t,0,1));
  cards.forEach(c => {
    let x, y, rot, sc, op;
    if (mode==="in") {
      x=lerp(c.start.x,c.mid.x,et); y=lerp(c.start.y,c.mid.y,et);
      rot=lerp(c.startRot,c.midRot,et); sc=lerp(0.7,1,et); op=lerp(0,1,et);
    } else {
      x=lerp(c.mid.x,c.end.x,et); y=lerp(c.mid.y,c.end.y,et);
      rot=lerp(c.midRot,c.exitRot,et); sc=lerp(1,0.7,et); op=lerp(1,0,et);
    }
    c.el.style.transform = `translate(${x}px,${y}px) rotate(${rot}deg) scale(${sc})`;
    c.el.style.opacity = op;
  });
}

function hideSet(cards) {
  cards.forEach(c => {
    c.el.style.opacity="0";
    c.el.style.transform=`translate(${c.start.x}px,${c.start.y}px)`;
  });
}

const setA=makeSet(SETS.A), setB=makeSet(SETS.B), setC=makeSet(SETS.C);

ScrollTrigger.create({
  trigger: "#scroll-container",
  start: "top top",
  end: "bottom bottom",
  scrub: true,

  onUpdate(self) {
    const p = self.progress;

    if (p <= 0.25) {
      const t = p / 0.25;
      drawCards(setA, "in", t);
      hideSet(setB); hideSet(setC);

    } else if (p <= 0.50) {
      const t = (p - 0.25) / 0.25;
      drawCards(setA, "out", t);
      drawCards(setB, "in",  t);
      hideSet(setC);

    } else if (p <= 0.75) {
      const t = (p - 0.50) / 0.25;
      hideSet(setA);
      drawCards(setB, "out", t);
      drawCards(setC, "in",  t);

    } else {
      const t = (p - 0.75) / 0.25;
      hideSet(setA);
      hideSet(setB);
      drawCards(setC, "out", t);  // ← C가 겉으로 나가면서 섹션2 연결
    }
  },



  // ★ 섹션1 끝날 때 → setC도 같이 퇴장시키고 stage 숨김
  onLeave() {
    drawCards(setC, "out", 1);
    hideSet(setC);
    document.getElementById("stage").style.display = "none";
  },

  onEnterBack() {
    document.getElementById("stage").style.display = "block";
    document.getElementById("stage").style.pointerEvents = "none";
  },

});






/* ════════════════════════════════════════════
   섹션 2: MOTION — markclennon 방식
   
   핵심 원리 (스크린샷 분석):
   ┌─────────────────────────────────┐
   │  카드들이 세로로 쌓여있음         │
   │  스크롤 → 위 카드: perspective로 │
   │  사다리꼴처럼 원근감 있게 올라감  │
   │  아래 카드: 올라오며 정면에 펼쳐짐│
   │  overflow:hidden 박스 안에서     │
   │  img 자체도 y 패럴랙스           │
   └─────────────────────────────────┘
════════════════════════════════════════════ */

const MOTION_DATA = [
  { src: "https://cdn.midjourney.com/video/087baec3-92e6-47b3-bb58-8ab04eca86b3/1.mp4", title: "Midjourney_01",  sub: "# cinematic \n # retro editorial \n # warm gradient backdrop \n # reflective floor \n # motion blur legs", speed: 1.5 },
  { src: "https://cdn.midjourney.com/video/f76b37fc-a4a7-4133-8147-758e315ff757/0.mp4", title: "Midjourney_02",  sub: "# dreamy aquatic \n # hair flowing \n # bubbles \n #ethereal light \n # crystalline", startTime: 1.1, endTime: 4.1 },
  { src: "https://cdn.midjourney.com/video/cc46f9dc-0fbe-4d86-bbf7-8dfa1be99cbd/2.mp4", title: "Midjourney_03",  sub: "# savage \n # high contrast \n # razor sharp \n # bold red \n # cold elegance", startTime: 0.2, endTime: 3.95},
  { src: "https://cdn.midjourney.com/video/a0f41759-a102-4412-bc94-c6f62a62f110/3.mp4", title: "Midjourney_04",  sub: "# Iridescent Sea \n # Cumulus Clouds \n # rainbow halo \n # otherworldly \n # iridescent streaks", },
  { src: "https://cdn.midjourney.com/video/74312e38-9a1d-42a5-a9c9-3ba860c6e97e/0.mp4", title: "Midjourney_05",  sub: "# Vintage Film Grain \n # Cyanotype color grading \n # Melancholic Reverie \n # Windswept hair \n # Cinematic stillness",     },
  { src: "https://cdn.midjourney.com/video/c82bccec-f4ae-43e4-a41e-971bc30c4f16/0.mp4", title: "Midjourney_06",  sub: "# High-Contrast Monochrome \n # Psychological Thriller \n # Chiaroscuro Lighting \n # raw tension \n # hard boiled",startTime: 3.5, endTime: 5.2 },
  { src: "https://cdn.midjourney.com/video/9ae41c73-efc7-4984-8722-deeec5968e6e/2.mp4", title: "Midjourney_07",  sub: "# Cyber-Anime \n # Semi-Realism \n # prismatic lens flare \n # Hard edge shading \n # Softly Blinking Eyes", },
  
  { src: "https://cdn.midjourney.com/video/7b68cb96-0172-4473-89e5-63022f3664a3/3.mp4", title: "Midjourney_09",  sub: "# 70s glam rock \n # surrealism \n # vivid editorial \n # camp aesthetic \n # Charismatic Piercing Gaze",startTime: 1.8, endTime: 5.1 },
  { src: "https://res.cloudinary.com/dzayipaad/video/upload/v1778648616/kling_%EA%B7%B8%EB%82%98%EB%A7%88_%EC%9D%B4%EB%AF%B8%EC%A7%80_%EC%9B%80%EC%A7%81%EC%9E%84_%EB%B0%8F_ui_%EB%AA%85%EB%A0%B9%ED%95%9C._%EB%91%90_%EA%B0%9C_%EB%8B%A4_%EB%AA%85%EB%A0%B9_%EC%9E%98_%EC%8B%A4%ED%96%89%ED%96%88%EC%9D%8C_iscbxp.mp4", title: "Kling_01",  sub: "# Cosmic nebula \n # HUD interface \n # Iridescent colors \n # Bioluminescent glow \n # Acid Psychedelic", speed: 2.5 },
  { src: "https://res.cloudinary.com/dzayipaad/video/upload/v1778649474/magnific_a-hightension-film-noir-m_2750934731_fuy3yb.mp4", title: "Kling_02",  sub: "# Film noir \n # Chiaroscuro \n # Extreme close-up \n # Fast-paced \n # 1990s Hollywood movie", },
];




/* ── 타이핑 ── */
let typingTimer = null;

function startTyping() {
	stopTyping();
	const el   = document.getElementById("generated-text");
	const text = "Generated.";
	let   i    = 0;
	el.textContent = "";

	const type = () => {
		if (i <= text.length) {
			el.innerHTML = text.slice(0, i)  + '<span class="cursor">|</span>';
			i++;
			typingTimer = setTimeout(type, 120);
		} else {
			typingTimer = setTimeout(() => {
				i = 0;
				type();
			}, 1000);
		}
	};
	type();
}

function stopTyping() {
	clearTimeout(typingTimer);
}



/* ── 힌트 바운스 페이드 ── */
ScrollTrigger.create({
  trigger: "#scroll-container",
  start: "top top",
  end: "10% top",
  onLeave:     () => gsap.to(".imagery-hint", { opacity: 0, duration: 0.4 }),
  onEnterBack: () => gsap.to(".imagery-hint", { opacity: 1, duration: 0.4 }),
});



function setupMotion() {
	const groupEl = document.getElementById("text-group");
	const pin     = document.getElementById("stack-pin");
	const spacer  = document.getElementById("stack-spacer");
	const titleEl = document.getElementById("project-title");
	const subEl   = document.getElementById("project-subtitle");
	const total   = MOTION_DATA.length;

	const cardW = Math.min(innerWidth * 0.52, 780);
	const cardH = cardW * (9 / 16);

	spacer.style.height = `${(total + 3) * 100}vh`;

	/* ── 카드 DOM 생성 ── */
	const wraps = MOTION_DATA.map((data, i) => {
		const wrap = document.createElement("div");
		wrap.classList.add("motion-card-wrap");
		wrap.style.width  = cardW + "px";
		wrap.style.height = cardH + "px";

		let media;
		if (data.src.endsWith(".mp4")) {
			media              = document.createElement("video");
			media.src          = data.src;
			media.muted        = true;
			media.playsInline  = true;
			media.preload      = "auto";
			media.playbackRate = data.speed || 1.0;

			const hasRange = data.startTime !== undefined || data.endTime !== undefined;
			const st       = data.startTime ?? 0;
			const et       = data.endTime;

			media.loop = !hasRange;

			const tryPlay = () => {
				if (st > 0) media.currentTime = st;
				media.play().catch(() => {
					window.addEventListener("pointerdown", () => {
						if (st > 0) media.currentTime = st;
						media.play();
					}, { once: true });
				});
			};

			if (media.readyState >= 2) tryPlay();
			else media.addEventListener("canplay", tryPlay, { once: true });

			if (hasRange) {
				const loopGuard = () => {
					if (et !== undefined && media.currentTime >= et) {
						media.currentTime = st;
						if (media.paused) media.play().catch(() => {});
					}
					requestAnimationFrame(loopGuard);
				};
				requestAnimationFrame(loopGuard);
			}

		} else {
			media     = document.createElement("img");
			media.src = data.src;
			media.alt = data.title || "";
		}

		media.style.width     = "100%";
		media.style.height    = "100%";
		media.style.objectFit = "cover";

		wrap.appendChild(media);
		pin.appendChild(wrap);
		return { wrap, img: media, data };
	});

	/* ── ScrollTrigger ── */
	ScrollTrigger.create({
		trigger: "#stack-spacer",
		start:   "top top",
		end:     "bottom bottom",
		scrub:   true,
		pin:     "#stack-pin",

		onUpdate(self) {
			const raw    = self.progress * (total + 2) - 1;
			const active = clamp(raw, -1, total + 1);

			/* ── 카드 ── */
			wraps.forEach(({ wrap, img }, i) => {
				const diff = i - active;
				let translateY, rotateX, scaleX, opacity;

				if (diff >= 0) {
					const t    = clamp(diff, 0, 1);
					translateY = lerp(0,   cardH * 1.1, t);
					rotateX    = lerp(0,  -35,           t);
					scaleX     = lerp(1,   0.88,          t);
					opacity    = lerp(1,   0.0, clamp(diff - 0.5, 0, 1));
					if (diff > 1.5) opacity = 0;
				} else {
					const t    = clamp(-diff, 0, 1);
					translateY = lerp(0, -cardH * 1.0, t);
					rotateX    = lerp(0,  42,           t);
					scaleX     = lerp(1,  0.82,          t);
					opacity    = lerp(1,  0, clamp(t - 0.3, 0, 1));
					if (-diff > 1.5) opacity = 0;
				}

				wrap.style.transform =
					`translateY(${translateY}px) rotateX(${rotateX}deg) scaleX(${scaleX})`;
				wrap.style.opacity = opacity;
				wrap.style.zIndex  = total - Math.abs(diff * 2 | 0);

				img.style.transform = `translateY(${clamp(diff * 8, -10, 10)}%)`;
			});

			/* ── 텍스트 그룹 ── */
			const textActive = clamp(raw, 0, total - 0.01);
			const showIdx    = clamp(Math.round(textActive), 0, total - 1);
			const showData   = MOTION_DATA[showIdx];

			if (showData) {
				titleEl.textContent = showData.title;
				subEl.textContent   = showData.sub;
			}

			const tDiff = showIdx - textActive;
			let tTranslateY, tRotateX, tScaleX, tOpacity;

			if (tDiff >= 0) {
				const t     = clamp(tDiff, 0, 1);
				tTranslateY = lerp(0,   cardH * 1.1, t);
				tRotateX    = lerp(0,  -35,           t);
				tScaleX     = lerp(1,   0.88,          t);
				tOpacity    = lerp(1,   0.0, clamp(tDiff - 0.1, 0, 1));
				if (tDiff > 1.5) tOpacity = 0;
			} else {
				const t     = clamp(-tDiff, 0, 1);
				tTranslateY = lerp(0, -cardH * 1.0, t);
				tRotateX    = lerp(0,  42,           t);
				tScaleX     = lerp(1,  0.82,          t);
				tOpacity    = lerp(1,  0, clamp(t - 0.05, 0, 1));
				if (-tDiff > 1.5) tOpacity = 0;
			}

			gsap.set(groupEl, {
				y:       tTranslateY,
				rotateX: tRotateX,
				scaleX:  tScaleX,
				opacity: tOpacity,
        transformPerspective: 800,
			});
		},	// ← onUpdate 끝
	});		// ← ScrollTrigger.create 끝

	/* ── 초기 위치 ── */
	wraps.forEach(({ wrap }, i) => {
		const diff = i + 1;
		const t    = clamp(diff, 0, 1);
		wrap.style.transform =
			`translateY(${lerp(0, cardH * 1.1, t)}px) rotateX(${lerp(0, -35, t)}deg) scaleX(${lerp(1, 0.88, t)})`;
		wrap.style.opacity = diff > 1.5 ? 0 : lerp(1, 0.0, clamp(diff - 0.5, 0, 1));
		wrap.style.zIndex  = total - Math.abs(diff * 2 | 0);
	});

	/* ── 초기 텍스트 ── */
	if (MOTION_DATA[0]) {
		titleEl.textContent = MOTION_DATA[0].title;
		subEl.textContent   = MOTION_DATA[0].sub;
		gsap.set(groupEl, { y: cardH * 1.1, rotateX: -35, scaleX: 0.88, opacity: 0, transformPerspective: 800  });
	}
}	// ← setupMotion 끝








/* ── Motion UI 진입/이탈 ── */
ScrollTrigger.create({
  trigger: "#section-motion",
  start: "top 60%",
  end: "bottom bottom",
  onEnter:     () => showMotionUI(true),
  onLeave:     () => showMotionUI(false),
  onLeaveBack: () => showMotionUI(false),
  onEnterBack: () => showMotionUI(true),
});






function showMotionUI(show) {
  ["motion-sidebar","motion-title","btn-up"].forEach(id => {
    document.getElementById(id).classList.toggle("visible", show);
  });
  const stage = document.getElementById("stage");
  if (show) {
    hideSet(setC);
    gsap.to(stage, { opacity: 0, duration: 0.5, ease: "power2.out",
      onComplete: () => { stage.style.display = "none"; }
    });
  } else {
    const scrollY = window.scrollY;
    const section1Bottom = document.getElementById("scroll-container").getBoundingClientRect().bottom + window.scrollY;
    if (scrollY < section1Bottom) {
      stage.style.display = "block";
      gsap.to(stage, { opacity: 1, duration: 0.4, ease: "power2.out" });
    }
  }
  const logo  = document.querySelector(".header-logo");
  const links = document.querySelectorAll(".header-nav a");
  if (show) {
    if (logo) logo.style.color = "#111";
    links.forEach(a => a.style.color = "rgba(0,0,0,0.6)");
    startTyping();
  } else {
    if (logo) logo.style.color = "#fff";
    links.forEach(a => a.style.color = "rgba(255,255,255,0.6)");
    stopTyping();
    document.getElementById("generated-text").textContent = "";
  }
}

function scrollToTop() {
  lenis.scrollTo(0, { duration: 2.0 });
}

/* ── 리사이즈 ── */
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    [setA,setB,setC].forEach(cards => cards.forEach((c, i) => {
      c.start=getOut(c.w,c.h); c.mid=getRingPosZoned(c.w,c.h, i < 10 ? i : null); c.end=getOut(c.w,c.h);
    }));
    ScrollTrigger.refresh();
  }, 200);
});

/* ── 실행 ── */
setupMotion();