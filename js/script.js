window.addEventListener('hashchange', () => {
  const $menuItems = document.querySelectorAll('.nav-link');
  const $activeMenuItem = document.querySelector(`[href="${location.hash}"]`);

  $menuItems.forEach(e => e.classList.remove('is-active'));
  $activeMenuItem.classList.add('is-active');
});

document.querySelectorAll('[data-filter]')
  .forEach(tab => {
    tab.addEventListener('click', (e) => {
      const type = e.target.dataset.filter;
      const $filterContent = document.querySelector('.filter-content');

    if (type === 'all') {
      $filterContent.dataset.hide = '';
    } else {
      $filterContent.dataset.hide = type;
    }
  });
});

document.forms['contact-form'].addEventListener('submit', (e) => {
  e.preventDefault();

  const {
    name: {value: name},
    email: {vakue: email},
    message: {value: message}
  } = e.target.elements;

  const data = `
    Your Name: ${name}
    Your Email: ${email}
    Your Message: ${message}
  `;

  alert(data);
});
