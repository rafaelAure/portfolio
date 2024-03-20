var swiper2 = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1300: {
      slidesPerView: 1,
      setWrapperSize: true
    },
  }
  
});

const swiper = new Swiper(' #portfolio .swiper', {
  // Optional parameters
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
    mousewheel: true,
      Keyboard: true,
      setWrapperSize: true,

      breakpoints: {
        0: {
          slidesPerView: 1,
          setWrapperSize: true
        },
        555: {
            slidesPerView: 1,
            setWrapperSize: true
          },
        700: {
            slidesPerView: 1,
            setWrapperSize: true
          },
          796: {
            slidesPerView: 2,
            setWrapperSize: true
          },
        768: {
            slidesPerView: 2,
            setWrapperSize: true
          },
          
          999: {
            slidesPerView: 2,
            setWrapperSize: true
          },
          1024: {
            slidesPerView: 3,
            setWrapperSize: true
          },
          
          1250: {
            slidesPerView: 3,
            setWrapperSize: true
          },
          1300: {
            slidesPerView: 3,
            setWrapperSize: true
          }
      }
 
});



const swiper3 = new Swiper(' #depoimento .test', {
  // Optional parameters
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
    mousewheel: true,
      Keyboard: true,
      setWrapperSize: true,

      breakpoints: {
        0: {
          slidesPerView: 1,
          setWrapperSize: true
        },
        555: {
            slidesPerView: 1,
            setWrapperSize: true
          },
          755: {
            slidesPerView: 1,
            setWrapperSize: true
          },
          842: {
            slidesPerView: 1,
            setWrapperSize: true
          },
          1024: {
            slidesPerView: 2,
            setWrapperSize: true
          },
          1250: {
            slidesPerView: 2,
            setWrapperSize: true
          },
          1300: {
            slidesPerView: 2,
            setWrapperSize: true
          }
      }
 
});