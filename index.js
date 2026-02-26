const parentMenu = document.querySelector("#parentMenu");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const bookmarkBtn = document.querySelector("#bookmarkBtn")
const text = document.querySelector(".text")
const openBtnProject = document.querySelector("#openBtn-project")
const parentContainer = document.querySelector("#parent-project-container")
const btnClosemodal = document.querySelector("#btnClosemodal")
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