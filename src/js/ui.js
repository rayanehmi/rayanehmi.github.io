/**
 * UI helper functions and components.
 * Made for future Milestone 4 – highlighted bio card. Might need to be modified in the future.
 */

/**
 * Build the card element.
 * Return HTMLElement ready for DOM insertion.
 */
export function createHighlightCard() {
  const card = document.createElement('section');
  card.className = 'highlight-card';

  card.innerHTML = `
    <p>
      Rayane is a machine-learning engineer with experience in research. 
      He is currently working as a consultant for Euranova.
      Feel free to email: <a href="mailto:raytexh@gmail.com" class="pulse">raytexh@gmail.com</a> or <a href="mailto:rayane.hachemi@euranova.eu" class="pulse">rayane.hachemi@euranova.eu</a>.
      His main interests are agentic AI, notably through large language models and reinforcement learning. 
    </p>
    <button class="btn-primary" data-action="open-cv">View&nbsp;CV&nbsp;→</button>
  `;

  card.querySelector('[data-action="open-cv"]')?.addEventListener('click', () => {
    window.open('/assets/cv.pdf', '_blank', 'noopener');
  });

  return card;
}

/**
 * Mount the card just after the hero section once DOM is ready.
 */
function mountHighlightCard() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  hero.insertAdjacentElement('afterend', createHighlightCard());
}

document.addEventListener('DOMContentLoaded', mountHighlightCard);
