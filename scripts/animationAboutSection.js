const LeftObserver = new IntersectionObserver(
    ([entry], observer) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("classAnimationLeft")
            // observer.unobserve(entry.target);
        } else {
            document.querySelector(".classAnimationLeft").classList.remove("classAnimationLeft")
        }
    },
    {
        threshold: [0.1, 0.8]
    }
);

let aboutMeText = document.querySelector(".aboutMе__text")
LeftObserver.observe(aboutMeText)

const ImgObserver = new IntersectionObserver(
    ([entry], observer) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("classAnimationRight")
        } else {
            document.querySelector(".classAnimationRight").classList.remove("classAnimationRight")
        }
    },
    {
        threshold: [0.1, 0.8]
    }
);
let aboutMe1Text = document.querySelector(".aboutMе1__text")
if (window.innerWidth > 577) {
    ImgObserver.observe(aboutMe1Text)
}
