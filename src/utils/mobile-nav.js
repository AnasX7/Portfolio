const mobileNav = () => {
  const openBtn = document.querySelector(".header__open");
  const closeBtn = document.querySelector(".header__close");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

  const openNav = () => {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    mobileNav.style.display = "flex";
  };

  const closeNav = () => {
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    mobileNav.style.display = "none";
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      openBtn.style.display = "none";
      closeBtn.style.display = "none";
      mobileNav.style.display = "none";
    } else {
      openBtn.style.display = "block";
      closeBtn.style.display = "none";
      mobileNav.style.display = "none";
    }
  };

  openBtn.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  window.addEventListener("resize", handleResize);

  handleResize();
};

export default mobileNav;
