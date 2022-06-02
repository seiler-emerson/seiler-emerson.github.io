// ====================================================================================== //
// ================================ CONSTRUCTOR PROJECTS ================================ //
// ====================================================================================== //

// ================================    PROJECTS LIST    ================================= //

const projectList = [
    {
        title: "HiremeFlix",
        imageName: "hiremeFlix.png",
        description: "This project aims to expose the interest of classmates in the Entra21-Blusoft program, as well as the companies they would like to work for.",
        repositoryLink: "https://github.com/seiler-emerson/hiremeflix",
        projectLink: "https://seiler-emerson.github.io/hiremeflix/",
    },
    {
        title: "ADS Manager",
        imageName: "adsManager.png",
        description: "The management system allows the verification of the ads and the projection of the results of the campaign.",
        repositoryLink: "https://github.com/seiler-emerson/proway_capgemini_2021",
        projectLink: "https://seiler-emerson.github.io/proway_capgemini_2021/",
    },
    {
        title: "Pomodoro",
        imageName: "pomodoro.png",
        description: "Application to help focus during activities that require concentration.",
        repositoryLink: "https://github.com/seiler-emerson/pomodoro",
        projectLink: "https://seiler-emerson.github.io/pomodoro/",
    },
    {
        title: "Virtual Keyboard",
        imageName: "keyboardPiano.png",
        description: "You can play a piano by using your computer's keyboard.",
        repositoryLink: "https://github.com/seiler-emerson/keyboard_piano",
        projectLink: "https://seiler-emerson.github.io/keyboard_piano/",
    },
    {
        title: "Retro Painting",
        imageName: "retroPainting.png",
        description: "This is a retro blackboard project, in the style of old cell phones, where you could draw by coloring the pixels.",
        repositoryLink: "https://github.com/seiler-emerson/retro_painting",
        projectLink: "https://seiler-emerson.github.io/retro_painting/",
    },
    {
        title: "Border Radius",
        imageName: "borderRadius.png",
        description: "Border radius generator, where it is possible to perform the simulation of the rounding of the four edges individually.",
        repositoryLink: "https://github.com/seiler-emerson/border_radius_generator",
        projectLink: "https://seiler-emerson.github.io/border_radius_generator/",
    },
    {
        title: "Calculadora",
        imageName: "calculadora.png",
        description: "This is one of a calculator, where you can perform the four basic operations.",
        repositoryLink: "https://github.com/seiler-emerson/calculadora",
        projectLink: "https://seiler-emerson.github.io/calculadora/",
    },
    {
        title: "Floating Browser",
        imageName: "floatingBrowser.png",
        description: "This is a floating web browser project, which is always visible no matter what application is open.",
        repositoryLink: "https://github.com/seiler-emerson/videotoup",
        projectLink: "https://github.com/seiler-emerson/videotoup",
    },

]

// ========================    CREATION OF PROFILES ON SCREEN    ======================== //

const DOMProject = {
    projectContainer: document.querySelector(".projects"),

    addProject(index) {  //Responsável por adicionar o projeto no container
        const projectBox = document.createElement('div');
        projectBox.classList.add('box');
        projectBox.innerHTML = DOMProject.innerHTMLProject(index);
        projectBox.dataset.index = index;
        DOMProject.projectContainer.appendChild(projectBox);
    },

    innerHTMLProject(index) {

        const html = `
        <h2>${index.title}</h2>
        <div class="img" style="background-image: url(./assets/images/projects/${index.imageName}); background-size: cover;"></div>
        <p>${index.description}</p>
        <div class="buttons-project">
            <a href="${index.repositoryLink}" target="_blank">Repository</a>
            <a href="${index.projectLink}" target="_blank">Test Here!</a>
        </div>
        
        `
        return html
    },

}

// ==============================    RUNNING ARRAYLIST    =============================== //

const App = {
    init() {
        projectList.sort(function(a,b){
           return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
       }).forEach(function(index) {
        DOMProject.addProject(index);               //Exibe os anuncios na pagina de anuncios 
        })
    }
}
App.init()

// ====================================================================================== //
// ===================================== MENU MOBILE ==================================== //
// ====================================================================================== //

let iconMenuCompact = document.querySelector('.menu-compact');
let menuOpen = document.querySelector('.menu-complete');

function openMenuCompact() {
    iconMenuCompact.style.display = "none";
    menuOpen.style.display = "flex";
}

function closeMenuCompact() {
    let widthDisplay = window.innerWidth;
    
    if(widthDisplay<600) {
        iconMenuCompact.style.display = "flex";
        menuOpen.style.display = "none";
    }
}

// ====================================================================================== //
// ================================== SLIDER PROJECTS =================================== //
// ====================================================================================== //


let totalProjects = document.querySelectorAll('.box').length;
let currentProject = 0;
let actualWidthDisplay=0;

// WINDOWS WIDTH
function verifyDisplayWidth() {
    actualWidthDisplay = window.innerWidth;
    return actualWidthDisplay;
}
verifyDisplayWidth();

// PREVIOUS
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

// NEXT
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

// BOX PROJECTS WIDTH
function updateMargin() {
    let newMargin = 0;
    if(actualWidthDisplay <= 480) {
        newMargin = (currentProject * 310);
    } else {
        newMargin = (currentProject * 340);
    }
    document.querySelector('.projects').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 4000);  // Auto next 3 seconds
setInterval(verifyDisplayWidth, 15000); //Auto windows width verify 15 seconds

// ====================================================================================== //
// ===================================== CONSOLE.LOG ==================================== //
// ====================================================================================== //

function consoleMessage() {
    console.log("YOU OVER HERE?");
    console.log("You thought I wouldn't find you right?!");
    console.log("WHAT ABOUT A COFFEE?");
    console.log("Click there ==> https://github.com/seiler-emerson");
}
consoleMessage();