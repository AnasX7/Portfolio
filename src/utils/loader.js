const loader = () => {
  const loader = document.querySelector(".loader");
  const pageContent = document.querySelector("main");
  const navbar = document.querySelector("header");

  const handleLoader = () => {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 1500);
  };

  window.addEventListener("load", handleLoader);
};

export default loader;
