function epicGamePopUpToggler() {
    const epicGameBtnCon = document.querySelector(".epic-games-btn-container");
    const logoBtnPopup = document.querySelector(".logo-btn-popup");

    epicGameBtnCon.addEventListener("click", () => {
        if (document.querySelector(".epic-games-btn-container.active")) {
            try {
                epicGameBtnCon.classList.remove("active");
                logoBtnPopup.classList.remove("active");
            } catch (error) { }
        } else {
            try {
                epicGameBtnCon.classList.add("active");
                logoBtnPopup.classList.add("active");
            } catch (err) { }
        }
    })


    // Closeing epicGamePopUp when menu is hoverd
    document.querySelector(".menu").addEventListener("mousemove", () => {
        try {
            epicGameBtnCon.classList.remove("active");
            logoBtnPopup.classList.remove("active");
        } catch (err) { }
    })
}
epicGamePopUpToggler();


function searchContainerToggler() {
    const searchContainer = document.querySelector(".search-container");

    document.querySelector(".search-container .search-icon").addEventListener("click", () => {
        try {
            searchContainer.classList.add("active");
        } catch (err) { }
    })

    document.querySelector(".search-container .cross-icon").addEventListener("click", () => {
        try {
            searchContainer.classList.remove("active");
        } catch (err) { }
    })
}
searchContainerToggler();

function menubarTogglerForMobile() {
    const threeLineMenu = document.querySelector(".three-line-menu");
    const closeMenuBarBtn = document.querySelector(".cross-for-close-menu");
    const menubar = document.querySelector(".menubar-container");

    closeMenuBarBtn.addEventListener("click", () => {
        try {
            menubar.classList.remove("active");
            closeMenuBarBtn.classList.remove("active");
            threeLineMenu.classList.add("active");
        } catch (err) { }
    })

    threeLineMenu.addEventListener("click", () => {
        try {
            menubar.classList.add("active");
            closeMenuBarBtn.classList.add("active");
            threeLineMenu.classList.remove("active");
        } catch (error) { }

        // Closeing epicGamePopUp when menu icon is clicked
        const epicGameBtnCon = document.querySelector(".epic-games-btn-container");
        const logoBtnPopup = document.querySelector(".logo-btn-popup");
        try {
            epicGameBtnCon.classList.remove("active");
            logoBtnPopup.classList.remove("active");
        } catch (err) { }
    })
}
menubarTogglerForMobile();

document.querySelectorAll(".menu").forEach((e) => {
    e.addEventListener("click", (event) => {
        if (window.innerWidth > 1270) return;

        let targetElemClassName = event.target.classList;
        if (targetElemClassName == "back-btn-container" || targetElemClassName == "back-btn-text" || targetElemClassName == "back-btn-arrow") {
            document.querySelector(".menu.active").classList.remove("active");
            return;
        }
        
        try {
            document.querySelector(".menu.active").classList.remove("active");
        } catch (err) { }
        e.classList.add("active")
    })
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