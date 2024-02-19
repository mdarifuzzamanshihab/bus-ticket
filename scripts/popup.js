function openPopUp() {
    const openBtn = document.getElementById("openModal1");
    const closeBtn = document.getElementById("closeModal");
    const modal = document.getElementById("modal11");
    // const body11 = document.getElementById("body1");
    // console.log(modal)
    
    modal.classList.add('open')
    closeBtn.addEventListener('click', function () {
        modal.classList.remove('open')
    });
    
}