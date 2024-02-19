// set bg by click
function clickBg(element) {
    const elementSelect = document.getElementById(element);
    const elementText = getElementText(element)
    setBgColor(elementText);
    seatIncrease()


    newSeatName(element);




    // if (numberInput.elementSelect.classList.contains('bg-color')) {

    // }
    const divsAll = document.querySelectorAll('div')


    for (let i = 0; i < divsAll.length; i++) {
        const div1 = divsAll[i]
        if (div1.classList.contains('bg-color')) {

            break;


        }
        else {

        }

    }



}

// new function for disabling the next button
function keyUp11() {
    const inputElement = getElement('numInput');
    const inputValue = inputElement.value;
    const arrayNum = inputValue.split('');
    const len = arrayNum.length;
    let len2 = parseInt(len);
    const selectBtn = getElement('next-btn')
    const divsAll = document.querySelectorAll('div')

    for (let i = 0; i < divsAll.length; i++) {
        const div1 = divsAll[i]
        if (div1.classList.contains('bg-color') && len2 === 11) {
            selectBtn.removeAttribute("disabled");
            break;


        }
        else {

        }

    }




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
    selectElement.appendChild(newSeatDiv);

    // make btn non-clickable
    elementSelect.classList.add('disabled-none');

    // total
    const totalPrice = getElement('total-price')
    let innerTotal = totalPrice.innerText;
    let totalPrice2 = parseInt(innerTotal);
    const newTotalPrice2 = totalPrice2 + 550;
    totalPrice.innerText = newTotalPrice2
    // grand total
    const totalPrice4 = getElement('total-price2')
    let innerTotal2 = totalPrice4.innerText;
    let totalPrice3 = parseInt(innerTotal2);
    const newTotalPrice4 = totalPrice3 + 550;
    totalPrice4.innerText = newTotalPrice4
    fourTickets();


    return totalPrice4;



}
// 
function coupon() {

    const selectInput = getElement('coupon-field');
    const valueInput = selectInput.value;
    const totalPrice = getElementText('total-price');
    const new2 = getElement('dis-price')
    const makNumber = parseInt(totalPrice)
    const selectButton = getElement('btn-coup')
    if (valueInput === "NEW15") {

        const new1 = makNumber * 0.15;

        new2.innerText = new1
        console.log(new1)
        const grandTotal = makNumber - new1;
        const selectGrand = getElement('total-price2');
        selectGrand.innerText = grandTotal;
        selectInput.classList.add('hidden');
        selectButton.classList.add('hidden')
        const selectElement2 = getElement('sp-alert')
        selectElement2.classList.add('hidden');
    }

    else if (valueInput === "Couple 20") {

        const new3 = getElementText('total-price')
        const new4 = parseInt(new3)
        const new5 = new4 * 0.20;
        new2.innerText = new5
        const grandTotal = makNumber - new5;
        const selectGrand = getElement('total-price2');
        selectGrand.innerText = grandTotal;
        selectInput.classList.add('hidden');
        selectButton.classList.add('hidden');
        const selectElement2 = getElement('sp-alert')
        selectElement2.classList.add('hidden');
    }
    else {
        alert1()
    }

}

// alert coupon

function alert1() {
    const selectElement2 = getElement('sp-alert')
    selectElement2.classList.remove('hidden');
    const selectElement = getElement('coupon-field')
    selectElement.classList.add('red-alert-border')
}


// newsseat name added function


// SEAT NUMBER INCREASED

function seatIncrease() {
    const supText = getElement('sup1')
    const supTextInner = supText.innerText;
    const number = parseInt(supTextInner);
    const newSeat = number + 1;
    supText.innerText = newSeat
    const leftSeat = getElement('seat40')
    const inner = leftSeat.innerText;
    const leftSeatNumber = parseInt(inner);
    const leftSeatUpdate = leftSeatNumber - 1;
    leftSeat.innerText = leftSeatUpdate;
    return leftSeat;
}



// function for 4 tickets

function fourTickets() {
    const selectElements = document.querySelectorAll('.bg-color');
    console.log(selectElements)
    const lengthOfClasses = selectElements.length;
    const lengthMain = parseInt(lengthOfClasses);
    const selectMainDiv1 = getElement('seatAll1')
    const selectMainDiv2 = getElement('seatAll2')
    const selectCoupon = getElement('coupon-field');


    if (lengthMain === 4) {
        selectMainDiv1.classList.add('disabled-none')
        selectMainDiv2.classList.add('disabled-none')
        selectCoupon.removeAttribute('disabled')

    }
    else {

    }


}


// next button next page

function nextButton() {
    const selectElement1 = getElement('head-hide')
    selectElement1.classList.add('hidden')
    const selectElement2 = getElement('body1')
    selectElement2.classList.add('hidden')
    const selectElement3 = getElement('footer-hide')
    selectElement3.classList.add('hidden');
    const selectElement4 = getElement('success-div');
    selectElement4.classList.remove('hidden');
}

// refresh page
function refreshSuccessPage(){
    location.reload();
}