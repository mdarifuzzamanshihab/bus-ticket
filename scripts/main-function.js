// set bg by click
function clickBg(element) {
    const elementText = getElementText(element)
    setBgColor(elementText);
    seatIncrease()
    appendSeat()    




}

// make innerhtml for seat booking
function appendSeat() {
    const selectElement = getElement('seatTotalWithName');
    selectElement.innerHTML +=
        `<div class="flex justify-between">
        <h3 class="text-[#03071299]">C3</h3>
        <h3 class="text-[#03071299]">Economy</h3>
        <h3 class="text-[#03071299]">550</h3>
    </div>`;
}

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