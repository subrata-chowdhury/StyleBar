const epicGameBtnCon = document.querySelector(".epic-games-btn-container");
const logoBtnPopup = document.querySelector(".logo-btn-popup");

epicGameBtnCon.addEventListener("click", () => {
    if (document.querySelector(".epic-games-btn-container.active")) {
        try {
            epicGameBtnCon.classList.remove("active");
            logoBtnPopup.classList.remove("active");
        } catch (error) {

        }
    } else {
        try {
            epicGameBtnCon.classList.add("active");
            logoBtnPopup.classList.add("active");
        } catch (err) {

        }
    }
})

document.querySelector(".menu").addEventListener("mousemove", () => {
    try {
        epicGameBtnCon.classList.remove("active");
        logoBtnPopup.classList.remove("active");
    } catch (err) {

    }
})

document.querySelector(".search-container .search-icon").addEventListener("click", () => {
    try {
        document.querySelector(".search-container").classList.add("active");
    } catch (err) { }
})

document.querySelector(".search-container .cross-icon").addEventListener("click", () => {
    try {
        document.querySelector(".search-container").classList.remove("active");
    } catch (err) { }
})

// window.addEventListener("resize",()=>{
//     changeImagesBasedOnWidth();
// })

// function changeImagesBasedOnWidth(){
//     if(window.innerWidth <= 1440)
//         document.querySelector(".menubar-container").classList.add("mobile");
//     else{
//         try{
//             document.querySelector(".menubar-container").classList.remove("mobile");
//         } catch(err){}
//     }
// }

// changeImagesBasedOnWidth()