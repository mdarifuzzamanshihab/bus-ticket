// set bg by click
function clickBg(element) {
    const elementSelect = getElementText(element);
    const bgColor = setBgColor(elementSelect)
    seatIncrease();
    


}

// SEAT NUMBER INCREASED

function seatIncrease() {
    const supText = getElement('sup1')
    const supTextInner = supText.innerText;
    const number = parseInt(supTextInner);
    const newSeat = number + 1;
    console.log(newSeat)
    supText.innerText = newSeat
    const leftSeat = getElement()
    return supText

}