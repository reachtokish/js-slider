const slideContent = document.getElementsByClassName('slide_content');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const sliderRail = document.getElementById('slider_rail');
let currentPosition = 0;
let currentSlideIndex = 0;
let timer;
const totalSlideCount = sliderRail.children.length;
const slideWidth = 600;
const autoPlayInterval = 2000;

sliderRail.style.transform = 'translate3d(' + currentPosition + 'px, 0px, 0px)';

sliderRail.style.width = slideWidth * totalSlideCount + 'px';

function goNext() {
  if (currentSlideIndex === totalSlideCount - 1) {
    currentPosition = 0;
    sliderRail.style.transform = 'translate3d(' + currentPosition + 'px, 0px, 0px)';
    currentSlideIndex = 0;
  }
  else {
    currentSlideIndex += 1;
    currentPosition += -slideWidth;
    sliderRail.style.transform = 'translate3d(' + currentPosition + 'px, 0px, 0px)';
  }
}

function goPrev() {
  if (currentSlideIndex === 0) {
    currentPosition = -(slideWidth * (totalSlideCount - 1));
    sliderRail.style.transform = 'translate3d(' + currentPosition + 'px, 0px, 0px)';
    currentSlideIndex = totalSlideCount - 1;
  }
  else {
    currentSlideIndex -= 1;
    currentPosition += slideWidth;
    sliderRail.style.transform = 'translate3d(' + currentPosition + 'px, 0px, 0px)';
  }
}

function setTimer() {
  timer = setInterval(() => {
    goNext();
  }, autoPlayInterval);
}

setTimer();


next.addEventListener('click', function() {
  clearInterval(timer);
  goNext();
  setTimer();
});

prev.addEventListener('click', function() {
  clearInterval(timer);
  goPrev();
  setTimer();
});