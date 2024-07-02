const mobileNav = () => {
  const openBtn = document.querySelector(".header__open");
  const closeBtn = document.querySelector(".header__close");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");
  const toggleTheme = document.querySelectorAll("#theme-toggle");

  const addFocus = () => {
    mobileNavLinks.forEach((link) => {
      link.setAttribute("tabindex", "0");
    });

    toggleTheme.forEach((btn) => {
      if (
        btn.classList.contains("mobile-nav__moon") ||
        btn.classList.contains("mobile-nav__sun")
      ) {
        btn.setAttribute("tabindex", "0");
      }
    });
  };

  const removeFocus = () => {
    mobileNavLinks.forEach((link) => {
      link.setAttribute("tabindex", "-1");
    });

    toggleTheme.forEach((btn) => {
      if (
        btn.classList.contains("mobile-nav__moon") ||
        btn.classList.contains("mobile-nav__sun")
      ) {
        btn.setAttribute("tabindex", "-1");
      }
    });
  };

  const openNav = () => {
    addFocus();
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    mobileNav.style.right = "1rem";
  };

  const closeNav = () => {
    removeFocus();
    const isMobile = window.innerWidth < 768;
    openBtn.style.display = isMobile ? "block" : "none";
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

  const handleFocus = () => {
    mobileNavLinks.forEach((link) => {
      link.setAttribute("tabindex", "-1");
    });

    toggleTheme.forEach((btn) => {
      if (
        btn.classList.contains("mobile-nav__moon") ||
        btn.classList.contains("mobile-nav__sun")
      ) {
        btn.setAttribute("tabindex", "-1");
      }
    });
  };

  handleFocus();

  openBtn.addEventListener("click", openNav);
  
  closeBtn.addEventListener("click", closeNav);

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  toggleTheme.forEach((btn) => {
    btn.addEventListener("click", closeNav);
  });

  window.addEventListener("scroll", closeNav);

  window.addEventListener("resize", () => {
    handleResize();
    handleFocus();
  });
};

export default mobileNav;
