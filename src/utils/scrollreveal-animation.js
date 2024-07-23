import ScrollReveal from "scrollreveal";

const sr = ScrollReveal();

const scrollrevealAnimation = () => {
  const scrollRevealOptions = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    viewFactor: 0.25,
  };

  sr.reveal(".hero__img", {
    ...scrollRevealOptions,
    scale: 1.1,
  });

  sr.reveal(".hero__subtitle-wrapper", {
    ...scrollRevealOptions,
    delay: 500,
    scale: 1.1,
  });

  sr.reveal(".hero__title", {
    ...scrollRevealOptions,
    delay: 1000,
    scale: 1.1,
  });

  sr.reveal(".hero__description", {
    ...scrollRevealOptions,
    delay: 1500,
    scale: 1.1,
  });

  sr.reveal(".hero__btn-wrapper", {
    ...scrollRevealOptions,
    delay: 1800,
    scale: 1.1,
  });

  sr.reveal(".about__title", {
    ...scrollRevealOptions,
    scale: 1.1,
  });

  sr.reveal(".about__description", {
    ...scrollRevealOptions,
    interval: 500,
    scale: 1.1,
  });

  sr.reveal(".about__subtitle", {
    ...scrollRevealOptions,
    delay: 1200,
    scale: 1.1,
  });

  sr.reveal(".about__ul", {
    ...scrollRevealOptions,
    delay: 1250,
    scale: 1.1,
  });

  sr.reveal(".projects__title", {
    ...scrollRevealOptions,
    scale: 1.1,
  });

  sr.reveal(".contact", {
    ...scrollRevealOptions,
    mobile: false,
  });

  sr.reveal(".contact__go-home", {
    ...scrollRevealOptions,
    scale: 1.1,
  });

  sr.reveal(".contact__title", {
    ...scrollRevealOptions,
    delay: 500,
    scale: 1.1,
  });

  sr.reveal(".contact__soical a", {
    ...scrollRevealOptions,
    delay: 1000,
    interval: 300,
    scale: 1.3,
  });
};

export default scrollrevealAnimation;
