let modal__title = document.querySelectorAll('.modal__title')

modal__title.forEach(el =>{
    el.addEventListener('click', function (event){
        let getModal = event.currentTarget.parentNode.querySelector('.modal')
        getModal.classList.toggle('modal__open')
    })
})