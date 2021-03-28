$('.goodFace__slider-top').slick({
  asNavFor: '.goodFace__slider-bottom',
  slidesToShow: 3,
  focusOnSelect: true,
  infinite: false,
});

$('.goodFace__slider-bottom').slick({
  asNavFor: '.goodFace__slider-top',
  arrows: false,
  fade: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        fade: false,
      }
    }
  ]
});

let $counter = $('.slideCounter');
let $slickElement = $('.goodFace__slider-bottom');
let sliderItem = document.querySelectorAll('.slider-bottom__item');
let slickPrev = document.querySelector('.slick-prev');
let slickNext = document.querySelector('.slick-next');


$slickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
  let index = (currentSlide ? currentSlide : 0) + 1;
  $counter.text(index + ' — ' + sliderItem.length);
  if (index == 1) {
    slickPrev.classList.add('disabled-slick')
  } else {
    slickPrev.classList.remove('disabled-slick')
  }
  if (index == 5) {
    slickNext.classList.add('disabled-slick')
  } else {
    slickNext.classList.remove('disabled-slick')
  }
});

$slickElement.slick({
  autoplay: true,
});