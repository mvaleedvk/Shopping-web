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


// single product page image slider


let mainimg = document.getElementById("mainImg");
let smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    mainimg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    mainimg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    mainimg.src = smallimg[3].src;
}
