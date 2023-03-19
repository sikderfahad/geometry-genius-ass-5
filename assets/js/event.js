// Triangle Calculate Operation
getBtn('triangle').addEventListener('click', function () {

    CalcLikeTiangle('triangle-first-value', 'triangle-last-value', 'triangle-shape')
})



// Rhombus Calculate Operation
getBtn('rhombus').addEventListener('click', function () {

    CalcLikeTiangle('rhombus-first-value', 'rhombus-last-value', 'rhombus-shape')
})


// pentagon Calculate Operation
getBtn('pentagon').addEventListener('click', function () {

    CalcLikeTiangle('pentagon-first-value', 'pentagon-last-value', 'pentagon-shape')
})


// rectangle Calculate Operation
getBtn('rectangle').addEventListener('click', function () {

    CalcLikeTiangle('rectangle-first-value', 'rectangle-last-value', 'rectangle-shape')
})


// parallelogram Calculate Operation
getBtn('parallelogram').addEventListener('click', function () {

    CalcLikeTiangle('parallelogram-first-value', 'parallelogram-last-value', 'parallelogram-shape')
})


// ellipse Calculate Operation
getBtn('ellipse').addEventListener('click', function () {

    CalcLikeTiangle('ellipse-first-value', 'ellipse-last-value', 'ellipse-shape')
})


function unitChanger() {
    const cmUnitValue = document.querySelector('.change-unit-area')
    const cmUnitName = document.querySelector('.cm-unit')
    const unitChangerBtn = document.querySelector('.unit-changer-btn')

    console.log(cmUnitValue, cmUnitName)

    const cmUnitValueFloat = parseFloat(cmUnitValue.innerText)
    const newMeterValue = cmUnitValueFloat / 100;

    cmUnitValue.innerText = newMeterValue.toFixed(2)
    cmUnitName.innerText = 'm'
    unitChangerBtn.innerText = 'Converted'

    cmUnitValue.classList.remove('change-unit-area')
    cmUnitName.classList.remove('cm-unit')
    unitChangerBtn.classList.remove('unit-changer-btn')


    const changerBtn = document.querySelector('.unit-changer-btn')
    changerBtn.setAttribute('disabled', true)
    console.log(typeof cmUnitValueFloat, cmUnitValueFloat)

}
