var navState = true;
var nav;
var navContainer;
var closeContainer;

// Actions needed to be performed at initial loading of the website
document.addEventListener('DOMContentLoaded', function () {
    showDiv('about');
    nav = document.querySelector('.primary-nav');
    navContainer = document.querySelector('.button-container');
    closeContainer = document.querySelector('.button-container2');
});

// Makes sure that the navigation correctly transitions between mobile navigation and normal navigation
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

// Handles sliding the mobile navigation on and off the screen
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

// Handles hiding and show of the content divs
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

// Handles showing the modal for the menus
function openModal(menuSrc) {
    var modal = document.getElementById('fullMenuModal');
    var modalImg = document.getElementById('fullMenuImage');
    modal.style.display = 'block';
    modalImg.src = menuSrc;
}

// Handles hiding the modal for menus when clicking the close button on modal
function closeModal() {
    var modal = document.getElementById('fullMenuModal');
    modal.style.display = 'none';
}

// Handles hiding the modal for menus when clicking outside of the menu img
window.onclick = function(event) {
    var modal = document.getElementById('fullMenuModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Helps the browser know to display different content when hitting the back button
function navigate(divId, event) {
    event.preventDefault();
    showDiv(divId);

    // Push the current state to the browser history
    history.pushState({ divId: divId }, "", `#${divId}`);
}

// Helps the browser return to previous content when hitting back button
window.addEventListener("popstate", function (event) {
    if (event.state && event.state.divId) {
        showDiv(event.state.divId);
    } else {
        showDiv('about');
    }
});