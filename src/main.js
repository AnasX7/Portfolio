import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/loader.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/projects.css";
import "../styles/components/contact.css";
import "../styles/components/mobile-nav.css";
import "../styles/utils.css";

import loader from "./utils/loader";
import navbar from "./utils/navbar";
import mobileNav from "./utils/mobile-nav";
import darkMode from "./utils/dark-mode";
import downloadResume from "./utils/download-resume";
import scrollrevealAnimation from "./utils/scrollreveal-animation";

loader();
scrollrevealAnimation();
navbar();
mobileNav();
darkMode();
downloadResume();
