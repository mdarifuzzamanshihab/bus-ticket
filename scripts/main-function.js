// set bg by click
function clickBg(element) {
    const elementText = getElementText(element)
    setBgColor(elementText);
    seatIncrease()
    const selectSeat2 = document.getElementById('seatName1')
    selectSeat2.innerText = elementText;

    newSeatName(element);





}

//seat name added by append 

function newSeatName(element) {
    const elementSelect = document.getElementById(element)
    const elementSelectInner = elementSelect.innerText;
    const selectElement = document.getElementById('seatTotalWithName')
    const newSeatDiv = document.createElement('div');
    const newSeatH3 = document.createElement('h3');
    const newSeatH32 = document.createElement('h3');
    const newSeatH33 = document.createElement('h3');
    newSeatH3.innerText = elementSelectInner;
    newSeatDiv.appendChild(newSeatH3);
    const newSeatH3second = 'Economy'
    newSeatH32.innerText = newSeatH3second;
    newSeatDiv.appendChild(newSeatH32);
    const newSeatH3third = '550'
    newSeatH33.innerText = newSeatH3third;
    newSeatDiv.appendChild(newSeatH33);
    newSeatDiv.classList.add("flex")
    newSeatDiv.classList.add("justify-between")

    selectElement.appendChild(newSeatDiv)
    return newSeatDiv;

}

// newsseat name added function


// SEAT NUMBER INCREASED

function seatIncrease() {
    const supText = getElement('sup1')
    const supTextInner = supText.innerText;
    const number = parseInt(supTextInner);
    const newSeat = number + 1;
    console.log(newSeat)
    supText.innerText = newSeat
    const leftSeat = getElement('seat40')
    const inner = leftSeat.innerText;
    const leftSeatNumber = parseInt(inner);
    const leftSeatUpdate = leftSeatNumber - 1;
    leftSeat.innerText = leftSeatUpdate;
    return leftSeat;
}