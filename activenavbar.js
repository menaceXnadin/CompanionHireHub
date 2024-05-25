document.addEventListener('DOMContentLoaded', () => {
  const activePage = window.location.pathname;
  document.querySelectorAll('.nav-list a').forEach((link) => {
      if (link.href.includes(`${activePage}`)) {
          link.classList.add('active');
          console.log(`${activePage}`);
      }
  });
});
