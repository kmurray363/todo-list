const createMenuButton = (buttonTitle, clickFunction, buttonClass) => {
    const $sidebar = document.querySelector('.sidebar');
    const newButton = document.createElement('button');
    newButton.innerHTML = buttonTitle;
    if(buttonClass) {
        newButton.classList.add(`${buttonClass}`);
    }
    $sidebar.appendChild(newButton);
    newButton.addEventListener('click', clickFunction);
}

export default createMenuButton;