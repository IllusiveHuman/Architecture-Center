
const slideValue_1 = document.querySelector('.current-slider-value-1');
const slideValue_2 = document.querySelector('.current-slider-value-2');
const inputSlider_1 = document.querySelector('.input-range-floor');
const inputSlider_2 = document.querySelector('.input-range-time');
const showCurrentSliderValue = document.querySelectorAll('.current-slider-value-1, .current-slider-value-2')
const parametrs_1 = document.querySelectorAll('.value-1');
const parametrs_2 = document.querySelectorAll('.value-2');
const clearFilters = document.querySelector('.clear-filters')


const navigation = document.querySelector('.navigation');
const btn_menu = document.querySelector('.menu');

if (window.innerWidth > 480) {
    btn_menu.style.display = "none"
}


btn_menu.addEventListener('click', () => {
    navigation.classList.toggle('show-mobile-navigation');
    console.log(1)
})

// Поднятие крайних значений ползунка

const initSlider = function () {

    inputSlider_1.oninput = (() => {


        let value = inputSlider_1.value;
        slideValue_1.textContent = value;

        let min = inputSlider_1.min;
        let max = inputSlider_1.max;
        let percent = ((value - min) / (max - min)) * 100;

        let progress = (value - min) / (max - min);

        let translateX = 50 - progress * 100;

        if (value == 10 || value == 160) {
            slideValue_1.style.display = 'none'
        }
        else {
            slideValue_1.style.display = 'block'

        }

        slideValue_1.style.left = `calc(${percent}% - ${slideValue_1.offsetWidth / 2}px)`;;
        console.log(slideValue_1.offsetWidth)
        slideValue_1.style.transform = `translateX(${translateX}%)`;

        if ((value >= 11 && value <= 17) || (value >= 147 && value <= 159)) {
            Array.from(parametrs_1).forEach((el) => {
                el.classList.add("value-translate")
            })
        }
        else {
            Array.from(parametrs_1).forEach((el) => {
                el.classList.remove("value-translate")
            })
        }
    })

    inputSlider_2.oninput = (() => {


        let value = inputSlider_2.value;
        slideValue_2.textContent = value;

        let min = inputSlider_2.min;
        let max = inputSlider_2.max;
        let percent = ((value - min) / (max - min)) * 100;

        let progress = (value - min) / (max - min);

        let translateX = 50 - progress * 100;

        if (value == 4 || value == 60) {
            slideValue_2.style.display = 'none'
        }
        else {
            slideValue_2.style.display = 'block'

        }

        slideValue_2.style.left = `calc(${percent}% - ${slideValue_2.offsetWidth / 2}px)`;;
        slideValue_2.style.transform = `translateX(${translateX}%)`;

        if ((value >= 5 && value <= 6) || (value >= 57 && value <= 59)) {
            Array.from(parametrs_2).forEach((el) => {
                el.classList.add("value-translate")
            })
        }
        else {
            Array.from(parametrs_2).forEach((el) => {
                el.classList.remove("value-translate")
            })
        }
    })
}

initSlider()

/*Автоширина Select/range/calculateBTN */

const allSelectorsBlocks = document.querySelectorAll('.select-wrapper')
const allSelectors = document.querySelectorAll('.select-wrapper select')
const range_1 = document.querySelector('.range-1')
const range_2 = document.querySelector('.range-2')
const input_range_time = document.querySelector('.input-range-time')
const input_range_floor = document.querySelector('.input-range-floor')
const calculate_cost = document.querySelector('.calculate-cost')

console.log()

const initAllSelectors = function () {
    allSelectorsBlocks.forEach(element => {
        element.style.width = `${window.innerWidth * 0.85}px`
    })

    allSelectors.forEach(element => {
        element.style.width = `${window.innerWidth * 0.85}px`
    })
    range_1.style.width = `${window.innerWidth * 0.85}px`
    range_2.style.width = `${window.innerWidth * 0.85}px`
    input_range_time.style.width = `${window.innerWidth * 0.85}px`
    input_range_floor.style.width = `${window.innerWidth * 0.85}px`
    calculate_cost.style.width = `${window.innerWidth * 0.85}px`
}

if (window.innerWidth <= 480) { initAllSelectors() }


/*Выравния кнопки расчёта и сброса фильтров */

const initClearFilterBtn = function () {
    const margin_left = (window.innerWidth - parseFloat(calculate_cost.style.width)) / 2;
    console.log(margin_left)
    clearFilters.style.marginLeft = `${margin_left}px`
}

if (window.innerWidth <= 480) { initClearFilterBtn() }


const autoMarginCalculateBtn = function () {
    const calculate_buttons = document.querySelector('.calculate-buttons')
    const selector_element = document.querySelector('.select-wrapper').getBoundingClientRect()


    calculate_buttons.style.marginLeft = `${selector_element.left - calculate_buttons.getBoundingClientRect().left}px`
}


if (window.innerWidth > 480) autoMarginCalculateBtn()

clearFilters.addEventListener('click', () => {
    allSelectors.forEach(selector => {
        selector.selectedIndex = 0;
    })
    inputSlider_1.value = inputSlider_1.min
    inputSlider_2.value = inputSlider_2.min
    showCurrentSliderValue.forEach(el => {
        el.style.display = 'none'
    })
})


/*Плавная анимация при первом скролле*/

const sections = document.querySelectorAll('.section')

const lazyload = function (entries, observer) {
    const [entry] = entries
    entry.target.classList.remove('lazy-load')
    observer.unobserve(entry.target)
}

const observer = new IntersectionObserver(lazyload, {
    root: null,
    rootMargin: '-100px',
    threshold: 0.15
})
sections.forEach((section) => observer.observe(section))


























