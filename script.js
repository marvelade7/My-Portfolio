function closeSideBar() {
    const close = document.querySelector('.side-bar');
    close.style.display = 'none'
}

function openSideBar () {
    const open = document.querySelector('.side-bar');
    open.style.display = 'block'
    document.getElementById("overlay").style.display = 'block';
}

document.getElementById("overlay").addEventListener("click", () => {
    document.querySelectorAll('.orders').forEach(o => o.classList.remove('active'));
    const hidee = document.querySelector('.side-bar');
    hidee.style.display = 'none'
    document.getElementById("overlay").style.display = 'none';
});

document.querySelectorAll('.side-bar a').forEach(link => {
    link.addEventListener('click', closeSideBar);
});
