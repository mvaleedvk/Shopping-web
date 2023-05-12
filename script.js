const bar = document.getElementById('bar');
const nav = document.getElementById('nav-list');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('show-nav');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('show-nav');
    })
}