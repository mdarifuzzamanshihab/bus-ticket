function openPopUp() {
    const openBtn = document.getElementById("openModal1");
    const closeBtn = document.getElementById("closeModal");
    const modal = document.getElementById("modal11");
    
    
    modal.classList.add('open')
    closeBtn.addEventListener('click', function () {
        modal.classList.remove('open')
    });
    
}