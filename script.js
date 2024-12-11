    /* background-image: url(https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/hero/desktop/hero-2023-v2-desktop-2-1500w.webp); */
/* 
 */ 


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('bg-[#0a192f]'); // Add background when scrolled
    } else {
        navbar.classList.remove('bg-[#0a192f]'); // Remove background when at top
    }
});


// scroller page 10

