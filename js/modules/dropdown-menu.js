import outsideclick from "./outsideclick.js";

export default function initDropdownMenu() {
    const dropDownMenus = document.querySelectorAll('[data-dropdown]');

    dropDownMenus.forEach(menu => {
    
    
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick)
        })
    })
    
    function handleClick(event) {
        event.preventDefault()
        this.classList.add('active');
        outsideclick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active');
        })
    }
    
    
}

