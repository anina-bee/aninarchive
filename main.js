/* ------------------- toggle icon navbar ----------------------- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* -------------------- scroll section active link ----------------------- */
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*------------------------ remove toggle icon and navbar -----------------------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

    /*============================== scroll reveal ============================*/
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });
   
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .kuliner-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .sejarah-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .sejarah-content', { origin: 'right' });


    /*===================================== typed js ================================*/
    const typed = new Typed('.multiple-text', {
        strings: ['Sejarah yang Panjang', 'Wisata yang Menarik', 'Kuliner yang Beragam'],
        typeSpeed: 60,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });

