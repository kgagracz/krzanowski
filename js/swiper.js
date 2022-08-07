document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
    },
  });

  const calendarSwiper = new Swiper(".calendar-swiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".calendar-swiper-button-next",
      prevEl: ".calendar-swiper-button-prev",
    },
    controller: true,
    slidesPerView: 1,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
    },
    spaceBetween: 60,
  });

  const multimediaSwiper = new Swiper(".multimedia-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".multimedia-swiper-button-next",
      prevEl: ".multimedia-swiper-button-prev",
    },

    // spaceBetween: 300,
    slidesPerView: 1,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
    },
  });
  console.log(multimediaSwiper);
  const galleryTop = new Swiper(".gallery-top", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".gallery-swiper-button-next",
      prevEl: ".gallery-swiper-button-prev",
    },
    loop: true,
    loopedSlides: 4,
    slidesPerView: 1,
  });

  const galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: "auto",
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4,
    slidesPerView: 3,
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
    },
  });

  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
});
