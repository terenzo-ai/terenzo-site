/* Terenzo chart-room motion layer. Vanilla JS, no dependencies. Content never
   depends on this file: without it the page is fully visible and static. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Scroll reveals + counters */
  var revealed = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('.count').forEach(runCounter);
      if (e.target.classList.contains('count')) runCounter(e.target);
      revealed.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function (el) {
    /* Above-the-fold content shows on load; the observer handles the rest on scroll. */
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('in');
      el.querySelectorAll('.count').forEach(runCounter);
    } else {
      revealed.observe(el);
    }
  });

  /* Counters: element text is the real final value; JS only animates up to it. */
  function runCounter(el) {
    if (reduced || el.dataset.done) return;
    el.dataset.done = '1';
    var text = el.textContent;
    var target = parseFloat(text.replace(/[^0-9.]/g, ''));
    if (isNaN(target)) return;
    var start = null, dur = 1100;
    function frame(t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = text.replace(/[0-9][0-9,.]*/, String(Math.round(target * eased)));
      if (p < 1) requestAnimationFrame(frame); else el.textContent = text;
    }
    requestAnimationFrame(frame);
  }

  /* Nav instrument line: scroll progress */
  var progress = document.querySelector('.nav-progress');
  var parallaxImgs = document.querySelectorAll('[data-parallax]');
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var doc = document.documentElement;
      if (progress) {
        var max = doc.scrollHeight - window.innerHeight;
        progress.style.transform = 'scaleX(' + (max > 0 ? doc.scrollTop / max : 0) + ')';
      }
      if (!reduced) parallaxImgs.forEach(function (img) {
        var r = img.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        /* -1 (below viewport) .. 1 (above): shift the oversized image within its frame */
        var t = (r.top + r.height / 2 - window.innerHeight / 2) / (window.innerHeight / 2);
        img.style.transform = 'translateY(' + (t * 4) + '%)';
      });
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

})();
