/**
 * 9:16 REELS & STORIES PORTFOLIO - MAIN INTERACTIVE CONTROLLER
 * Pure Vanilla JavaScript (No Node.js / No NPM build required)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Portfolio Reels Data ---
  const REELS_DATA = [
    {
      id: 'reel-01',
      title: 'Brand Promotion - Corporate & Business',
      category: 'tech',
      categoryLabel: 'Brand Promotions',
      thumbnail: 'assets/images/tech.jpg',
      videoUrl: 'assets/videos/01.mp4',
      client: 'Eximius Power and Energy (PVT) Ltd',
      views: '1K+',
      fps: '100%',
      resolution: '1080 x 1920 (9:16)',
      duration: '0:18',
      software: 'After Effects, Premiere Pro, Suno AI',
      description: 'High-impact power & energy brand release featuring sleek motion graphics, futuristic light leaks, and sync sound design.'
    },
    {
      id: 'reel-02',
      title: 'Brand Promotion - Corporate & Business',
      category: 'fashion',
      categoryLabel: 'Fashion & Apparel',
      thumbnail: 'assets/images/fashion.jpg',
      videoUrl: 'assets/videos/02.mp4',
      client: 'Eximius Power and Energy (PVT) Ltd',
      views: '1K+',
      fps: '100%',
      resolution: '1080 x 1920 (9:16)',
      duration: '0:22',
      software: 'After Effects, Premiere Pro, Suno AI',
      description: 'High-impact power & energy brand release featuring sleek motion graphics, futuristic light leaks, and sync sound design.'
    },
    {
      id: 'reel-03',
      title: 'Brand Promotion - Corporate & Business',
      category: 'luxury',
      categoryLabel: 'Job Vacancies',
      thumbnail: 'assets/images/luxury.jpg',
      videoUrl: 'assets/videos/03.mp4',
      client: 'Eximius Power and Energy (PVT) Ltd',
      views: '1K+',
      fps: '100%',
      resolution: '1080 x 1920 (9:16)',
      duration: '0:15',
      software: 'After Effects, Premiere Pro, Suno AI',
      description: 'High-impact power & energy brand release featuring sleek motion graphics, futuristic light leaks, and sync sound design.'
    },
    {
      id: 'reel-04',
      title: 'Brand Promotion - Corporate & Business',
      category: 'motion',
      categoryLabel: 'Corporate & Business',
      thumbnail: 'assets/images/motion.jpg',
      videoUrl: 'assets/videos/04.mp4',
      client: 'Eximius Power and Energy (PVT) Ltd',
      views: '1K+',
      fps: '100%',
      resolution: '1080 x 1920 (9:16)',
      duration: '0:20',
      software: 'After Effects, Premiere Pro, Suno AI',
      description: 'High-impact power & energy brand release featuring sleek motion graphics, futuristic light leaks, and sync sound design.'
    },
    {
      id: 'reel-05',
      title: 'Brand Promotion - Corporate & Business',
      category: 'fitness',
      categoryLabel: 'Event & Promo',
      thumbnail: 'assets/images/fitness.jpg',
      videoUrl: 'assets/videos/05.mp4',
      client: 'Eximius Power and Energy (PVT) Ltd',
      views: '1K+',
      fps: '100%',
      resolution: '1080 x 1920 (9:16)',
      duration: '0:24',
      software: 'After Effects, Premiere Pro, Suno AI',
      description: 'High-impact power & energy brand release featuring sleek motion graphics, futuristic light leaks, and sync sound design.'
    },
    {
      id: 'reel-06',
      title: 'Brand Promotion - Corporate & Business',
      category: 'motion',
      categoryLabel: 'Corporate & Business',
      thumbnail: 'assets/images/vfx.jpg',
      videoUrl: 'assets/videos/06.mp4',
      client: 'Eximius Power and Energy (PVT) Ltd',
      views: '1K+',
      fps: '100%',
      resolution: '1080 x 1920 (9:16)',
      duration: '0:30',
      software: 'After Effects, Premiere Pro, Suno AI',
      description: 'High-impact power & energy brand release featuring sleek motion graphics, futuristic light leaks, and sync sound design.'
    },
    {
      id: 'reel-07',
      title: 'Brand Promotion - Corporate & Business',
      category: 'tech',
      categoryLabel: 'Brand Promotions',
      thumbnail: 'assets/images/tech.jpg',
      videoUrl: 'assets/videos/07.mp4',
      client: 'Eximius Power and Energy (PVT) Ltd',
      views: '1K+',
      fps: '100%',
      resolution: '1080 x 1920 (9:16)',
      duration: '0:25',
      software: 'After Effects, Premiere Pro, Suno AI',
      description: 'High-impact power & energy brand release featuring sleek motion graphics, futuristic light leaks, and sync sound design.'
    },
    {
      id: 'reel-08',
      title: 'Brand Promotion - Corporate & Business',
      category: 'luxury',
      categoryLabel: 'Job Vacancies',
      thumbnail: 'assets/images/luxury.jpg',
      videoUrl: 'assets/videos/08.mp4',
      client: 'Eximius Power and Energy (PVT) Ltd',
      views: '1K+',
      fps: '100%',
      resolution: '1080 x 1920 (9:16)',
      duration: '0:19',
      software: 'After Effects, Premiere Pro, Suno AI',
      description: 'High-impact power & energy brand release featuring sleek motion graphics, futuristic light leaks, and sync sound design.'
    },
    {
      id: 'reel-09',
      title: 'Brand Promotion - Corporate & Business',
      category: 'fashion',
      categoryLabel: 'Fashion & Apparel',
      thumbnail: 'assets/images/fashion.jpg',
      videoUrl: 'assets/videos/09.mp4',
      client: 'Eximius Power and Energy (PVT) Ltd',
      views: '1K+',
      fps: '100%',
      resolution: '1080 x 1920 (9:16)',
      duration: '0:21',
      software: 'After Effects, Premiere Pro, Suno AI',
      description: 'High-impact power & energy brand release featuring sleek motion graphics, futuristic light leaks, and sync sound design.'
    },
    {
      id: 'reel-10',
      title: 'Brand Promotion - Corporate & Business',
      category: 'fitness',
      categoryLabel: 'Event & Promo',
      thumbnail: 'assets/images/fitness.jpg',
      videoUrl: 'assets/videos/10.mp4',
      client: 'Eximius Power and Energy (PVT) Ltd',
      views: '1K+',
      fps: '100%',
      resolution: '1080 x 1920 (9:16)',
      duration: '0:28',
      software: 'After Effects, Premiere Pro, Suno AI',
      description: 'High-impact power & energy brand release featuring sleek motion graphics, futuristic light leaks, and sync sound design.'
    },
    {
      id: 'reel-11',
      title: 'Brand Promotion - Corporate & Business',
      category: 'tech',
      categoryLabel: 'Brand Promotions',
      thumbnail: 'assets/images/tech.jpg',
      videoUrl: 'assets/videos/0112.mp4',
      client: 'Eximius Power and Energy (PVT) Ltd',
      views: '1K+',
      fps: '100%',
      resolution: '1080 x 1920 (9:16)',
      duration: '0:30',
      software: 'After Effects, Premiere Pro, Suno AI',
      description: 'High-impact power & energy brand release featuring sleek motion graphics, futuristic light leaks, and sync sound design.'
    }
  ];

  // --- State Variables ---
  let currentFilter = 'all';
  let activeReelIndex = 0;
  let isVideoPlaying = false;
  let isMuted = true;

  // --- DOM References ---
  const reelsGrid = document.getElementById('reelsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const reelModal = document.getElementById('reelModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalVideo = document.getElementById('modalVideo');
  const modalPoster = document.getElementById('modalPoster');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalClient = document.getElementById('modalClient');
  const modalViews = document.getElementById('modalViews');
  const modalSoftware = document.getElementById('modalSoftware');
  const modalResolution = document.getElementById('modalResolution');
  const modalFps = document.getElementById('modalFps');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const progressBarFill = document.getElementById('progressBarFill');
  const prevReelBtn = document.getElementById('prevReelBtn');
  const nextReelBtn = document.getElementById('nextReelBtn');
  const modalInquireBtn = document.getElementById('modalInquireBtn');
  const whatsappForm = document.getElementById('whatsappForm');
  const navbar = document.querySelector('.navbar');

  // --- Navbar Scroll Styling ---
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- Render Reels Function ---
  function renderReels(filter = 'all') {
    reelsGrid.innerHTML = '';

    const filteredData = filter === 'all' 
      ? REELS_DATA 
      : REELS_DATA.filter(item => item.category === filter);

    filteredData.forEach((reel, index) => {
      const card = document.createElement('div');
      const delayNum = (index % 3) + 1;
      card.className = `reel-card reveal reveal-pop reveal-delay-${delayNum}`;
      card.setAttribute('data-category', reel.category);
      card.setAttribute('data-index', REELS_DATA.indexOf(reel));

      card.innerHTML = `
        <div class="reel-card-media">
          <video src="${reel.videoUrl}" class="reel-card-thumb" autoplay loop muted playsinline poster="${reel.thumbnail}"></video>
          <div class="play-button-center">
            <i class="ri-play-fill"></i>
          </div>
          <div class="reel-card-overlay">
            <button class="card-sound-btn" title="Toggle Sound" aria-label="Toggle Sound">
              <i class="ri-volume-mute-line"></i>
            </button>
            <div class="reel-info-bottom">
              <h3 class="reel-title">${reel.title}</h3>
              <div class="reel-meta">
                <span><i class="ri-user-line"></i> ${reel.client}</span>
                <div class="meta-stats">
                  <span class="meta-stat-item"><i class="ri-eye-line"></i> ${reel.views}</span>
                  <div class="sound-wave">
                    <span></span><span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      // Sound Toggle Handler for Card Preview
      const cardVideo = card.querySelector('.reel-card-thumb');
      const cardSoundBtn = card.querySelector('.card-sound-btn');
      const soundWave = card.querySelector('.sound-wave');

      if (cardSoundBtn && cardVideo) {
        cardSoundBtn.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevents opening modal when toggling sound
          const willBeMuted = !cardVideo.muted;

          // Mute all other card videos in grid
          document.querySelectorAll('.reel-card-thumb').forEach(v => {
            if (v !== cardVideo) v.muted = true;
          });
          document.querySelectorAll('.card-sound-btn').forEach(btn => {
            if (btn !== cardSoundBtn) {
              btn.innerHTML = '<i class="ri-volume-mute-line"></i>';
              btn.classList.remove('unmuted');
            }
          });
          document.querySelectorAll('.sound-wave').forEach(sw => {
            if (sw !== soundWave) sw.classList.remove('active');
          });

          // Toggle sound for this video
          cardVideo.muted = willBeMuted;
          if (!willBeMuted) {
            cardSoundBtn.innerHTML = '<i class="ri-volume-up-line"></i>';
            cardSoundBtn.classList.add('unmuted');
            if (soundWave) soundWave.classList.add('active');
            cardVideo.play().catch(() => {});
          } else {
            cardSoundBtn.innerHTML = '<i class="ri-volume-mute-line"></i>';
            cardSoundBtn.classList.remove('unmuted');
            if (soundWave) soundWave.classList.remove('active');
          }
        });
      }

      // Click to Open 9:16 Modal Player
      card.addEventListener('click', () => {
        openReelModal(REELS_DATA.indexOf(reel));
      });

      // 3D Tilt Effect on Mouse Move
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });

      reelsGrid.appendChild(card);
    });

    // Re-trigger scroll reveal for newly rendered cards
    initScrollReveal();
  }

  // --- Scroll Reveal Pop-Up Observer ---
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px 50px 0px',
      threshold: 0.05
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal:not(.active)');
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Initial Render
  renderReels('all');


  // --- Filter Buttons Click Event ---
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      currentFilter = filterValue;
      renderReels(filterValue);
    });
  });

  // --- Modal Reel Player Logic ---
  function openReelModal(index) {
    // Mute any playing grid card videos
    document.querySelectorAll('.reel-card-thumb').forEach(v => { v.muted = true; });
    document.querySelectorAll('.card-sound-btn').forEach(btn => {
      btn.innerHTML = '<i class="ri-volume-mute-line"></i>';
      btn.classList.remove('unmuted');
    });

    activeReelIndex = index;
    const reel = REELS_DATA[activeReelIndex];

    modalTitle.textContent = reel.title;
    modalDesc.textContent = reel.description;
    modalClient.textContent = reel.client;
    modalViews.textContent = reel.views;
    modalSoftware.textContent = reel.software;
    modalResolution.textContent = reel.resolution;
    modalFps.textContent = reel.fps;

    modalPoster.src = reel.thumbnail;
    modalPoster.classList.remove('hidden');

    modalVideo.src = reel.videoUrl;
    modalVideo.muted = isMuted;

    updateSoundIcon();

    reelModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Auto Play Attempt
    const playPromise = modalVideo.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        isVideoPlaying = true;
        updatePlayPauseIcon();
        modalPoster.classList.add('hidden');
      }).catch(err => {
        console.log('Autoplay prevented by browser: ', err);
        isVideoPlaying = false;
        updatePlayPauseIcon();
      });
    }
  }

  function closeReelModal() {
    reelModal.classList.remove('active');
    document.body.style.overflow = '';
    modalVideo.pause();
    modalVideo.currentTime = 0;
    isVideoPlaying = false;
    progressBarFill.style.width = '0%';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeReelModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeReelModal);

  // Play / Pause Toggle
  function togglePlayPause() {
    if (modalVideo.paused) {
      modalVideo.play();
      isVideoPlaying = true;
      modalPoster.classList.add('hidden');
    } else {
      modalVideo.pause();
      isVideoPlaying = false;
    }
    updatePlayPauseIcon();
  }

  function updatePlayPauseIcon() {
    if (playPauseBtn) {
      playPauseBtn.innerHTML = isVideoPlaying 
        ? '<i class="ri-pause-line"></i>' 
        : '<i class="ri-play-fill"></i>';
    }
  }

  if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);
  if (modalVideo) modalVideo.addEventListener('click', togglePlayPause);

  // Mute / Unmute Toggle
  function toggleSound() {
    isMuted = !isMuted;
    modalVideo.muted = isMuted;
    updateSoundIcon();
  }

  function updateSoundIcon() {
    if (soundToggleBtn) {
      soundToggleBtn.innerHTML = isMuted 
        ? '<i class="ri-volume-mute-line"></i>' 
        : '<i class="ri-volume-up-line"></i>';
    }
  }

  if (soundToggleBtn) soundToggleBtn.addEventListener('click', toggleSound);

  // Video Progress Bar Update
  if (modalVideo) {
    modalVideo.addEventListener('timeupdate', () => {
      if (modalVideo.duration) {
        const percent = (modalVideo.currentTime / modalVideo.duration) * 100;
        progressBarFill.style.width = `${percent}%`;
      }
    });

    modalVideo.addEventListener('ended', () => {
      // Auto loop to next reel
      nextReel();
    });
  }

  // Next / Previous Reel Navigation
  function nextReel() {
    activeReelIndex = (activeReelIndex + 1) % REELS_DATA.length;
    openReelModal(activeReelIndex);
  }

  function prevReel() {
    activeReelIndex = (activeReelIndex - 1 + REELS_DATA.length) % REELS_DATA.length;
    openReelModal(activeReelIndex);
  }

  if (nextReelBtn) nextReelBtn.addEventListener('click', nextReel);
  if (prevReelBtn) prevReelBtn.addEventListener('click', prevReel);

  // Keyboard Arrow Shortcuts for Modal
  document.addEventListener('keydown', (e) => {
    if (!reelModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeReelModal();
    if (e.key === 'ArrowRight') nextReel();
    if (e.key === 'ArrowLeft') prevReel();
    if (e.key === ' ') {
      e.preventDefault();
      togglePlayPause();
    }
  });

  // Modal Inquiry Handler -> Opens direct WhatsApp chat
  if (modalInquireBtn) {
    modalInquireBtn.addEventListener('click', () => {
      const currentReel = REELS_DATA[activeReelIndex];
      closeReelModal();
      const text = `Hi NEXOGRAPHY! I am interested in creating a Social Reel similar to your "${currentReel.title}" project.`;
      const whatsappUrl = `https://wa.me/94751724220?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // --- WhatsApp Inquiry Form Submission ---
  if (whatsappForm) {
    whatsappForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const brand = document.getElementById('clientBrand').value.trim();
      const category = document.getElementById('projectCategory').value;
      const quantity = document.getElementById('reelQuantity').value;
      const message = document.getElementById('projectMessage').value.trim();

      // Formulate formatted message for WhatsApp
      let text = `*NEXOGRAPHY REELS INQUIRY*\n`;
      text += `--------------------\n`;
      text += `👤 *Client Name:* ${name}\n`;
      if (brand) text += `🏢 *Brand/Company:* ${brand}\n`;
      text += `🎬 *Category:* ${category.toUpperCase()}\n`;
      text += `📦 *Reels Needed:* ${quantity}\n`;
      if (message) text += `💬 *Details:* ${message}\n`;

      // Encoded URL for WhatsApp
      const phoneNumber = '94751724220';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

      window.open(whatsappUrl, '_blank');
    });
  }

  // --- Hero Play Button ---
  const heroWatchBtn = document.getElementById('heroWatchBtn');
  if (heroWatchBtn) {
    heroWatchBtn.addEventListener('click', () => {
      openReelModal(0);
    });
  }

  // --- Interactive Plexus Particles & Lines Animation ---
  function initPlexusAnimation() {
    const canvas = document.getElementById('plexusCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 11000), 120);
    const maxDistance = 150;
    const mouse = { x: null, y: null, radius: 220 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle dot with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < mouse.radius) {
            const malpha = (1 - mdist / mouse.radius) * 0.55;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${malpha})`;
            ctx.lineWidth = 1.25;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  // Initialize Plexus Animation
  initPlexusAnimation();

  // --- Graphic Posts Gallery Modal Controller ---
  const POSTS_DATA = [
    {
      id: 'post-01',
      title: 'Brand Promotion - Corporate & Business',
      category: 'Corporate & Business',
      image: '1 (1).jpg'
    },
    {
      id: 'post-02',
      title: 'Brand Promotion - Solar Energy Solutions',
      category: 'Brand Promotions',
      image: '1 (2).jpg'
    },
    {
      id: 'post-03',
      title: 'Brand Promotion - Electricity Savings Banner',
      category: 'Brand Promotions',
      image: '1 (3).jpg'
    },
    {
      id: 'post-04',
      title: 'Brand Promotion - High Voltage Upgrade Promo',
      category: 'Brand Promotions',
      image: '1 (4).jpg'
    },
    {
      id: 'post-05',
      title: 'Brand Promotion - AlphaESS Tech Showcase',
      category: 'Brand Promotions',
      image: '1 (5).jpg'
    },
    {
      id: 'post-06',
      title: 'Brand Promotion - Solar Project Guarantee',
      category: 'Brand Promotions',
      image: '1 (6).jpg'
    },
    {
      id: 'post-07',
      title: 'Brand Promotion - Smart Energy Inverter',
      category: 'Brand Promotions',
      image: '1 (7).jpg'
    },
    {
      id: 'post-08',
      title: 'Brand Promotion - Corporate Power Systems',
      category: 'Corporate & Business',
      image: '1 (8).jpg'
    },
    {
      id: 'post-09',
      title: 'Brand Promotion - Renewable Energy Banner',
      category: 'Brand Promotions',
      image: '1 (9).jpg'
    },
    {
      id: 'post-10',
      title: 'Brand Promotion - Energy Storage Campaign',
      category: 'Brand Promotions',
      image: '1 (10).jpg'
    },
    {
      id: 'post-11',
      title: 'Brand Promotion - Industrial Solar Solutions',
      category: 'Corporate & Business',
      image: '1 (11).png'
    },
    {
      id: 'post-12',
      title: 'Brand Promotion - Clean Energy Transition',
      category: 'Brand Promotions',
      image: '1 (12).jpg'
    },
    {
      id: 'post-13',
      title: 'Brand Promotion - Corporate Warranty Promo',
      category: 'Corporate & Business',
      image: '1 (13).jpg'
    },
    {
      id: 'post-14',
      title: 'Brand Promotion - Sustainable Power Graphic',
      category: 'Brand Promotions',
      image: '1 (14).jpg'
    },
    {
      id: 'post-15',
      title: 'Brand Promotion - Commercial Solar Package',
      category: 'Brand Promotions',
      image: '1 (15).jpg'
    },
    {
      id: 'post-16',
      title: 'Brand Promotion - Smart Grid Engineering',
      category: 'Corporate & Business',
      image: '1 (16).jpg'
    },
    {
      id: 'post-17',
      title: 'Brand Promotion - Green Tech Innovation',
      category: 'Brand Promotions',
      image: '1 (17).jpg'
    },
    {
      id: 'post-18',
      title: 'Brand Promotion - Premium Battery Backup',
      category: 'Brand Promotions',
      image: '1 (18).jpg'
    },
    {
      id: 'post-19',
      title: 'Brand Promotion - Solar Installation Campaign',
      category: 'Brand Promotions',
      image: '1 (19).jpg'
    },
    {
      id: 'post-20',
      title: 'Brand Promotion - Corporate Utility Promo',
      category: 'Corporate & Business',
      image: '1 (20).jpg'
    },
    {
      id: 'post-21',
      title: 'Brand Promotion - Next-Gen Energy Graphic',
      category: 'Brand Promotions',
      image: '1 (21).jpg'
    }
  ];

  const viewPostSamplesBtn = document.getElementById('viewPostSamplesBtn');
  const postsModal = document.getElementById('postsModal');
  const postsModalCloseBtn = document.getElementById('postsModalCloseBtn');
  const postsModalBackdrop = document.getElementById('postsModalBackdrop');
  
  const postsSlideTrack = document.getElementById('postsSlideTrack');
  const postsSlideViewport = document.getElementById('postsSlideViewport');
  const postsThumbStrip = document.getElementById('postsThumbStrip');
  const postsSliderPrevBtn = document.getElementById('postsSliderPrevBtn');
  const postsSliderNextBtn = document.getElementById('postsSliderNextBtn');
  
  const currentPostNum = document.getElementById('currentPostNum');
  const totalPostsNum = document.getElementById('totalPostsNum');
  const activePostTitle = document.getElementById('activePostTitle');
  const activePostCategory = document.getElementById('activePostCategory');
  const activePostWhatsappBtn = document.getElementById('activePostWhatsappBtn');

  let currentPostIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function initPostsSlider() {
    if (!postsSlideTrack || !postsThumbStrip) return;
    
    postsSlideTrack.innerHTML = '';
    postsThumbStrip.innerHTML = '';
    if (totalPostsNum) totalPostsNum.textContent = POSTS_DATA.length;

    POSTS_DATA.forEach((post, index) => {
      // 1. Build main slide item
      const slideItem = document.createElement('div');
      slideItem.className = `posts-slide-item ${index === 0 ? 'active' : ''}`;
      slideItem.setAttribute('data-index', index);
      slideItem.innerHTML = `<img src="${post.image}" alt="${post.title}" class="posts-slide-img" />`;
      postsSlideTrack.appendChild(slideItem);

      // 2. Build thumbnail strip item
      const thumbItem = document.createElement('div');
      thumbItem.className = `posts-thumb-item ${index === 0 ? 'active' : ''}`;
      thumbItem.setAttribute('data-index', index);
      thumbItem.innerHTML = `<img src="${post.image}" alt="${post.title}" />`;
      thumbItem.addEventListener('click', () => {
        goToPostSlide(index);
      });
      postsThumbStrip.appendChild(thumbItem);
    });

    updatePostsSliderUI();
  }

  function updatePostsSliderUI() {
    if (!postsSlideTrack) return;

    // Slide track translate (Right-to-Left / Left-to-Right smooth slide)
    postsSlideTrack.style.transform = `translateX(-${currentPostIndex * 100}%)`;

    // Active classes for slide items (trigger pop-up spring animation)
    const slideItems = postsSlideTrack.querySelectorAll('.posts-slide-item');
    slideItems.forEach((item, idx) => {
      if (idx === currentPostIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Active classes for thumbnails
    const thumbItems = postsThumbStrip.querySelectorAll('.posts-thumb-item');
    thumbItems.forEach((thumb, idx) => {
      if (idx === currentPostIndex) {
        thumb.classList.add('active');
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.classList.remove('active');
      }
    });

    // Counter & text updates
    const activePost = POSTS_DATA[currentPostIndex];
    if (currentPostNum) currentPostNum.textContent = currentPostIndex + 1;
    if (activePostTitle) activePostTitle.textContent = activePost.title;
    if (activePostCategory) activePostCategory.textContent = `${activePost.category} • Social Media Post`;

    // WhatsApp CTA button link update
    if (activePostWhatsappBtn) {
      const orderText = encodeURIComponent(`Hi NEXOGRAPHY! I want to order a Social Media Post Design similar to Sample #${currentPostIndex + 1} (${activePost.title}) - Rs. 1,000`);
      activePostWhatsappBtn.href = `https://wa.me/94751724220?text=${orderText}`;
    }
  }

  function goToPostSlide(index) {
    currentPostIndex = (index + POSTS_DATA.length) % POSTS_DATA.length;
    updatePostsSliderUI();
  }

  function nextPostSlide() {
    goToPostSlide(currentPostIndex + 1);
  }

  function prevPostSlide() {
    goToPostSlide(currentPostIndex - 1);
  }

  function openPostsModal() {
    if (!postsSlideTrack.children.length) {
      initPostsSlider();
    } else {
      updatePostsSliderUI();
    }
    if (postsModal) postsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePostsModal() {
    if (postsModal) postsModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event Listeners
  if (viewPostSamplesBtn) viewPostSamplesBtn.addEventListener('click', openPostsModal);
  if (postsModalCloseBtn) postsModalCloseBtn.addEventListener('click', closePostsModal);
  if (postsModalBackdrop) postsModalBackdrop.addEventListener('click', closePostsModal);

  if (postsSliderNextBtn) postsSliderNextBtn.addEventListener('click', nextPostSlide);
  if (postsSliderPrevBtn) postsSliderPrevBtn.addEventListener('click', prevPostSlide);

  // Touch Swipe Support for mobile devices
  if (postsSlideViewport) {
    postsSlideViewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    postsSlideViewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 40;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextPostSlide(); // Swipe Left -> Next
    } else if (touchEndX > touchStartX + swipeThreshold) {
      prevPostSlide(); // Swipe Right -> Prev
    }
  }

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (!postsModal || !postsModal.classList.contains('active')) return;
    if (e.key === 'Escape') closePostsModal();
    if (e.key === 'ArrowRight') nextPostSlide();
    if (e.key === 'ArrowLeft') prevPostSlide();
  });
});
