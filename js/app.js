import { menu } from "./menu.js"

const menuContent = document.querySelector(".menu-list");
const menuList = menu.map(item => {
    return `
        <li>
            <div class="details">
                <strong>${item.dishName}</strong>
                <span>${item.dishPrice}</span>
            </div>
            <span>${item.dishDescription}</span>
        </li>    
    `
});
menuContent.innerHTML = menuList.join("");


const closeMenu = document.querySelector(".close-menu");
const menuTab = document.querySelector(".menu-container");
const btn = document.querySelectorAll(".buttom");
const menuLink = document.querySelector(".menu-link");

closeMenu.addEventListener("click", () => {
    menuContainer();
});
btn.forEach(buttom => {
    buttom.addEventListener("click", () => {
        menuContainer();
    })
})
menuLink.addEventListener("click", () => {
    menuContainer();
})

function menuContainer() {
    menuTab.classList.toggle("menu-open");
}