
// ================================================ //
// ================== MENU MOBILE ================= //
// ================================================ //

let iconMenuCompact = document.querySelector('.menu-compact');
let menuOpen = document.querySelector('.menu-complete');

function openMenuCompact() {
    iconMenuCompact.style.display = "none";
    menuOpen.style.display = "flex";
}

function closeMenuCompact() {
    var widthDisplay = window.screen.width;
    
    if(widthDisplay<600) {
        iconMenuCompact.style.display = "flex";
        menuOpen.style.display = "none";
    }
}


// ================================================ //
// ================ SLIDER PROJECTS =============== //
// ================================================ //

let totalProjects = document.querySelectorAll('.box').length;
// document.querySelector('.projects').style.width = `calc(340px * ${totalProjects})`;
let actualWidthDisplay = window.screen.width;

let currentProject = 0;

function goPrev() {
    currentProject--;
    if(actualWidthDisplay <= 800) {
        if (currentProject<0) {
            currentProject = totalProjects - 1;
        } 
    } else if(actualWidthDisplay <= 1200) {
        if (currentProject<0) {
            currentProject = totalProjects - 2;
        } 
    } else {
        if (currentProject<0) {
            currentProject = totalProjects - 3;
        } 
    }
    updateMargin();
}

function goNext() {
    currentProject++;
    if(actualWidthDisplay <= 800) {
        if (currentProject>(totalProjects - 1)) {
            currentProject = 0;
        }
    } else if(actualWidthDisplay <= 1200) {
        if (currentProject>(totalProjects - 2)) {
            currentProject = 0;
        }
    } else { 
        if (currentProject>(totalProjects - 3)) {
            currentProject = 0;
        }
    }
    updateMargin();
}


//480px
function updateMargin() {
    let newMargin = 0;
    if(actualWidthDisplay <= 480) {
        newMargin = (currentProject * 310);
    } else {
        newMargin = (currentProject * 340);
    }
    document.querySelector('.projects').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 2000)