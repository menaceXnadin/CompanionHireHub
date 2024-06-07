document.addEventListener('DOMContentLoaded', () => {
  const activePage = window.location.pathname;
  document.querySelectorAll('.nav-list a').forEach((link) => {
      const linkPath = new URL(link.href).pathname;
      if (linkPath === activePage) {
          link.classList.add('active');
          console.log(`${activePage}`);
      }
  });
});

