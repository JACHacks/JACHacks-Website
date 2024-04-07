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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        console.log("hellooo");
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
