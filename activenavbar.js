const activePage = window.location.pathname;
const navItems = document
  .querySelectorAll(".nav-list a")
  .forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add('active');
      console.log(`${activePage}`);
    }
  });