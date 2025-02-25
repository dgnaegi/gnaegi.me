document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('click', function () {
            document.querySelector('.editor').style.backgroundColor = '#1e1e2e';
        });
    });
});