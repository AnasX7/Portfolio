const darkMode = () => {
  const toggleTheme = document.querySelectorAll("#theme-toggle");
  const sunBtn = document.querySelector(".header__sun");
  const moonBtn = document.querySelector(".header__moon");
  const mobileSunBtn = document.querySelector(".mobile-nav__sun");
  const mobileMoonBtn = document.querySelector(".mobile-nav__moon");

  const theme = localStorage.getItem("theme");

  theme && document.body.classList.toggle(theme);
  
  const handleBtn = () => {
    const isLightMode = document.body.classList.contains("light-mode");
    const isMobile = window.innerWidth < 768;

    if (isLightMode) {
      sunBtn.style.display = "none";
      moonBtn.style.display = isMobile ? "none" : "block";

      mobileSunBtn.style.display = "none";
      mobileMoonBtn.style.display = isMobile ? "block" : "none";
    } else {
      sunBtn.style.display = isMobile ? "none" : "block";
      moonBtn.style.display = "none";

      mobileSunBtn.style.display = isMobile ? "block" : "none";
      mobileMoonBtn.style.display = "none";
    }
  };

  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    handleBtn();

    const isLightMode = document.body.classList.contains("light-mode");
    if (isLightMode) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class");
    }
  };

  toggleTheme.forEach((btn) => {
    btn.addEventListener("click", handleThemeToggle);
  });

  window.addEventListener("resize", handleBtn);
  window.addEventListener("load", handleBtn);
};

export default darkMode;
