const carOptions = {
    name: 'Velvet',
    number: '23opsx',
    colour: '0xff',
    tuningCrossed: true,
    maxSpeed: 250,
    maxTrunk: 90
}

const inputValue = document.querySelector('.box__form--input')
const fullTrunkBtn = document.querySelector('.box__form--btn')
inputValue.addEventListener('input', () => {
    inputValue.value = inputValue.value > carOptions.maxTrunk ? carOptions.maxTrunk : inputValue.value
})

fullTrunkBtn.addEventListener('click', () => {
    inputValue.value = carOptions.maxTrunk
})