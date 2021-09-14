
let inputLeft = document.querySelector("#input")
let inputRight = document.querySelector("#output")
console.log(inputRight)
let result = document.querySelector("#placeToPutResults")
let plusSign = document.querySelector("#add")
let minusSign = document.querySelector("#sub")
let divideSign = document.querySelector("#divi")
let multiSign = document.querySelector("#multi")
let clearSign = document.querySelector("#clear")
let modSign = document.querySelector("#modulus")
plusSign.addEventListener("click", addFunction)
minusSign.addEventListener("click", subFunction)
divideSign.addEventListener("click", divFunction)
multiSign.addEventListener("click", multiFunction)
modSign.addEventListener("click", modFunction)
clearSign.addEventListener("click", clearFunction)

function addFunction() {
  let sum = parseInt(inputLeft.value) + parseInt(inputRight.value)
  result.innerText = sum
}

function subFunction() {
  let difference = parseInt(inputLeft.value) - parseInt(inputRight.value)
  result.innerText = difference
}

function divFunction() {
  let quotient = parseInt(inputLeft.value) / parseInt(inputRight.value)
  result.innerText = quotient
}

function multiFunction() {
  let product = parseInt(inputLeft.value) * parseInt(inputRight.value)
  result.innerText = product
}

function modFunction() {
  let remainder = parseInt(inputLeft.value) % parseInt(inputRight.value)
  result.innerText = remainder
}

function clearFunction() {
  inputLeft.value = 0
  inputRight.value = 0
  result.innerText = " "
}

