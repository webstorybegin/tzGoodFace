$('.goodFace__slider-top').slick({
  asNavFor: '.goodFace__slider-bottom',
  slidesToShow: 3,
  focusOnSelect: true,
  infinite: false,
  arrows: true,

});

$('.goodFace__slider-bottom').slick({
  asNavFor: '.goodFace__slider-top',
  arrows: false,
  fade: true,
  infinite: false,
});

let $counter = $('.slideCounter');
let $slickElement = $('.goodFace__slider-bottom');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
  let index = (currentSlide ? currentSlide : 0) + 1;
  $counter.text(index + ' — ' + slick.slideCount);
  let disabledBtn = document.getElementsByClassName('.slick-next ')
  if (index == 5) {
    disabledBtn.classList.remove('slick-disabled')
  }
});

$slickElement.slick({
  autoplay: true,
});