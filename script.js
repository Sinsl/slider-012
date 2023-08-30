const slider1 = document.querySelector('.slider');
const arrSlide = Array.from(slider1.querySelectorAll('.slide'));
const slider2 = document.querySelector('.slider-2');
const arrSlide2 = Array.from(slider2.querySelectorAll('.slide'));
const bodyStyles = window.getComputedStyle(document.body);
const timer = parseInt(bodyStyles.getPropertyValue('--duration')); //get

let idxLeft = 0, idxCenter = 1, idxRight = 2;
let idxLeft2 = 0, idxCenter2 = 1, idxRight2 = 2;
let idxNew = 0;


arrSlide.forEach(elem => {
  elem.addEventListener('click', clickSlide);
})

function clickSlide(e) {
  if(e.target.classList.contains('right')) {

    arrSlide[idxLeft].classList.add('end');
    const idxEnd = idxLeft;
    setTimeout(() => {
      arrSlide[idxEnd].classList.remove('active', 'left', 'end');
    }, timer);
    arrSlide[idxCenter].classList.remove('center');
    arrSlide[idxRight].classList.remove('right');

    idxLeft = idxLeft === arrSlide.length - 1 ? 0 : idxLeft + 1;
    idxCenter = idxCenter === arrSlide.length - 1 ? 0 : idxCenter + 1;
    idxRight = idxRight === arrSlide.length - 1 ? 0 : idxRight + 1;

    arrSlide[idxLeft].classList.add('left');
    arrSlide[idxCenter].classList.add('center');
    arrSlide[idxRight].classList.add('active', 'right', 'start');
    setTimeout(() => {
      arrSlide[idxRight].classList.remove('start');
    }, 30);
  }

  if(e.target.classList.contains('left')) {

    arrSlide[idxRight].classList.add('end');
    const idxEnd = idxRight;
    setTimeout(() => {
      arrSlide[idxEnd].classList.remove('active', 'right', 'end');
    }, timer);
    arrSlide[idxCenter].classList.remove('center');
    arrSlide[idxLeft].classList.remove('left');

    idxLeft = idxLeft === 0 ? arrSlide.length - 1 : idxLeft - 1;
    idxCenter = idxCenter === 0 ? arrSlide.length - 1 : idxCenter - 1;
    idxRight = idxRight === 0 ? arrSlide.length - 1 : idxRight - 1;

    arrSlide[idxRight].classList.add('right');
    arrSlide[idxCenter].classList.add('center');
    arrSlide[idxLeft].classList.add('active', 'left', 'start');
    setTimeout(() => {
      arrSlide[idxLeft].classList.remove('start');
    }, 30);
  }
}

arrSlide2.forEach(elem => {
  elem.addEventListener('click', clickSlide2);
})

function clickSlide2(e) {
  if(e.target.classList.contains('right')) {

    arrSlide2[idxLeft2].classList.add('end');
    const idxEnd = idxLeft2;
    setTimeout(() => {
      arrSlide2[idxEnd].classList.remove('active', 'left', 'end');
    }, timer + 30);
    arrSlide2[idxCenter2].classList.remove('center');
    arrSlide2[idxRight2].classList.remove('right');

    idxLeft2 = idxLeft2 === arrSlide2.length - 1 ? 0 : idxLeft2 + 1;
    idxCenter2 = idxCenter2 === arrSlide2.length - 1 ? 0 : idxCenter2 + 1;
    idxRight2 = idxRight2 === arrSlide2.length - 1 ? 0 : idxRight2 + 1;

    arrSlide2[idxLeft2].classList.add('left');
    arrSlide2[idxCenter2].classList.add('center');
    arrSlide2[idxRight2].classList.add('right', 'start');
    arrSlide2[idxRight2].classList.add('active');
    setTimeout(() => {
      arrSlide2[idxRight2].classList.remove('start');
    }, 30);
  }

  if(e.target.classList.contains('left')) {

    arrSlide2[idxRight2].classList.add('end');
    const idxEnd = idxRight2;
    setTimeout(() => {
      arrSlide2[idxEnd].classList.remove('active', 'right', 'end');
    }, timer + 30);
    arrSlide2[idxCenter2].classList.remove('center');
    arrSlide2[idxLeft2].classList.remove('left');

    idxLeft2 = idxLeft2 === 0 ? arrSlide2.length - 1 : idxLeft2 - 1;
    idxCenter2 = idxCenter2 === 0 ? arrSlide2.length - 1 : idxCenter2 - 1;
    idxRight2 = idxRight2 === 0 ? arrSlide2.length - 1 : idxRight2 - 1;

    arrSlide2[idxRight2].classList.add('right');
    arrSlide2[idxCenter2].classList.add('center');
    arrSlide2[idxLeft2].classList.add('active', 'left', 'start');
    setTimeout(() => {
      arrSlide2[idxLeft2].classList.remove('start');
    }, 30);
  }
}
