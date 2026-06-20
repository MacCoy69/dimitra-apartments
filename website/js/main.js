/* Dimitra Beach Apartments — main.js */
(function () {
  'use strict';

  /* Header: solid on scroll */
  const header = document.querySelector('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile navigation */
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      document.body.classList.toggle('nav-open', open);
      burger.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      document.body.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', false);
    }));
  }

  /* Scroll reveal */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  /* Lightbox gallery */
  const lb = document.getElementById('lightbox');
  if (lb) {
    const lbImg = lb.querySelector('img');
    const figures = Array.from(document.querySelectorAll('[data-lightbox] img'));
    let idx = 0;
    const show = (i) => {
      idx = (i + figures.length) % figures.length;
      const src = figures[idx].getAttribute('data-full') || figures[idx].src;
      lbImg.src = src;
      lbImg.alt = figures[idx].alt || '';
    };
    const open = (i) => { show(i); lb.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const close = () => { lb.classList.remove('open'); document.body.style.overflow = ''; lbImg.src = ''; };
    figures.forEach((img, i) => {
      img.parentElement.addEventListener('click', () => open(i));
      img.parentElement.style.cursor = 'zoom-in';
    });
    lb.querySelector('.lightbox__close').addEventListener('click', close);
    lb.querySelector('.next').addEventListener('click', (e) => { e.stopPropagation(); show(idx + 1); });
    lb.querySelector('.prev').addEventListener('click', (e) => { e.stopPropagation(); show(idx - 1); });
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') show(idx + 1);
      if (e.key === 'ArrowLeft') show(idx - 1);
    });
  }

  /* Anfrage-Formular (Prototyp: kein Backend) */
  const form = document.getElementById('anfrage-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ok = form.querySelector('.form-success');
      if (ok) ok.classList.add('show');
      form.querySelectorAll('input, textarea, select, button').forEach(el => {
        if (el.type !== 'checkbox') el.value = '';
      });
      if (ok) ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* Aktiven Nav-Link markieren */
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
})();
