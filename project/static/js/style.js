
const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 600, // optional: smooth transition
    breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
        1200: { slidesPerView: 5 },
    },
});