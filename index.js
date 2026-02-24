const parentMenu = document.querySelector("#parentMenu");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const bookmarkBtn = document.querySelector("#bookmarkBtn")
const text = document.querySelector(".text")

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