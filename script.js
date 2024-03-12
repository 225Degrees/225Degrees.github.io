var navState = true;
var nav;
var navContainer;
var closeContainer;

document.addEventListener('DOMContentLoaded', function () {
    // Set the initial visibility
    showDiv('aboutDiv');
    nav = document.querySelector('.primary-nav');
    navContainer = document.querySelector('.button-container');
    closeContainer = document.querySelector('.button-container2');
    console.log(nav.style.display);
});

window.addEventListener('resize', handleResize);

function handleResize() {
    var windowWidth = window.innerWidth;

    if(windowWidth > 768) {
        nav.style.transform = 'translateX(0%)';
        navContainer.style.display = 'none';
        closeContainer.style.display = 'none';
        navState = true;
    } else {
        navContainer.style.display = 'block';
        navState = false;
        toggleNav();
    }
}

function toggleNav() {
    if(navState) {
        nav.style.transform = 'translateX(0%)';
        navContainer.style.display = 'none';
        closeContainer.style.display = 'block';
    } else {
        nav.style.transform = 'translateX(100%)';
        navContainer.style.display = 'block';
        closeContainer.style.display = 'none';
    }
    navState = !navState;
}

function showDiv(divId) {
    // Hide all divs
    var divs = document.getElementsByClassName('content');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }
    // Show the selected div
    var selectedDiv = document.getElementById(divId);
    if (selectedDiv) {
        selectedDiv.style.display = 'flex';
    }

    if(!navState) {
        toggleNav();
    }
}

function openModal(menuSrc) {
    var modal = document.getElementById('fullMenuModal');
    var modalImg = document.getElementById('fullMenuImage');
    modal.style.display = 'block';
    modalImg.src = menuSrc;
}

function closeModal() {
    var modal = document.getElementById('fullMenuModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('fullMenuModal');
    if (event.target === modal) {
        closeModal();
    }
};