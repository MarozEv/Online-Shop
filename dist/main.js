import { dataRU } from './data.js';
import { Card } from './class-Card.js';
const body = document.querySelector('body');
const mainPageContent = createNewElement('div', 'main-page-content', body);
const header = createNewElement('header', 'header', mainPageContent);
const headerContainer = createNewElement('div', 'header-container', header);
const main = createNewElement('main', 'main', mainPageContent);
const mainContainer = createNewElement('div', 'main-container', main);
const footer = createNewElement('footer', 'footer', body);
const footerContainer = createNewElement('div', 'footer-container', footer);
const yearNow = new Date().getFullYear();
const lang = "ru";
function createNewElement(typeElement, classElement, parentElemnt) {
    const element = document.createElement(typeElement);
    element.classList.add(classElement);
    parentElemnt.append(element);
    return element;
}
function createNewElementWithInnerText(typeElement, classElement, parentElemnt, innerText) {
    const element = document.createElement(typeElement);
    element.classList.add(classElement);
    element.innerText = innerText;
    parentElemnt.append(element);
    return element;
}
function createMusicAndShowHeaderElements(language) {
    const headerNavigation = createNewElement('div', 'header-navigator', headerContainer);
    const soundButoon = createNewElement('div', 'sound-header-button', headerNavigation);
    const snowButton = createNewElement('div', 'snow-header-button', headerNavigation);
    const searchButton = createNewElement('input', 'search-header-button', headerNavigation);
    searchButton.setAttribute('id', 'searchPlace');
    switch (language) {
        case "ru":
        case "ru-RU":
            searchButton.placeholder = 'Поиск';
            break;
        case "en":
        case "en-US":
            searchButton.placeholder = 'Search';
    }
}
createMusicAndShowHeaderElements(lang);
function createFirstSortModulHeaderElements() {
    const searchContainer = createNewElement('div', 'search-container', headerContainer);
    const headerTextSearch = createNewElementWithInnerText('p', 'text-header-search', searchContainer, 'СОРТИРОВАТЬ');
    const menuSeach = createNewElement('select', 'select-menu', searchContainer);
    const ascendingAmount = createNewElementWithInnerText('option', 'select-option', menuSeach, 'По возрастанию шт');
    ascendingAmount.value = 'sort-amout-max';
    const descendingAmount = createNewElementWithInnerText('option', 'select-option', menuSeach, 'По убыванию шт');
    descendingAmount.value = 'sort-amout-min';
    const ascendingYear = createNewElementWithInnerText('option', 'select-option', menuSeach, 'Год по возрастанию');
    ascendingYear.value = 'sort-year-max';
    const descendingYear = createNewElementWithInnerText('option', 'select-option', menuSeach, 'Год по убыванию');
    descendingYear.value = 'sort-year-min';
}
createFirstSortModulHeaderElements();
function createSortCategoryHeaderElement() {
    const categoryTitle = createNewElement('div', 'category-title', headerContainer);
    const categorySearchContainer = createNewElementWithInnerText('div', 'category-search-container', categoryTitle, 'КАТЕГОРИИ');
    const categorySearchContainerAll = createNewElement('div', 'category-search-container-text', categoryTitle);
    const categorySearchContainerFormGroup = createNewElement('div', 'category-search-container-form-group', categorySearchContainerAll);
    const formGroupInput = createNewElement('input', 'form-group-input', categorySearchContainerFormGroup);
    formGroupInput.setAttribute('type', 'checkbox');
    formGroupInput.setAttribute('id', 'checkbox');
    const formGroupInputLabel = createNewElement('label', 'form-group-input-label', categorySearchContainerFormGroup);
    formGroupInputLabel.setAttribute('for', 'checkbox');
    const categorySearchContainerFormAll = createNewElementWithInnerText('p', 'text-all-button', categorySearchContainerAll, 'Все');
}
createSortCategoryHeaderElement();
function createSortFormsCategory() {
    const categoryFormsContainer = createNewElement('div', 'category-forms-container', headerContainer);
    const formsTitle = createNewElement('div', 'forms-title', categoryFormsContainer);
    const formsContainer = createNewElement('div', 'forms-container', categoryFormsContainer);
    let i = 0;
    while (i < 6) {
        i++;
        createNewElement('div', 'forms-container-element', formsContainer);
    }
    const categoryName = ['Колокол', 'Шар', 'Шишка', 'Звезда', 'Снежинка', 'Фигурка'];
    for (let i = 0; i < 6; i++) {
        createNewElement('button', 'forms-image', formsContainer.childNodes[i]);
        createNewElementWithInnerText('p', 'forms-text', formsContainer.childNodes[i], categoryName[i]);
    }
}
createSortFormsCategory();
function createSortNumberOfCopies() {
    const numberOfCopiesContainer = createNewElement('div', 'number-of-copies-container', headerContainer);
    const numberOfCopiesContainerTitle = createNewElementWithInnerText('p', 'number-of-copies-container-title', numberOfCopiesContainer, 'Количество экземпляров');
    const numberOfCopiesFilteSlider = createNewElement('div', 'number-of-copies-filter-slider', numberOfCopiesContainer);
    numberOfCopiesFilteSlider.setAttribute('id', 'range-slider-copies');
    const numberOfPriceFilteOutputs = createNewElement('div', 'number-of-copies-filter-outputs', numberOfCopiesContainer);
    const firstOutput = createNewElementWithInnerText('output', 'number-of-copies-filter-output', numberOfPriceFilteOutputs, '1');
    firstOutput.setAttribute('id', 'copies-output-0');
    const secondtOutput = createNewElementWithInnerText('output', 'number-of-copies-filter-output', numberOfPriceFilteOutputs, '12');
    secondtOutput.setAttribute('id', 'copies-output-1');
}
createSortNumberOfCopies();
function createSortNumberOfYears() {
    const numberOfYearsContainer = createNewElement('div', 'number-of-years-container', headerContainer);
    const numberOfYearsContainerTitle = createNewElementWithInnerText('p', 'number-of-years-container-title', numberOfYearsContainer, 'Год приобритения');
    const numberOfYearFilteSlider = createNewElement('div', 'number-of-years-filter-slider', numberOfYearsContainer);
    numberOfYearFilteSlider.setAttribute('id', 'range-slider-year');
    const numberOfYearFilteOutputs = createNewElement('div', 'number-of-years-filter-outputs', numberOfYearsContainer);
    const firstOutput = createNewElement('output', 'number-of-years-filter-output', numberOfYearFilteOutputs);
    firstOutput.setAttribute('id', 'year-output-0');
    firstOutput.textContent = '1940';
    const secondtOutput = createNewElement('output', 'number-of-years-filter-output', numberOfYearFilteOutputs);
    secondtOutput.textContent = '2021';
    secondtOutput.setAttribute('id', 'year-output-1');
}
createSortNumberOfYears();
function createSortColor() {
    const sortColorContainer = createNewElement('div', 'sort-color-container', headerContainer);
    const sortColorTitle = createNewElementWithInnerText('div', 'sort-color-title', sortColorContainer, 'Цвет');
    const sortColorButtonsContainer = createNewElement('div', 'sort-color-buttons-container', sortColorContainer);
    let i = 0;
    while (i < 5) {
        i++;
        createNewElement('button', 'sort-color-button', sortColorButtonsContainer);
    }
}
createSortColor();
function createSortSize() {
    const sortSizeContainer = ['Большой', 'Средний', 'Маленький'];
    const sizeContainer = createNewElement('div', 'size-container', headerContainer);
    const sizeContainerTitle = createNewElementWithInnerText('div', 'size-container-title', sizeContainer, 'Размер');
    const sizeButtonContainer = createNewElement('div', 'size-button-container', sizeContainer);
    const sizeButtonBigcontainer = createNewElement('div', 'size-button-big-container', sizeButtonContainer);
    const sizeButtonAveragecontainer = createNewElement('div', 'size-button-average-container', sizeButtonContainer);
    const sizeButtonSmallcontainer = createNewElement('div', 'size-button-small-container', sizeButtonContainer);
    for (let i = 0; i < 3; i++) {
        createNewElement('button', 'size-button-containers-button', sizeButtonContainer.childNodes[i]);
        createNewElementWithInnerText('div', 'size-button-containers-title', sizeButtonContainer.childNodes[i], sortSizeContainer[i]);
    }
}
createSortSize();
function createSortFavourite() {
    const favouriteSortContainer = createNewElement('div', 'favorite-sort-container', headerContainer);
    const favouriteButton = createNewElement('button', 'favourite-button', favouriteSortContainer);
    const favouriteButtonTitle = createNewElementWithInnerText('p', 'favourite-button-title', favouriteSortContainer, 'Только любимые');
}
createSortFavourite();
function createSortSetting() {
    const settingSortContainer = createNewElement('div', 'setting-container', headerContainer);
    const settingButtonContainer = createNewElement('div', 'setting-button-container', settingSortContainer);
    createNewElementWithInnerText('button', 'setting-button', settingButtonContainer, 'Сбросить фильтры');
    createNewElementWithInnerText('button', 'setting-button', settingButtonContainer, 'Сбросить настройки');
}
createSortSetting();
function createGoodsContainer() {
    const goodsTitle = createNewElementWithInnerText('p', 'goods-title', mainContainer, "Игрушки");
    const goodsContainer = createNewElement('div', 'goods-container', mainContainer);
    function createCard(parametr) {
        for (let i = 0; i < parametr.length; i++) {
            let element1 = new Card(parametr[i], goodsContainer);
            element1.render();
        }
    }
    createCard(dataRU);
}
createGoodsContainer();
function createFooterContent() {
    const footerData = createNewElement('div', 'footer-data', footerContainer);
    const copyright = createNewElementWithInnerText('p', 'copyright', footerData, '©');
    const year = createNewElementWithInnerText('p', 'copyright', footerData, `${yearNow}`);
    const gitHub = createNewElementWithInnerText('a', 'github-link', footerData, 'github');
    gitHub.setAttribute('href', 'https://github.com/');
    const footerLinkContainer = createNewElement('a', 'footer-link-container', footerContainer);
    footerLinkContainer.setAttribute('href', 'https://rs.school/js/');
    footerLinkContainer.setAttribute('href', 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/online-store/README.md');
    const footerIcoContent = createNewElement('img', 'footer-ico-content', footerLinkContainer);
    footerIcoContent.setAttribute('src', '/assets/rs_school_js.svg');
    footerIcoContent.setAttribute('alt', 'RS School JS');
}
createFooterContent();
//# sourceMappingURL=main.js.map