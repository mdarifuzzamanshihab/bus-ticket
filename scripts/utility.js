// SELECT ELEMENT BY ID

function getElement(element) {
    const selectElement = document.getElementById(element);
    return selectElement;

}

// get element innertext

function getElementText(element) {
    const selectElement = document.getElementById(element);
    const innerText = selectElement.innerText;
    return innerText;
}

// replace inner text

function setInnerText(element, value) {
    const selectElement = document.getElementById(element)
    const innerText = selectElement.innerText
    innerText = value;
    return innerText;

}

// set seat bg 
function setBgColor(element) {
    const selectElement = document.getElementById(element);
    selectElement.classList.add('bg-color');
}

function removeBgColor(element) {
    const selectElement = document.getElementById(element);
    selectElement.classList.remove('bg-color');
}