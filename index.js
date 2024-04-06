let i = 0;

function showDropDownMenu() {
    i ++;

    const dropDown = document.querySelector('.dropdown_menu')
    const barsIcon = document.querySelector('.bars-icon')
    const closeIcon = document.querySelector('.close-icon')

    if (i % 2)
    {
        barsIcon.style.display = 'none'
        closeIcon.style.display = 'block'
        dropDown.style.display = 'flex'
    }

    else {
        barsIcon.style.display = 'block'
        closeIcon.style.display = 'none'
        dropDown.style.display = 'none'
    }
}