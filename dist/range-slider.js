const mainJS = document.createElement('script');
mainJS.src = '/dist/main.js';
mainJS.type = 'module';
document.body.append(mainJS);

function numberOfCopiesSlider() {
  const rangeSlider = document.getElementById('range-slider-copies');
  const output0 = document.getElementById('copies-output-0');
  const output1 = document.getElementById('copies-output-1');
  const outputs = [output0, output1];
  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [1, 12],
      connect: true,
      step: 1,
      range: {
        'min': 1,
        'max': 12
      }
    });
    rangeSlider.noUiSlider.on('update', function (values, handle) {
      outputs[handle].textContent = Math.round(values[handle]);
    })
  }
}

function numberOfYearsSlider() {
  const rangeSlider = document.getElementById('range-slider-year');
  const output0 = document.getElementById('year-output-0');
  const output1 = document.getElementById('year-output-1');
  const outputs = [output0, output1];
  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [1940, 2021],
      connect: true,
      step: 1,
      range: {
        'min': 1940,
        'max': 2021
      }
    });
    rangeSlider.noUiSlider.on('update', function (values, handle) {
      outputs[handle].textContent = Math.round(values[handle]);
    })
  }
}
mainJS.onload = () => {
  numberOfCopiesSlider()
  numberOfYearsSlider()
  allButtonAddRempveActivClass()
  liveSerch()
  soundButton()
  const sortType = document.querySelector('.select-menu');
  sortType.addEventListener('change', getSort)

}


function allButtonAddRempveActivClass() {
  const allButtonSortContainer = document.querySelectorAll('.sort-color-button');
  const allButtonSizeContainer = document.querySelectorAll('.size-button-containers-button');
  const buttonFavouriteContainer = document.querySelector('.favourite-button');
  const allFormsContainerElements = document.querySelectorAll('.forms-container-element');
  const soundButton = document.querySelector('.sound-header-button');
  const snowButton = document.querySelector('.snow-header-button');

  allFormsContainerElements.forEach(element => {
    element.addEventListener('click', function () {
      this.classList.toggle('sort-button-activ');
    })
  })
  snowButton.addEventListener('click', () => {
    snowButton.classList.toggle('sort-button-activ');
  });
  soundButton.addEventListener('click', () => {
    soundButton.classList.toggle('sort-button-activ');
  });

  allButtonSortContainer.forEach(element => {
    element.addEventListener('click', function () {
      this.classList.toggle('active');
    })
  })
  allButtonSizeContainer.forEach(element => {
    element.addEventListener('click', function () {
      this.classList.toggle('active');
    })
  })
  buttonFavouriteContainer.addEventListener('click', function () {
    this.classList.toggle('active');
  })

}

function liveSerch() {
  const searchInput = document.getElementById('searchPlace');
  searchInput.oninput = function () {
    let word = this.value.trim();
    let cards = document.getElementsByClassName('good-item');
    if (word != "") {
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].children[0].innerText.search(word) == -1) {
          cards[i].classList.add('hide');
        }
        else {
          cards[i].classList.remove('hide');
        }
      }
    }
    else {
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('hide');
      }
    }
  }
}

function soundButton() {
  let isPlay = false;
  const soundButton = document.getElementsByClassName('sound-header-button');
  const audio = new Audio();
  audio.src = '/assets/audio/audio.mp3';
  soundButton[0].addEventListener('click', () => {
    if (!isPlay) {
      audio.currentTime = 0;
      isPlay = true;
      audio.play();
    } else {
      isPlay = false;
      audio.pause();
    }
  })
}

function getSort() {
  const sortType = document.querySelector('.select-menu');
  switch (sortType.value) {
    case 'sort-amout-max':
      sortToMax('data-count')
      break;
    case 'sort-year-max':
      sortToMax('data-year')
      break
    case 'sort-amout-min':
      sortToMin('data-count')
      break;
    case 'sort-year-min':
      sortToMin('data-year')
      break
  }
}

function insertAferArray(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

function sortToMax(data) {
  const cardArray = document.querySelector('.goods-container');
  for (let i = 0; i < cardArray.children.length; i++) {
    for (let j = i; j < cardArray.children.length; j++) {
      if (+cardArray.children[i].getAttribute(data) > +cardArray.children[j].getAttribute(data)) {
        let replaceChildArray = cardArray.replaceChild(cardArray.children[j], cardArray.children[i]);
        insertAferArray(replaceChildArray, cardArray.children[i]);
      }
    }
  }
}
function sortToMin(data) {
  const cardArray = document.querySelector('.goods-container');
  for (let i = 0; i < cardArray.children.length; i++) {
    for (let j = i; j < cardArray.children.length; j++) {
      if (+cardArray.children[i].getAttribute(data) < +cardArray.children[j].getAttribute(data)) {
        let replaceChildArray = cardArray.replaceChild(cardArray.children[j], cardArray.children[i]);
        insertAferArray(replaceChildArray, cardArray.children[i]);
      }
    }
  }
}
