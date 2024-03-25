import { dataRU } from './data.js'
import { Card, DataCard } from './class-Card.js'

const body: HTMLElement | null = document.querySelector('body');
const mainPageContent: HTMLElement = createNewElement('div', 'main-page-content', body!)
const header: HTMLElement = createNewElement('header', 'header', mainPageContent);
const headerContainer: HTMLElement = createNewElement('div', 'header-container', header);
const main: HTMLElement = createNewElement('main', 'main', mainPageContent);
const mainContainer: HTMLElement = createNewElement('div', 'main-container', main);
const footer: HTMLElement = createNewElement('footer', 'footer', body!);
const footerContainer: HTMLElement = createNewElement('div', 'footer-container', footer);

const yearNow: number = new Date().getFullYear()
const lang: string = "ru"

function createNewElement(typeElement: string, classElement: string, parentElemnt: HTMLElement): HTMLElement | HTMLInputElement | HTMLOptionElement {
  const element: HTMLElement | HTMLInputElement | HTMLOptionElement = document.createElement(typeElement);
  element.classList.add(classElement);
  parentElemnt.append(element)
  return element
}
function createNewElementWithInnerText(typeElement: string, classElement: string, parentElemnt: HTMLElement, innerText: string): HTMLElement | HTMLInputElement | HTMLOptionElement {
  const element: HTMLElement | HTMLInputElement | HTMLOptionElement = document.createElement(typeElement);
  element.classList.add(classElement);
  element.innerText = innerText;
  parentElemnt.append(element);
  return element
}

function createMusicAndShowHeaderElements(language: string): void {
  const headerNavigation: HTMLElement = createNewElement('div', 'header-navigator', headerContainer)
  const soundButoon: HTMLElement = createNewElement('div', 'sound-header-button', headerNavigation);
  const snowButton: HTMLElement = createNewElement('div', 'snow-header-button', headerNavigation);
  const searchButton: HTMLElement = createNewElement('input', 'search-header-button', headerNavigation);
  searchButton.setAttribute('id', 'searchPlace')
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

function createFirstSortModulHeaderElements(): void {
  const searchContainer: HTMLElement = createNewElement('div', 'search-container', headerContainer);
  const headerTextSearch: HTMLElement = createNewElementWithInnerText('p', 'text-header-search', searchContainer, 'СОРТИРОВАТЬ');
  const menuSeach: HTMLElement = createNewElement('select', 'select-menu', searchContainer);
  const ascendingAmount: HTMLElement = createNewElementWithInnerText('option', 'select-option', menuSeach, 'По возрастанию шт');
  (ascendingAmount as HTMLOptionElement).value = 'sort-amout-max';
  const descendingAmount: HTMLElement = createNewElementWithInnerText('option', 'select-option', menuSeach, 'По убыванию шт');
  (descendingAmount as HTMLOptionElement).value = 'sort-amout-min';
  const ascendingYear: HTMLElement = createNewElementWithInnerText('option', 'select-option', menuSeach, 'Год по возрастанию');
  (ascendingYear as HTMLOptionElement).value = 'sort-year-max';
  const descendingYear: HTMLElement = createNewElementWithInnerText('option', 'select-option', menuSeach, 'Год по убыванию');
  (descendingYear as HTMLOptionElement).value = 'sort-year-min';
}
createFirstSortModulHeaderElements();

function createSortCategoryHeaderElement(): void {
  const categoryTitle: HTMLElement = createNewElement('div', 'category-title', headerContainer);
  const categorySearchContainer: HTMLElement = createNewElementWithInnerText('div', 'category-search-container', categoryTitle, 'КАТЕГОРИИ');
  const categorySearchContainerAll: HTMLElement = createNewElement('div', 'category-search-container-text', categoryTitle);
  const categorySearchContainerFormGroup: HTMLElement = createNewElement('div', 'category-search-container-form-group', categorySearchContainerAll);
  const formGroupInput: HTMLElement = createNewElement('input', 'form-group-input', categorySearchContainerFormGroup);
  formGroupInput.setAttribute('type', 'checkbox');
  formGroupInput.setAttribute('id', 'checkbox');
  const formGroupInputLabel: HTMLElement = createNewElement('label', 'form-group-input-label', categorySearchContainerFormGroup);
  formGroupInputLabel.setAttribute('for', 'checkbox');
  const categorySearchContainerFormAll: HTMLElement = createNewElementWithInnerText('p', 'text-all-button', categorySearchContainerAll, 'Все');
}
createSortCategoryHeaderElement()

function createSortFormsCategory(): void {
  const categoryFormsContainer: HTMLElement = createNewElement('div', 'category-forms-container', headerContainer);
  const formsTitle: HTMLElement = createNewElement('div', 'forms-title', categoryFormsContainer);
  const formsContainer: HTMLElement = createNewElement('div', 'forms-container', categoryFormsContainer);
  let i = 0;
  while (i < 6) {
    i++
    createNewElement('div', 'forms-container-element', formsContainer);
  }
  const categoryName: string[] = ['Колокол', 'Шар', 'Шишка', 'Звезда', 'Снежинка', 'Фигурка']
  for (let i = 0; i < 6; i++) {
    createNewElement('button', 'forms-image', formsContainer.childNodes[i] as HTMLElement);
    createNewElementWithInnerText('p', 'forms-text', formsContainer.childNodes[i] as HTMLElement, categoryName[i]);
  }
}
createSortFormsCategory()

function createSortNumberOfCopies(): void {
  const numberOfCopiesContainer: HTMLElement = createNewElement('div', 'number-of-copies-container', headerContainer);
  const numberOfCopiesContainerTitle: HTMLElement = createNewElementWithInnerText('p', 'number-of-copies-container-title', numberOfCopiesContainer, 'Количество экземпляров');
  const numberOfCopiesFilteSlider: HTMLElement = createNewElement('div', 'number-of-copies-filter-slider', numberOfCopiesContainer);
  numberOfCopiesFilteSlider.setAttribute('id', 'range-slider-copies')
  const numberOfPriceFilteOutputs: HTMLElement = createNewElement('div', 'number-of-copies-filter-outputs', numberOfCopiesContainer);
  const firstOutput: HTMLElement = createNewElementWithInnerText('output', 'number-of-copies-filter-output', numberOfPriceFilteOutputs, '1');
  firstOutput.setAttribute('id', 'copies-output-0')
  const secondtOutput: HTMLElement = createNewElementWithInnerText('output', 'number-of-copies-filter-output', numberOfPriceFilteOutputs, '12');
  secondtOutput.setAttribute('id', 'copies-output-1')
}
createSortNumberOfCopies();

function createSortNumberOfYears(): void {
  const numberOfYearsContainer: HTMLElement = createNewElement('div', 'number-of-years-container', headerContainer);
  const numberOfYearsContainerTitle: HTMLElement = createNewElementWithInnerText('p', 'number-of-years-container-title', numberOfYearsContainer, 'Год приобритения');
  const numberOfYearFilteSlider: HTMLElement = createNewElement('div', 'number-of-years-filter-slider', numberOfYearsContainer);
  numberOfYearFilteSlider.setAttribute('id', 'range-slider-year')
  const numberOfYearFilteOutputs: HTMLElement = createNewElement('div', 'number-of-years-filter-outputs', numberOfYearsContainer);
  const firstOutput: HTMLElement = createNewElement('output', 'number-of-years-filter-output', numberOfYearFilteOutputs);
  firstOutput.setAttribute('id', 'year-output-0')
  firstOutput.textContent = '1940'
  const secondtOutput: HTMLElement = createNewElement('output', 'number-of-years-filter-output', numberOfYearFilteOutputs);
  secondtOutput.textContent = '2021'
  secondtOutput.setAttribute('id', 'year-output-1')
}
createSortNumberOfYears();

function createSortColor(): void {
  const sortColorContainer: HTMLElement = createNewElement('div', 'sort-color-container', headerContainer);
  const sortColorTitle: HTMLElement = createNewElementWithInnerText('div', 'sort-color-title', sortColorContainer, 'Цвет');
  const sortColorButtonsContainer: HTMLElement = createNewElement('div', 'sort-color-buttons-container', sortColorContainer);
  let i = 0;
  while (i < 5) {
    i++;
    createNewElement('button', 'sort-color-button', sortColorButtonsContainer);
  }
}
createSortColor()

function createSortSize(): void {
  const sortSizeContainer: string[] = ['Большой', 'Средний', 'Маленький']
  const sizeContainer: HTMLElement = createNewElement('div', 'size-container', headerContainer);
  const sizeContainerTitle: HTMLElement = createNewElementWithInnerText('div', 'size-container-title', sizeContainer, 'Размер');
  const sizeButtonContainer: HTMLElement = createNewElement('div', 'size-button-container', sizeContainer);
  const sizeButtonBigcontainer: HTMLElement = createNewElement('div', 'size-button-big-container', sizeButtonContainer);
  const sizeButtonAveragecontainer: HTMLElement = createNewElement('div', 'size-button-average-container', sizeButtonContainer);
  const sizeButtonSmallcontainer: HTMLElement = createNewElement('div', 'size-button-small-container', sizeButtonContainer);
  for (let i = 0; i < 3; i++) {
    createNewElement('button', 'size-button-containers-button', sizeButtonContainer.childNodes[i] as HTMLElement);
    createNewElementWithInnerText('div', 'size-button-containers-title', sizeButtonContainer.childNodes[i] as HTMLElement, sortSizeContainer[i]);
  }
}
createSortSize()

function createSortFavourite(): void {
  const favouriteSortContainer: HTMLElement = createNewElement('div', 'favorite-sort-container', headerContainer);
  const favouriteButton: HTMLElement = createNewElement('button', 'favourite-button', favouriteSortContainer);
  const favouriteButtonTitle: HTMLElement = createNewElementWithInnerText('p', 'favourite-button-title', favouriteSortContainer, 'Только любимые');
}
createSortFavourite()

function createSortSetting(): void {
  const settingSortContainer: HTMLElement = createNewElement('div', 'setting-container', headerContainer);
  const settingButtonContainer: HTMLElement = createNewElement('div', 'setting-button-container', settingSortContainer);
  createNewElementWithInnerText('button', 'setting-button', settingButtonContainer, 'Сбросить фильтры');
  createNewElementWithInnerText('button', 'setting-button', settingButtonContainer, 'Сбросить настройки');
}
createSortSetting()

function createGoodsContainer(): void {
  const goodsTitle: HTMLElement = createNewElementWithInnerText('p', 'goods-title', mainContainer, "Игрушки");
  const goodsContainer: HTMLElement = createNewElement('div', 'goods-container', mainContainer);
  function createCard(parametr: {}[]): void {
    for (let i = 0; i < parametr.length; i++) {
      let element1 = new Card(parametr[i] as DataCard, goodsContainer)
      element1.render()
    }
  }
  createCard(dataRU);
}
createGoodsContainer()

function createFooterContent(): void {
  const footerData: HTMLElement = createNewElement('div', 'footer-data', footerContainer);
  const copyright: HTMLElement = createNewElementWithInnerText('p', 'copyright', footerData, '©');
  const year: HTMLElement = createNewElementWithInnerText('p', 'copyright', footerData, `${yearNow}`);
  const gitHub: HTMLElement = createNewElementWithInnerText('a', 'github-link', footerData, 'github');
  gitHub.setAttribute('href', 'https://github.com/')
  const footerLinkContainer: HTMLElement = createNewElement('a', 'footer-link-container', footerContainer);
  footerLinkContainer.setAttribute('href', 'https://rs.school/js/')
  footerLinkContainer.setAttribute('href', 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/online-store/README.md');
  const footerIcoContent: HTMLElement = createNewElement('img', 'footer-ico-content', footerLinkContainer);
  footerIcoContent.setAttribute('src', '/assets/rs_school_js.svg');
  footerIcoContent.setAttribute('alt', 'RS School JS');
}
createFooterContent()


