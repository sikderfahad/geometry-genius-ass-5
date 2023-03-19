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


function CreateLi(shapeNameValue, area) {

    // Create Result Item
    let resultBox = getBtn('result-box')
    let li = document.createElement('li')
    li.classList.add('shape-item')
    li.innerHTML = `
    <div class="flex justify-between items-center text-sm mt-5">
        <p>${shapeNameValue}</p>
        <p><span class="change-unit-area">${area} </span> <span class="cm-unit">cm</span><sup>2</sup></p>
        <button onclick="unitChanger()" type="button"
            class="unit-changer-btn text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-normal rounded-lg text-xs px-2 py-2 text-center">Convert
            to m<sup>2</sup>
        </button>
        <button class="btn-close text-red-500 text-xl"><i class="fas fa-times"></i></button>


    </div>
    `
    resultBox.appendChild(li)
}



// Same catagory formula of Triangle, Rhombus, Pentagon
function WithHalfOperation(firstArm, lastArm, shapeName) {

    const shapeNameValue = getBtn(shapeName).innerText
    let nameLower = shapeNameValue.toLocaleLowerCase()

    // Check Result box length
    let listLi = document.getElementsByTagName("li"),
        listLength = listLi.length;

    if (listLength === 6) {
        return false
    }

    // check input validation
    const check = 0.5 * firstArm * lastArm
    if (isNaN(check)) {
        return false
    }

    if (nameLower === 'triangle' || nameLower === 'rhombus' || nameLower === 'pentagon') {

        const area = 0.5 * firstArm * lastArm
        CreateLi(shapeNameValue, area.toFixed(2))
    }


    if (nameLower === 'rectangle' || nameLower === 'parallelogram') {

        const area = firstArm * lastArm
        CreateLi(shapeNameValue, area.toFixed(2))
    }


    if (nameLower === 'ellipse') {

        const area = Math.PI * firstArm * lastArm
        CreateLi(shapeNameValue, area.toFixed(2))
    }


}


// 3 shape same operation
function CalcLikeTiangle(firstElementId, lastElementId, shapeId) {
    const firstArm = InputOperate(firstElementId)
    const lastArm = InputOperate(lastElementId)
    const area = WithHalfOperation(firstArm, lastArm, shapeId)
}