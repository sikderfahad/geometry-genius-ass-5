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



    const cmUnitValueFloat = parseFloat(cmUnitValue.innerText)
    console.log(typeof cmUnitValueFloat)
    const newMeterValue = cmUnitValueFloat / 100;

    cmUnitValue.innerText = newMeterValue.toFixed(2)
    cmUnitName.innerText = 'm'
    unitChangerBtn.innerText = 'Converted'

    cmUnitValue.classList.remove('change-unit-area')
    cmUnitName.classList.remove('cm-unit')
    unitChangerBtn.classList.remove('unit-changer-btn')


    let changerBtn = document.querySelector('.unit-changer-btn')
    changerBtn.setAttribute('disabled', true)


}


// Random Color generator and Set
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

function getAllCardForRandomColor(elementId) {
    getBtn(elementId).addEventListener("mouseenter", function () {
        getBtn(elementId).style.backgroundColor = randomColor();
        getBtn(elementId).style.transition = '.5s';

    });

    getBtn(elementId).addEventListener("mouseleave", function () {
        getBtn(elementId).style.backgroundColor = 'white';

    });




}

getAllCardForRandomColor('card-1')
getAllCardForRandomColor('card-2')
getAllCardForRandomColor('card-3')
getAllCardForRandomColor('card-4')
getAllCardForRandomColor('card-5')
getAllCardForRandomColor('card-6')





