const btn = document .querySelector(".about-btn")
btn.addEventListener( "click", () => {
    document.querySelector(".about-modoal").style.display = "block"
})
const btnClose = document .querySelector(".about-modoal-block-square-close")
btnClose.addEventListener( "click", () => {
    document.querySelector(".about-modoal").style.display = "none"
})



var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});