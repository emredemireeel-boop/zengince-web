/* ═══════════════════════════════════════════════════════════════════════════
   ZENGINCE.COM — Client-side JavaScript
   Animations, Interactions, Filters
   ═══════════════════════════════════════════════════════════════════════════ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar Scroll Effect ──────────────────────────────────────────────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile Menu Toggle ────────────────────────────────────────────────
  const toggle = document.querySelector('.navbar-toggle');
  const navMenu = document.querySelector('.navbar-nav');
  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      toggle.classList.toggle('active');
    });
    // Close on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
        navMenu.classList.remove('open');
        toggle.classList.remove('active');
      }
    });
  }

  // ── Scroll Reveal Animations ──────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal, .stagger-children');
  if (reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  // ── Hero Particles ────────────────────────────────────────────────────
  const particlesContainer = document.querySelector('.hero-particles');
  if (particlesContainer) {
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.classList.add('hero-particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (6 + Math.random() * 6) + 's';
      particle.style.width = (2 + Math.random() * 3) + 'px';
      particle.style.height = particle.style.width;
      particlesContainer.appendChild(particle);
    }
  }

  // ── Quote Carousel ────────────────────────────────────────────────────
  const carousel = document.querySelector('.quote-carousel');
  if (carousel) {
    const items = carousel.querySelectorAll('.quote-carousel-item');
    const dots = carousel.querySelectorAll('.quote-carousel-dot');
    let currentIndex = 0;
    let interval;

    const showSlide = (index) => {
      items.forEach(item => item.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      items[index].classList.add('active');
      dots[index].classList.add('active');
      currentIndex = index;
    };

    const nextSlide = () => {
      showSlide((currentIndex + 1) % items.length);
    };

    const startAutoplay = () => {
      interval = setInterval(nextSlide, 5000);
    };

    const stopAutoplay = () => {
      clearInterval(interval);
    };

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        stopAutoplay();
        showSlide(i);
        startAutoplay();
      });
    });

    if (items.length > 0) {
      showSlide(0);
      startAutoplay();
    }
  }

  // ── Filter System (Kitaplar / Filmler / Alıntılar) ───────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('[data-kategori]');

  if (filterBtns.length > 0 && filterItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter items with animation
        filterItems.forEach(item => {
          if (filter === 'tumu' || item.dataset.kategori === filter) {
            item.style.display = '';
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            requestAnimationFrame(() => {
              item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            });
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(10px)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // ── Teaching Card Toggle ──────────────────────────────────────────────
  const teachingToggles = document.querySelectorAll('.teaching-card-toggle');
  teachingToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.teaching-card');
      const isExpanded = card.classList.contains('expanded');
      
      // Close all others
      document.querySelectorAll('.teaching-card.expanded').forEach(c => {
        if (c !== card) c.classList.remove('expanded');
      });

      card.classList.toggle('expanded');
      btn.querySelector('.toggle-text').textContent = 
        card.classList.contains('expanded') ? 'Kapat' : 'Detayları Gör';
    });
  });

  // ── Smooth Scroll for anchor links ────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Counter Animation ────────────────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          let current = 0;
          const increment = target / 60;
          const duration = 1500;
          const stepTime = duration / 60;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = prefix + Math.floor(current) + suffix;
          }, stepTime);

          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));
  }

  // ── Habit Tracker (localStorage) ─────────────────────────────────────
  const habitChecks = document.querySelectorAll('.habit-check');
  if (habitChecks.length > 0) {
    const today = new Date().toISOString().split('T')[0];
    const storageKey = 'zengince_habits_' + today;
    let savedHabits = {};

    try {
      savedHabits = JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch (e) {
      savedHabits = {};
    }

    habitChecks.forEach(check => {
      const slug = check.dataset.slug;
      if (savedHabits[slug]) {
        check.classList.add('checked');
        check.querySelector('.habit-check-icon').textContent = '✓';
      }

      check.addEventListener('click', () => {
        check.classList.toggle('checked');
        const isChecked = check.classList.contains('checked');
        check.querySelector('.habit-check-icon').textContent = isChecked ? '✓' : '';
        savedHabits[slug] = isChecked;
        localStorage.setItem(storageKey, JSON.stringify(savedHabits));
      });
    });
  }

  // ── Active nav link based on current page ─────────────────────────────
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('active');
    }
  });

});
