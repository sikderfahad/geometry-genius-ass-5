function getBtn(elementId) {
    const btn = document.getElementById(elementId)
    return btn
}

// Input Validation
function InputOperate(elementId) {
    const input = getBtn(elementId)
    const inputInt = parseFloat(input.value)
    const check = 0.5 * inputInt

    if (input.value == '') {
        return alert('The value shouldn\'t empt')
    }
    if (isNaN(check)) {
        return alert('Please enter a Integer value')
    }
    return inputInt
}


function WithoutHalfOperation(firstArm, lastArm, shapeName) {
    const area = 0.5 * firstArm * lastArm
    const shapeNameValue = getBtn(shapeName).innerText
    let resultBox = getBtn('result-box')
    let li = document.createElement('li')
    li.innerHTML = `
    <div class="flex justify-between items-center text-sm mt-5">
        <p>${shapeNameValue}</p>
        <p>${area} <span>cm<sup>2</sup></span></p>
        <button type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-normal rounded-lg text-sm px-2 py-2 text-center">Convert
            to m<sup>2</sup></button>

    </div>
    `
    resultBox.appendChild(li)
}

getBtn('triangle').addEventListener('click', function () {
    const shapeName = getBtn('triangle-shape')

    const firstArm = InputOperate('triangle-first-value')
    const lastArm = InputOperate('triangle-last-value')
    const area = WithoutHalfOperation(firstArm, lastArm, 'triangle-shape')

    console.log(area)
})