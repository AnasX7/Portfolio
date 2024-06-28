const mobileNav = () => {
  const openBtn = document.querySelector(".header__open");
  const closeBtn = document.querySelector(".header__close");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

  const openNav = () => {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    mobileNav.style.right = "1rem";
  };

  const closeNav = () => {
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    mobileNav.style.right = "-10rem";
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      openBtn.style.display = "none";
      closeBtn.style.display = "none";
      mobileNav.style.right = "-10rem";
    } else {
      openBtn.style.display = "block";
      closeBtn.style.display = "none";
      mobileNav.style.right = "-10rem";
    }
  };

  openBtn.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  window.addEventListener("touchmove", closeNav);

  window.addEventListener("resize", handleResize);
};

export default mobileNav;
