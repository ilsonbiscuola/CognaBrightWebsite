document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const panel = document.querySelector('[data-mobile-panel]');

  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      const open = panel.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.querySelector('[data-interest-form]');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const messageEl = form.querySelector('[data-form-message]');
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      role: String(formData.get('role') || '').trim(),
      country: String(formData.get('country') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      consent_updates: formData.get('consent_updates') === 'on',
      website: String(formData.get('website') || '').trim()
    };

    if (!payload.name || !payload.email) {
      if (messageEl) messageEl.textContent = 'Please enter your name and email address.';
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending…';
    }
    if (messageEl) messageEl.textContent = 'Sending your interest…';

    try {
      const response = await fetch('/api/interest.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'Unable to submit your interest right now.');
      }

      form.reset();
      if (messageEl) {
        messageEl.textContent = 'Thank you — your interest has been registered successfully.';
      }
    } catch (error) {
      console.error('Interest form submission failed:', error);
      if (messageEl) {
        messageEl.textContent = error instanceof Error
          ? error.message
          : 'Unable to submit your interest right now. Please try again later.';
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Send interest →';
      }
    }
  });
});
