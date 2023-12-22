document.addEventListener('DOMContentLoaded', function () {


    const navBtn = document.getElementById('nav_btn');
    const menu = document.getElementById('menu')

    navBtn.addEventListener('click', function () {
        menu.classList.toggle('active')
    })
});

