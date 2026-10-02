/* Massage Way Wellness & Co. — shared mockup behavior
   Mobile nav toggle, header scroll state, smooth-scroll nav highlighting.
   Kept deliberately simple / Elementor-portable: no frameworks, no
   state-dependent theming, no toggles between the two designs. */

document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Subtle header background shift on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Highlight current nav link on smooth scroll (in-page sections only)
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = [];
  navLinks.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (el) sections.push({ link: link, el: el });
  });

  if (sections.length) {
    var setActive = function () {
      var pos = window.scrollY + 140;
      var current = sections[0];
      sections.forEach(function (s) {
        if (s.el.offsetTop <= pos) current = s;
      });
      sections.forEach(function (s) { s.link.classList.remove('active'); });
      current.link.classList.add('active');
    };
    window.addEventListener('scroll', setActive, { passive: true });
    setActive();
  }
});
