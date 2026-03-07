const parentMenu = document.querySelector("#parentMenu");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const bookmarkBtn = document.querySelector("#bookmarkBtn")
const text = document.querySelector(".text")
const openBtnProject = document.querySelector("#openBtn-project")
const parentContainer = document.querySelector("#parent-project-container")
const btnClosemodal = document.querySelector("#btnClosemodal")
const inputSelect = document.querySelector(".input-select")
const pledgeContainer = document.querySelector("#pledge-container-input")
const continueBtn = document.querySelector("#continueBtn")
const successParentContainer = document.querySelector("#success-parent-container")
const childProjectContainer = document.querySelector("#child-project-container")
const gotItBtn = document.querySelector("#Got-itBtn")
const rewardContainer = document.querySelector("#reward-container")
const bkmarkSign1 = document.querySelector("#bkmark-sign1")
const text1 = document.querySelector("#text")
const desktopInput =  document.querySelector(".input-select-desktop") 
openBtn.addEventListener("click", () => {
    parentMenu.classList.add("active")
    openBtn.style.display = "none"
})
closeBtn.addEventListener("click", () => {
    parentMenu.classList.remove("active")
    openBtn.style.display = "flex"
    
})
bookmarkBtn.addEventListener("click", () => {
    bookmarkBtn.classList.toggle("active")
    
})
openBtnProject.addEventListener("click", () => {
    parentContainer.classList.add("active")
    // document.body.style.overflow = "hidden";
})
btnClosemodal.addEventListener("click" , () => {
    parentContainer.classList.remove("active")
    // document.body.style.overflow = "auto";
})
inputSelect.addEventListener("click", () => {
    pledgeContainer.classList.toggle("active")
})


continueBtn.addEventListener("click", () => {
    successParentContainer.classList.add("active")
})

gotItBtn.addEventListener("click", ()=> {
    parentContainer.style.display = "none"
})
bkmarkSign1.addEventListener("click", () => {
    bkmarkSign1.classList.toggle("active")
if (bkmarkSign1.classList.contains("active")) {
    text1.textContent = "Bookmarked"
}
else {text1.textContent = "Bookmark"
}
})

desktopInput.addEventListener("click", ()=> {
    pledgeContainer.classList.toggle("active")
})
