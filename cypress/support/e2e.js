import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught exception:', err);
    return false; // Prevent Cypress from failing the test
  });

// Hide fetch/XHR requests
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}
