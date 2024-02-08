let videoBtn = document.querySelectorAll(".video-block")
let videoBlock = document.querySelector(".video-block")
let videoPlay = document.querySelectorAll("video")

let clickBtn = (event) => {
    let video
        = event.currentTarget.querySelector('video')
    let btn = event.currentTarget.querySelector(".video-btn")


    if (video.paused) {
        btn.textContent = "||"
        btn.style.fontSize = "15px"
        video.play()
    } else {
        btn.textContent = ">"
        video.pause()

    }
}

videoBtn.forEach(button => {


    button.addEventListener('click', clickBtn)
})