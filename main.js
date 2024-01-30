let currentSlideIndex = 0; //전역변수로 호출할 때마다 업데이트
showSlides(); //페이지 로드 시 호출

function showSlides() {
  let slides = document.querySelectorAll('.slide');

  if (slides.length === 0) {
    console.error("슬라이드를 찾을 수 없습니다.");
    return;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
   
  }
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  slides[currentSlideIndex].style.display = 'block';
  currentSlideIndex++;
  setTimeout(showSlides, 4000);
}

//menu
function toggleMenu() {
  const menu = document.querySelector('.menuBox');
  const computeStyle = window.getComputedStyle(menu);
  const currentLeft = computeStyle.getPropertyValue('left');

  menu.style.left = (currentLeft === '0px' || currentLeft === '') ? '-250px' : '0px';
}