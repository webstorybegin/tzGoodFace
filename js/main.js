$('.goodFace__slider-top').slick({
  asNavFor: '.goodFace__slider-bottom',
  slidesToShow: 3,
  focusOnSelect: true,
  infinite: false,
  arrows: true
});

$('.goodFace__slider-bottom').slick({
  asNavFor: '.goodFace__slider-top',
  arrows: false,
  fade: true,
  infinite: false,
  cssEase: 'linear',
});