import {dataEN, dataRU} from './data.js'
import {Card, DataCard} from './class-Card.js'

const body: HTMLElement | null = document.querySelector('body');
const yearNow:number = new Date().getFullYear()
function createNewElement(typeElement: string, classElement: string, parentElemnt: HTMLElement): HTMLElement | HTMLInputElement | HTMLOptionElement {
  const element: HTMLElement | HTMLInputElement | HTMLOptionElement = document.createElement(typeElement);
  element.classList.add(classElement);
  parentElemnt.append(element)
  return element
}
const mainPageContent:HTMLElement = createNewElement('div', 'main-page-content', body!)
const header: HTMLElement = createNewElement('header', 'header', mainPageContent);
const headerContainer: HTMLElement = createNewElement('div', 'header-container', header);
const main: HTMLElement = createNewElement('main', 'main', mainPageContent);
const mainContainer:HTMLElement = createNewElement('div', 'main-container', main);
const footer: HTMLElement = createNewElement('footer', 'footer', body!);
const footerContainer:HTMLElement = createNewElement('div', 'footer-container', footer);
const lang: string = "ru"



function createMusicAndShowHeaderElements(language: string): void {
  const headerNavigation: HTMLElement = createNewElement('div', 'header-navigator', headerContainer)
  const soundButoon: HTMLElement = createNewElement('div', 'sound-header-button', headerNavigation);
  const snowButton: HTMLElement = createNewElement('div', 'snow-header-button', headerNavigation);
  const searchButton: HTMLElement = createNewElement('input', 'search-header-button', headerNavigation);
  switch (language) {
    case "ru":
    case "ru-RU":
      (searchButton as HTMLInputElement).placeholder = 'Поиск';
      break;
    case "en":
    case "en-US":
      (searchButton as HTMLInputElement).placeholder = 'Search';
  }
}
createMusicAndShowHeaderElements(lang);

function createFirstSortModulHeaderElements(language: string): void {
  const searchContainer: HTMLElement = createNewElement('div', 'search-container', headerContainer);
  const headerTextSearch: HTMLElement = createNewElement('p', 'text-header-search', searchContainer);
  const menuSeach: HTMLElement = createNewElement('select', 'select-menu', searchContainer);
  const ascendingAmount: HTMLElement = createNewElement('option', 'select-option', menuSeach);
  (ascendingAmount as HTMLOptionElement).value = 'sort-amout-max';
  const descendingAmount: HTMLElement = createNewElement('option', 'select-option', menuSeach);
  (descendingAmount as HTMLOptionElement).value = 'sort-amout-min';
  const ascendingYear: HTMLElement = createNewElement('option', 'select-option', menuSeach);
  (ascendingYear as HTMLOptionElement).value = 'sort-year-max';
  const descendingYear: HTMLElement = createNewElement('option', 'select-option', menuSeach);
  (descendingYear as HTMLOptionElement).value = 'sort-year-min';
  switch (language) {
    case "ru":
    case "ru-RU":
      headerTextSearch.innerHTML = 'СОРТИРОВАТЬ';
      ascendingAmount.innerHTML = 'По возрастанию шт';
      descendingAmount.innerHTML = 'По убыванию шт';
      ascendingYear.innerHTML = 'Год по возрастанию';
      descendingYear.innerHTML = 'Год по убыванию';
      break;
    case "en":
    case "en-US":
      headerTextSearch.innerHTML = 'SORT';
      ascendingAmount.innerHTML = 'Ascending pcs';
      descendingAmount.innerHTML = 'Descending pcs';
      ascendingYear.innerHTML = 'Year ascending';
      descendingYear.innerHTML = 'Year descending';
      break;
  }
}
createFirstSortModulHeaderElements(lang);

function createSortCategoryHeaderElement(language: string): void {
  const categoryTitle: HTMLElement = createNewElement('div', 'category-title', headerContainer);
  const categorySearchContainer: HTMLElement = createNewElement('div', 'category-search-container', categoryTitle);
  const categorySearchContainerAll: HTMLElement = createNewElement('div', 'category-search-container-text', categoryTitle);
  const categorySearchContainerFormGroup: HTMLElement = createNewElement('div', 'category-search-container-form-group', categorySearchContainerAll);
  const formGroupInput: HTMLElement = createNewElement('input', 'form-group-input', categorySearchContainerFormGroup);
  formGroupInput.setAttribute('type', 'checkbox');
  formGroupInput.setAttribute('id', 'checkbox');
  const formGroupInputLabel: HTMLElement = createNewElement('label', 'form-group-input-label', categorySearchContainerFormGroup);
  formGroupInputLabel.setAttribute('for', 'checkbox');
  const categorySearchContainerFormAll: HTMLElement = createNewElement('p', 'text-all-button', categorySearchContainerAll);
  switch (language) {
    case "ru":
    case "ru-RU":
      categorySearchContainer.textContent = 'КАТЕГОРИИ';
      categorySearchContainerFormAll.textContent = 'Все';
      break;
    case "en":
    case "en-US":
      categorySearchContainer.textContent = 'CATEGORY';
      categorySearchContainerFormAll.textContent = 'All';
      break;
  }
}
createSortCategoryHeaderElement(lang)

function createSortFormsCategory(language: string): void {
  const categoryFormsContainer: HTMLElement = createNewElement('div', 'category-forms-container', headerContainer);
  const formsTitle: HTMLElement = createNewElement('div', 'forms-title', categoryFormsContainer);
  const formsContainer: HTMLElement = createNewElement('div', 'forms-container', categoryFormsContainer);
  let i = 0;
  while (i < 6) {
    i++
    createNewElement('div', 'forms-container-element', formsContainer);
  }
  for (let i = 0; i < 6; i++) {
    createNewElement('button', 'forms-image', formsContainer.childNodes[i] as HTMLElement);
    createNewElement('p', 'forms-text', formsContainer.childNodes[i] as HTMLElement);
  }
  switch (language) {
    case "ru":
    case "ru-RU":
      formsTitle.textContent = 'Форма'
      formsContainer.childNodes[0].childNodes[1].textContent = 'Колокол'
      formsContainer.childNodes[1].childNodes[1].textContent = 'Шар'
      formsContainer.childNodes[2].childNodes[1].textContent = 'Шишка'
      formsContainer.childNodes[3].childNodes[1].textContent = 'Звезда'
      formsContainer.childNodes[4].childNodes[1].textContent = 'Снежинка'
      formsContainer.childNodes[5].childNodes[1].textContent = 'Фигурка'
      break;
    case "en":
    case "en-US":
      formsTitle.textContent = 'Forms'
      formsContainer.childNodes[0].childNodes[1].textContent = 'Bell'
      formsContainer.childNodes[1].childNodes[1].textContent = 'Bull'
      formsContainer.childNodes[2].childNodes[1].textContent = 'Pine'
      formsContainer.childNodes[3].childNodes[1].textContent = 'Star'
      formsContainer.childNodes[4].childNodes[1].textContent = 'Snowflake'
      formsContainer.childNodes[5].childNodes[1].textContent = 'Figurine'
      break;
  }
}
createSortFormsCategory(lang)

function createSortNumberOfCopies(lang: string): void {
  const numberOfCopiesContainer: HTMLElement = createNewElement('div', 'number-of-copies-container', headerContainer);
  const numberOfCopiesContainerTitle: HTMLElement = createNewElement('p', 'number-of-copies-container-title', numberOfCopiesContainer);
  const numberOfCopiesFilteSlider: HTMLElement = createNewElement('div', 'number-of-copies-filter-slider', numberOfCopiesContainer);
  numberOfCopiesFilteSlider.setAttribute('id', 'range-slider-copies')
  const numberOfPriceFilteOutputs: HTMLElement = createNewElement('div', 'number-of-copies-filter-outputs', numberOfCopiesContainer);
  const firstOutput: HTMLElement = createNewElement('output', 'number-of-copies-filter-output', numberOfPriceFilteOutputs);
  firstOutput.setAttribute('id', 'copies-output-0')
  firstOutput.textContent = '1'
  const secondtOutput: HTMLElement = createNewElement('output', 'number-of-copies-filter-output', numberOfPriceFilteOutputs);
  secondtOutput.textContent = '12'
  secondtOutput.setAttribute('id', 'copies-output-1')
  switch (lang) {
    case "ru":
    case "ru-RU":
      numberOfCopiesContainerTitle.textContent = 'Количество экземпляров';
      break;
    case "en":
    case "en-US":
      numberOfCopiesContainerTitle.textContent = 'Number of copies';
      break;
  }
}
createSortNumberOfCopies(lang);

function createSortNumberOfYears(lang: string): void {
  const numberOfYearsContainer: HTMLElement = createNewElement('div', 'number-of-years-container', headerContainer);
  const numberOfYearsContainerTitle: HTMLElement = createNewElement('p', 'number-of-years-container-title', numberOfYearsContainer);
  const numberOfYearFilteSlider: HTMLElement = createNewElement('div', 'number-of-years-filter-slider', numberOfYearsContainer);
  numberOfYearFilteSlider.setAttribute('id', 'range-slider-year')
  const numberOfYearFilteOutputs: HTMLElement = createNewElement('div', 'number-of-years-filter-outputs', numberOfYearsContainer);
  const firstOutput: HTMLElement = createNewElement('output', 'number-of-years-filter-output', numberOfYearFilteOutputs);
  firstOutput.setAttribute('id', 'year-output-0')
  firstOutput.textContent = '1940'
  const secondtOutput: HTMLElement = createNewElement('output', 'number-of-years-filter-output', numberOfYearFilteOutputs);
  secondtOutput.textContent = '2021'
  secondtOutput.setAttribute('id', 'year-output-1')
  switch (lang) {
    case "ru":
    case "ru-RU":
      numberOfYearsContainerTitle.textContent = 'Год приобритения';
      break;
    case "en":
    case "en-US":
      numberOfYearsContainerTitle.textContent = 'Year of purchase';
      break;
  }
}
createSortNumberOfYears(lang);

function createSortColor(lang: string): void {
  const sortColorContainer: HTMLElement = createNewElement('div', 'sort-color-container', headerContainer);
  const sortColorTitle: HTMLElement = createNewElement('div', 'sort-color-title', sortColorContainer);
  const sortColorButtonsContainer: HTMLElement = createNewElement('div', 'sort-color-buttons-container', sortColorContainer);
  let i = 0;
  while (i < 5) {
    i++;
    createNewElement('button', 'sort-color-button', sortColorButtonsContainer);
  }
  (
    lang === "ru" || lang === "ru-RU"
  )
    ? (
      sortColorTitle.textContent = 'Цвет'
    )
    : (
      sortColorTitle.textContent = 'Color'
    )

}
createSortColor(lang)

function createSortSize(lang: string): void {
  const sizeContainer: HTMLElement = createNewElement('div', 'size-container', headerContainer);
  const sizeContainerTitle: HTMLElement = createNewElement('div', 'size-container-title', sizeContainer);
  const sizeButtonContainer: HTMLElement = createNewElement('div', 'size-button-container', sizeContainer);
  const sizeButtonBigcontainer: HTMLElement = createNewElement('div', 'size-button-big-container', sizeButtonContainer);
  const sizeButtonAveragecontainer: HTMLElement = createNewElement('div', 'size-button-average-container', sizeButtonContainer);
  const sizeButtonSmallcontainer: HTMLElement = createNewElement('div', 'size-button-small-container', sizeButtonContainer);
  for (let i = 0; i < 3; i++) {
    createNewElement('button', 'size-button-containers-button', sizeButtonContainer.childNodes[i] as HTMLElement);
    createNewElement('div', 'size-button-containers-title', sizeButtonContainer.childNodes[i] as HTMLElement);
  }
  (
    lang === "ru" || lang === "ru-RU"
  )
    ? (
      sizeContainerTitle.textContent = 'Размер',
      sizeButtonContainer.childNodes[0].childNodes[1].textContent = 'Большой',
      sizeButtonContainer.childNodes[1].childNodes[1].textContent = 'Средний',
      sizeButtonContainer.childNodes[2].childNodes[1].textContent = 'Маленький'
    )

    : (
      sizeContainerTitle.textContent = 'Size',
      sizeButtonContainer.childNodes[0].childNodes[1].textContent = 'Big',
      sizeButtonContainer.childNodes[1].childNodes[1].textContent = 'Average',
      sizeButtonContainer.childNodes[2].childNodes[1].textContent = 'Small'
    )
    ;


}
createSortSize(lang)

function createSortFavourite(lang: string): void {
  const favouriteSortContainer: HTMLElement = createNewElement('div', 'favorite-sort-container', headerContainer);
  const favouriteButton: HTMLElement = createNewElement('button', 'favourite-button', favouriteSortContainer);
  const favouriteButtonTitle: HTMLElement = createNewElement('p', 'favourite-button-title', favouriteSortContainer);
  (
    lang === "ru" || lang === "ru-RU"
  )
    ? (
      favouriteButtonTitle.textContent = 'Только любимые'
    )
    : (
      favouriteButtonTitle.textContent = 'Only favourite'
    )
}
createSortFavourite(lang)

function createSortSetting(lang: string): void {
  const settingSortContainer: HTMLElement = createNewElement('div', 'setting-container', headerContainer);
  const settingButtonContainer: HTMLElement = createNewElement('div', 'setting-button-container', settingSortContainer);
  for (let i = 0; i < 2; i++) {
    createNewElement('button', 'setting-button', settingButtonContainer);
  }
  (
    lang === "ru" || lang === "ru-RU"
  )
    ? (
      settingButtonContainer.childNodes[0].textContent = 'Сбросить фильтры',
      settingButtonContainer.childNodes[1].textContent = 'Сбросить настройки'
    )
    : (
      settingButtonContainer.childNodes[0].textContent = 'Reset filters',
      settingButtonContainer.childNodes[1].textContent = 'Reset settings'
    )
}
createSortSetting(lang)

function createGoodsContainer(lang:string): void{
  let goodsArray:{}[];
  const goodsTitle: HTMLElement =createNewElement('p', 'goods-title', mainContainer);
  const goodsContainer: HTMLElement = createNewElement('div', 'goods-container', mainContainer);
  (
    lang === "ru" || lang === "ru-RU"
  )
    ? (
      goodsTitle.textContent = "Игрушки",
      goodsArray = dataRU
    )
    : (
      goodsTitle.textContent = "Toys",
      goodsArray = dataEN
    )
  function createCard(parametr:{}[]): void{
    for(let i = 0; i<parametr.length; i++){
      let element1 = new Card(parametr[i] as DataCard,goodsContainer)
      element1.render()
    }
  }
  createCard(goodsArray);
}
createGoodsContainer(lang)

function createFooterContent(): void{
  const footerData:HTMLElement = createNewElement('div', 'footer-data', footerContainer);
  const copyright:HTMLElement = createNewElement('p', 'copyright', footerData);
  copyright.textContent = '©'
  const year:HTMLElement = createNewElement('p', 'copyright', footerData);
  year.textContent = `${yearNow}`
  const gitHub:HTMLElement = createNewElement('a', 'github-link', footerData);
  gitHub.setAttribute('href', 'https://github.com/')
  gitHub.textContent = `github`
  const footerLinkContainer: HTMLElement = createNewElement('a', 'footer-link-container', footerContainer);
  footerLinkContainer.setAttribute('href', 'https://rs.school/js/')
  footerLinkContainer.setAttribute('href', 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/online-store/README.md');
  const footerIcoContent:HTMLElement = createNewElement('img', 'footer-ico-content', footerLinkContainer);
  footerIcoContent.setAttribute('src', '/assets/rs_school_js.svg');
  footerIcoContent.setAttribute('alt', 'RS School JS');
}
createFooterContent()