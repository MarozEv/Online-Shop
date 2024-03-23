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
}


function allButtonAddRempveActivClass(){
  const allButtonSortContainer = document.querySelectorAll('.sort-color-button');
  const allButtonSizeContainer = document.querySelectorAll('.size-button-containers-button');
  const buttonFavouriteContainer = document.querySelector('.favourite-button');
  const allFormsContainerElements = document.querySelectorAll('.forms-container-element');
  const soundButton = document.querySelector('.sound-header-button');
  const snowButton = document.querySelector('.snow-header-button');

  allFormsContainerElements.forEach(element => {
    element.addEventListener('click', function(){
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
    element.addEventListener('click', function(){
      this.classList.toggle('active');
    })
  })
  allButtonSizeContainer.forEach(element => {
    element.addEventListener('click', function(){
      this.classList.toggle('active');
    })
  })
  buttonFavouriteContainer.addEventListener('click', function(){
    this.classList.toggle('active');
  })

}

