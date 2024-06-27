const navbar = () => {
  const header = document.querySelector(".header");
  let lastScrollY = window.scrollY;

  window.onscroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      header.classList.remove("scroll-up");
      header.classList.add("scroll-down");
    } else {
      // Scrolling up
      header.classList.remove("scroll-down");
      header.classList.add("scroll-up");
    }
    lastScrollY = window.scrollY;
  };
};

export default navbar;
