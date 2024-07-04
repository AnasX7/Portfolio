const loader = () => {
    const loader = document.querySelector('.loader');
    const pageContent = document.querySelector('main');
    const navbar = document.querySelector('header');
    
    const handleLoader = () => {
        loader.classList.add('hidden');
        pageContent.classList.add('visible');
        navbar.classList.add('visible');
    };

    window.addEventListener('load', handleLoader);
};

export default loader;
