import ScrollReveal from "scrollreveal";

const sr = ScrollReveal();

const scrollrevealAnimation = () => {
    const scrollRevealOptions = {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
    }

    sr.reveal(".hero__img", {
        ...scrollRevealOptions,
    })

    sr.reveal(".hero__subtitle-wrapper", {
        ...scrollRevealOptions,
        delay: 500,
    })

    sr.reveal(".hero__title", {
        ...scrollRevealOptions,
        delay: 1000,
    })

    sr.reveal(".hero__description", {
        ...scrollRevealOptions,
        delay: 1500,
    })

    sr.reveal(".hero__btn-wrapper", {
        ...scrollRevealOptions,
        delay: 1800,
    })

    sr.reveal(".about__title", {
        ...scrollRevealOptions,
    })

    sr.reveal(".about__description", {
        ...scrollRevealOptions,
        interval: 500,
    })

    sr.reveal(".about__subtitle", {
        ...scrollRevealOptions,
        delay: 1000,
    })

    sr.reveal(".about__list", {
        ...scrollRevealOptions,
        interval: 350,
        delay: 1500,
    })

    sr.reveal(".about__wrapper", {
        ...scrollRevealOptions,
        delay: 2500,
    })

    sr.reveal(".projects__title", {
        ...scrollRevealOptions,
        interval: 500,
    })

    sr.reveal(".projects__card", {
        ...scrollRevealOptions,
        interval: 500,
    })

    sr.reveal(".contact__go-home", {
        ...scrollRevealOptions,
    })

    sr.reveal(".contact__title", {
        ...scrollRevealOptions,
        delay: 500,
    })

    sr.reveal(".contact__soical a", {
        ...scrollRevealOptions,
        delay: 1000,
        interval: 300,
    })

    sr.reveal(".contact__wrapper", {
        ...scrollRevealOptions,
        delay: 2000,
    })
};

export default scrollrevealAnimation;
