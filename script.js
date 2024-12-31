document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('header nav').classList.toggle('active');
});

document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('header nav').classList.remove('active');
    });
});