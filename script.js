const numElement = document.querySelectorAll(".num")
const signElement = document.querySelectorAll(".sign")
const equalSign = document.querySelector(".equal")
const inputElement = document.querySelector(".result-number")
const resetElement = document.querySelector(".reset")
const deleteElement = document.querySelector(".button-del")

let buttons = Array.from(document.querySelectorAll(".btn"))

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        inputElement.innerText = "0"
        break
      case "=":
        inputElement.innerText = eval(inputElement.innerText)
        break
      case "DEL":
        let currentValue = inputElement.innerText
        let newValue = currentValue.slice(0, -1)
        inputElement.innerText = newValue
        break
      default:
        if (inputElement.innerText === "0" && e.target.innerText !== ".") {
          inputElement.innerText = e.target.innerText
        } else {
          inputElement.innerText += e.target.innerText
        }
    }
  })
})
