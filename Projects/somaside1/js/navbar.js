export function initNavbar() {

  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".navbar .logo");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (logo && navbar) {
    const adjustLogo = () => {
      const navbarHeight = navbar.offsetHeight;
      logo.style.maxHeight = navbarHeight * 0.75 + "px";
    };

    adjustLogo();
    window.addEventListener("resize", adjustLogo);
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

}