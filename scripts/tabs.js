let tabLinks = document.querySelectorAll(".tabLinks")
let openText = (event) => {
    let getTabActive = document.querySelectorAll(".tabActive")
    if (getTabActive.length > 0) {
        getTabActive.forEach(e => {
            e.classList.remove("tabActive")
            e.classList.add("tabContent")
        })
    }
    let getTabLinksActive = document.querySelectorAll('.tabLinksActive')
    if (getTabLinksActive.length > 0) {
        getTabLinksActive.forEach(e => {
            e.classList.remove("tabLinksActive")
            e.classList.add("tabLinks")

        })
    }

    let getDataset = event.target.dataset.id
    let getId = document.querySelector("#" + getDataset)
    getId.classList.remove('tabContent')
    getId.classList.add('tabActive')

    event.currentTarget.classList.add("tabLinksActive")

    tabLinks.forEach(el => {

    })

}

tabLinks.forEach(el => {
    el.addEventListener("click", openText)

})