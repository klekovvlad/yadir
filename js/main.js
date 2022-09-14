$('.feedback__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

const menuButton = document.querySelector('.header__nav');
const menuButtonLine = document.querySelectorAll('.header__nav > span');
const menuMobile = document.querySelector('.header__nav-links');
const menuLink = document.querySelectorAll('.header__nav-link')
const header = document.querySelector('.header');

function showMenu() {
  menuButtonLine[1].classList.toggle('out');
  menuButtonLine[0].classList.toggle('top');
  menuButtonLine[2].classList.toggle('bottom');
  menuMobile.classList.toggle('open');
  header.classList.toggle('white');
}

menuButton.addEventListener('click', () => {
  showMenu();
});

menuLink.forEach(link => {
  link.addEventListener('click', (event) => {
    showMenu();
    event.stopPropagation();
  })
});

const popup = document.querySelector('.popup');
const popupBody = document.querySelector('.popup__body');
const popupClose = document.querySelector('.popup__close');
const popupBtn = document.querySelectorAll('.popup-btn');

function showPopup() {
  popup.classList.toggle('popup-open');
  popupBody.classList.toggle('popup__body-open');
}

popupBtn.forEach(button => {
  button.addEventListener('click', () => {
    showPopup();
  })
});

popup.addEventListener('click', (event) => {
  let target = event.target;
  if(target === popup) {
    showPopup();
  };
  if(target === popupClose) {
    showPopup();
  };
});

