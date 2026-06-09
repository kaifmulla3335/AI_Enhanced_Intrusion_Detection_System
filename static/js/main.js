/* ═══════════════════════════════════════════
   AI-IDS · Main JavaScript
   Author: Mohammadkaif Mulla
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Auto year in footer ──────────────────
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Mobile nav toggle ────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ── Threat meter animation on page load ──
  const tmFill = document.querySelector('.tm-fill');
  if (tmFill) {
    const isThreat = document.querySelector('.result-card.threat') !== null;
    // slight delay so CSS transition fires after paint
    setTimeout(() => {
      tmFill.style.width = isThreat ? '88%' : '8%';
    }, 120);
  }

  // ── Input — clear red border on typing ───
  document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', () => {
      input.style.borderColor = '';
    });
  });

  // ── Button loading state ─────────────────
  const form   = document.querySelector('form');
  const btn    = document.querySelector('.btn');
  if (form && btn) {
    form.addEventListener('submit', () => {
      btn.textContent = '⏳ Analyzing...';
      btn.disabled = true;
      btn.style.opacity = '0.75';
    });
  }

});