/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("inputarea")
const btnEl = document.getElementById("btn-input")
const lengthDisplayEl = document.getElementById("lengthDisplay")
const volumeDisplayEl = document.getElementById("volumeDisplay")
const massDisplayEl = document.getElementById("massDisplay")

btnEl.addEventListener("click", function(){
    lengthConvert(inputEl.value)
    volumeConvert(inputEl.value)
    massConvert(inputEl.value)
})

function lengthConvert(value) {
    const meterToFeet = value * 3.281
    const feetToMeter = value / 3.281
    lengthDisplayEl.innerHTML = `${value} meters = ${meterToFeet.toFixed(3)} feets
    | ${value} feets = ${feetToMeter.toFixed(3)} meters
    `
}

function volumeConvert(value) {
    const literToGallon = value * 0.264
    const gallonToLiter = value / 0.264
    volumeDisplayEl.innerHTML = `${value} meters = ${literToGallon.toFixed(3)} feets
    | ${value} feets = ${gallonToLiter.toFixed(3)} meters
    `
}

function massConvert(value) {
    const kiloToPound = value * 2.204
    const poundToKilo = value / 2.204
    massDisplayEl.innerHTML = `${value} meters = ${kiloToPound.toFixed(3)} feets
    | ${value} feets = ${poundToKilo.toFixed(3)} meters
    `
}