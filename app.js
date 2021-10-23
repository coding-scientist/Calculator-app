const numberDisplay = document.getElementById(`number-display`)
const numbers = document.querySelectorAll(`.num`)
const add = document.querySelector(`.add`)
const minus = document.querySelector(`.minus`)
const multiply = document.querySelector(`.multiply`)
const divide = document.querySelector(`.divide`)
const point = document.querySelector(`.point`)
const equal = document.querySelector(`.equal`)

for (let i = 0; i < numbers.length; i++) {
   numbers[i].addEventListener(`click`, () => {
      numberDisplay.textContent += numbers[i].textContent
   })
}