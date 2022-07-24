// ====================================================================================== //
// ================================ CONSTRUCTOR PROJECTS ================================ //
// ====================================================================================== //

// ================================    PROJECTS LIST    ================================= //

const projectList = [
    {
        title: "HiremeFlix",
        imageName: "hiremeFlix.png",
        description: "This project aims to expose the interest of classmates in the Entra21-Blusoft program, as well as the companies they would like to work for.",
        repositoryLink: "https://github.com/seiler-emerson/initial_projects/tree/main/hiremeflix",
        projectLink: "https://seiler-emerson.github.io/initial_projects/hiremeflix/",
    },
    {
        title: "ADS Manager",
        imageName: "adsManager.png",
        description: "The management system allows the verification of the ads and the projection of the results of the campaign.",
        repositoryLink: "https://github.com/seiler-emerson/initial_projects/tree/main/proway_capgemini_2021",
        projectLink: "https://seiler-emerson.github.io/initial_projects/proway_capgemini_2021/",
    },
    {
        title: "Pomodoro",
        imageName: "pomodoro.png",
        description: "Application to help focus during activities that require concentration.",
        repositoryLink: "https://github.com/seiler-emerson/initial_projects/tree/main/pomodoro",
        projectLink: "https://seiler-emerson.github.io/initial_projects/pomodoro/",
    },
    {
        title: "Virtual Keyboard",
        imageName: "keyboardPiano.png",
        description: "You can play a piano by using your computer's keyboard.",
        repositoryLink: "https://github.com/seiler-emerson/initial_projects/tree/main/keyboard_piano",
        projectLink: "https://seiler-emerson.github.io/initial_projects/keyboard_piano/",
    },
    {
        title: "Retro Painting",
        imageName: "retroPainting.png",
        description: "This is a retro blackboard project, in the style of old cell phones, where you could draw by coloring the pixels.",
        repositoryLink: "https://github.com/seiler-emerson/initial_projects/tree/main/retro_painting",
        projectLink: "https://seiler-emerson.github.io/initial_projects/retro_painting/",
    },
    {
        title: "Border Radius",
        imageName: "borderRadius.png",
        description: "Border radius generator, where it is possible to perform the simulation of the rounding of the four edges individually.",
        repositoryLink: "https://github.com/seiler-emerson/initial_projects/tree/main/border_radius_generator",
        projectLink: "https://seiler-emerson.github.io/initial_projects/border_radius_generator/",
    },
    {
        title: "Calculator",
        imageName: "calculadora.png",
        description: "This is one of a calculator, where you can perform the four basic operations.",
        repositoryLink: "https://github.com/seiler-emerson/initial_projects/tree/main/calculadora",
        projectLink: "https://seiler-emerson.github.io/initial_projects/calculadora/",
    },
    {
        title: "Floating Browser",
        imageName: "floatingBrowser.png",
        description: "This is a floating web browser project, which is always visible no matter what application is open.",
        repositoryLink: "https://github.com/seiler-emerson/initial_projects/tree/main/videotoup",
        projectLink: "https://github.com/seiler-emerson/initial_projects/tree/main/videotoup",
    },
    {
        title: "Electronic Medical Record",
        imageName: "emr.png",
        description: "This is a Electronic Medical Record system developed in java during Entra21.",
        repositoryLink: "https://github.com/seiler-emerson/Entra21_Project_EMR_2022/tree/agil-logica-poo-avancado",
        projectLink: "https://github.com/seiler-emerson/Entra21_Project_EMR_2022/tree/agil-logica-poo-avancado",
    },
    {
        title: "Inside Medical Website",
        imageName: "inside_medical.png",
        description: "This is a website for the presentation of the company Inside Medical.",
        repositoryLink: "https://github.com/seiler-emerson/initial_projects/tree/main/inside_medical",
        projectLink: "https://seiler-emerson.github.io/initial_projects/inside_medical/index.html",
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
        <div class="img" style="background-image: url(./assets/images/projects/${index.imageName}); background-size: cover; background-position: center;"></div>
        <p>${index.description}</p>
        <div class="buttons-project">
            <a href="${index.repositoryLink}" target="_blank">Repository</a>
            <a href="${index.projectLink}" target="_blank">Test Here!</a>
        </div>        
        `
        return html
    },

}

// ===============================    RUNNING ARRAYLIST    =============================== //

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

setInterval(goNext, 4000);  // Auto next 4 seconds
setInterval(verifyDisplayWidth, 15000); //Auto windows width verify 15 seconds

// ====================================================================================== //
// ===================================== STACK HOVER ==================================== //
// ====================================================================================== //

const stacks = [
    { //Angular
        svg: `
        <svg width="206" height="215" viewBox="0 0 206 215" xmlns="http://www.w3.org/2000/svg" onclick="alert('Learning a lot about componentization and SPAs!')")">
            <path d="M202.482 33.6894L104.014 0.241931C103.033 -0.0852519 101.963 -0.0805777 100.976 0.255953L3.13462 34.3063C1.05934 35.0261 -0.235366 37.1014 0.0357285 39.2842L15.4975 166.058C15.6797 167.558 16.5725 168.881 17.9046 169.601L100.387 214.434C101.079 214.813 101.85 215 102.617 215C103.388 215 104.164 214.808 104.86 214.425L187.769 168.984C189.087 168.26 189.984 166.942 190.162 165.45L205.619 38.6812C205.89 36.4891 204.581 34.3998 202.482 33.6894ZM142.851 154.237L129.848 126.226H75.8066L62.8034 154.237H42.0647L102.827 23.3644L163.59 154.237H142.851Z" />
            <path d="M121.149 106.718L102.827 66.9888L84.5049 106.718H121.149Z" />
        </svg>
        `
    },
    {   //CSS3
        svg: `
        <svg width="192" height="215" viewBox="0 0 192 215" xmlns="http://www.w3.org/2000/svg" onclick="alert('CSS, the basis of style!')">
            <path d="M189.435 2.9881C187.73 1.08577 185.298 0 182.75 0H8.9733C6.42489 0 3.99313 1.08577 2.2882 2.9881C0.583278 4.89044 -0.224319 7.42988 0.0538532 9.96035L19.813 187.838C20.2079 191.454 22.7652 194.478 26.2648 195.474L93.385 214.65C94.1926 214.883 95.0271 215 95.8527 215C96.6782 215 97.5128 214.883 98.3203 214.65L165.441 195.474C168.94 194.478 171.489 191.454 171.892 187.838L191.661 9.96035C191.948 7.42988 191.14 4.89044 189.435 2.9881ZM145.358 90.3969L141.356 155.767L96.1488 170.546L50.9414 155.767L49.2275 124.504H72.1094L72.6837 138.718L96.1488 146.677L119.614 138.718L121.328 113.144H70.9698L69.8302 90.4059H122.476L124.19 67.6676H45.2164L43.5025 44.9203H148.221L145.358 90.3969Z" />
        </svg>
        `
    },
    {   //ECLIPSE
        svg: `
        <svg width="234" height="215" viewBox="0 0 234 215" xmlns="http://www.w3.org/2000/svg" onclick="alert('Get on the rocket!')">
            <path d="M29.3943 81.5148H230.461C218.903 36.7115 178.34 3.55981 129.925 3.55981C81.5098 3.55981 40.9472 36.7115 29.3943 81.5148Z" />
            <path d="M26.2449 102.303H233.605C233.429 98.7898 233.091 95.3234 232.571 91.9089H27.2791C26.7646 95.3234 26.4216 98.7898 26.2449 102.303Z" />
            <path d="M27.2791 123.091H232.571C233.086 119.676 233.429 116.21 233.605 112.697H26.2449C26.4216 116.21 26.7646 119.676 27.2791 123.091Z" />
            <path d="M129.925 211.44C178.34 211.44 218.903 178.288 230.456 133.485H29.3943C40.9472 178.288 81.5098 211.44 129.925 211.44Z" />
            <path d="M15.591 107.5C15.591 58.1181 47.0641 15.9548 90.9995 0C39.4401 8.67899 0 53.5135 0 107.5C0 161.486 39.4401 206.321 90.9995 215C47.0641 199.045 15.591 156.882 15.591 107.5Z" />
        </svg>
        `
    },
    {   //FIGMA
        svg: `
        <svg width="139" height="215" viewBox="0 0 139 215" xmlns="http://www.w3.org/2000/svg" onclick="alert('Because everyone is a little bit of a designer!')">
            <path d="M30.7143 215C13.7523 215 0 201.248 0 184.286C0 167.324 13.7523 153.572 30.7143 153.572H52.652C57.4971 153.572 61.4286 157.503 61.4286 162.348V184.286C61.4286 201.248 47.6762 215 30.7143 215Z" />
            <path d="M107.5 61.4286H85.5623C80.7171 61.4286 76.7857 57.4971 76.7857 52.652V8.77661C76.7857 3.93143 80.7171 0 85.5623 0H107.5C124.462 0 138.214 13.7523 138.214 30.7143C138.214 47.6762 124.462 61.4286 107.5 61.4286Z" />
            <path d="M30.7143 0H52.652C57.4971 0 61.4286 3.93143 61.4286 8.77661V52.652C61.4286 57.4971 57.4971 61.4286 52.652 61.4286H30.7143C13.7523 61.4286 0 47.6762 0 30.7143C0 13.7523 13.7523 0 30.7143 0Z" />
            <path d="M30.7143 76.7856H52.652C57.4971 76.7856 61.4286 80.7171 61.4286 85.5622V129.438C61.4286 134.283 57.4971 138.214 52.652 138.214H30.7143C13.7523 138.214 0 124.462 0 107.5C0 90.538 13.7523 76.7856 30.7143 76.7856Z" />
            <path d="M107.5 138.214C124.463 138.214 138.214 124.463 138.214 107.5C138.214 90.5369 124.463 76.7856 107.5 76.7856C90.537 76.7856 76.7857 90.5369 76.7857 107.5C76.7857 124.463 90.537 138.214 107.5 138.214Z" />
        </svg>
        `
    },
    {   //GIT
        svg: `
        <svg width="215" height="215" viewBox="0 0 215 215" xmlns="http://www.w3.org/2000/svg" onclick="alert('Git push allways!')">
            <path d="M209.363 93.8896L121.11 5.63674C117.353 1.87891 112.426 0 107.5 0C102.574 0 97.6474 1.87891 93.8896 5.63674L76.4372 23.0891L98.0493 44.7013C105.214 40.4854 114.562 41.3875 120.718 47.5384C126.869 53.6892 127.771 63.0371 123.555 70.2068L144.788 91.4404C151.954 87.2246 161.301 88.1266 167.457 94.2775C174.758 101.578 174.758 113.417 167.457 120.718C160.156 128.018 148.317 128.018 141.017 120.718C134.866 114.567 133.964 105.219 138.18 98.0493L116.946 76.8158C115.432 77.7038 113.833 78.3582 112.174 78.7835V136.203C120.222 138.287 126.196 145.536 126.196 154.239C126.196 164.564 117.825 172.935 107.5 172.935C97.1753 172.935 88.8043 164.564 88.8043 154.239C88.8043 145.536 94.7776 138.287 102.826 136.203V78.7882C99.6992 77.9796 96.7266 76.4278 94.2822 73.9834C88.1313 67.8325 87.2292 58.4847 91.4451 51.3149L69.8283 29.698L5.63674 93.8896C-1.87891 101.405 -1.87891 113.59 5.63674 121.106L93.8896 209.359C97.6474 213.121 102.574 215 107.5 215C112.426 215 117.353 213.121 121.11 209.363L209.363 121.11C216.879 113.595 216.879 101.405 209.363 93.8896Z" />
        </svg>
        `
    },
    {   //GITHUB
        svg: `
        <svg width="221" height="215" viewBox="0 0 221 215" xmlns="http://www.w3.org/2000/svg" onclick="visitProfile()">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M110.21 0C49.3505 0 0 49.3505 0 110.228C0 158.917 31.5777 200.231 75.3805 214.807C80.8914 215.818 82.9029 212.419 82.9029 209.498C82.9029 206.881 82.8111 199.946 82.756 190.752C52.0968 197.411 45.6306 175.974 45.6306 175.974C40.6156 163.243 33.3963 159.854 33.3963 159.854C23.3848 153.011 34.1495 153.158 34.1495 153.158C45.2081 153.939 51.0313 164.52 51.0313 164.52C60.8592 181.365 76.8317 176.497 83.105 173.677C84.1062 166.559 86.9535 161.7 90.1039 158.945C65.6261 156.162 39.8992 146.71 39.8992 104.469C39.8992 92.4369 44.1978 82.5998 51.2426 74.8937C50.1128 72.1015 46.3286 60.8959 52.3264 45.7224C52.3264 45.7224 61.5848 42.7557 82.6366 57.0199C91.4265 54.5767 100.859 53.3551 110.228 53.3092C119.587 53.3551 129.02 54.5767 137.819 57.0199C158.862 42.7557 168.102 45.7224 168.102 45.7224C174.118 60.8959 170.334 72.1015 169.195 74.8937C176.258 82.5998 180.52 92.4369 180.52 104.469C180.52 146.811 154.747 156.125 130.196 158.853C134.155 162.251 137.682 168.984 137.682 179.262C137.682 193.994 137.544 205.88 137.544 209.498C137.544 212.447 139.528 215.873 145.121 214.798C188.888 200.185 220.438 158.908 220.438 110.228C220.438 49.3505 171.087 0 110.21 0Z" />
        </svg>
        `
    },
    {   //HTML
        svg: `
        <svg width="192" height="215" viewBox="0 0 192 215" xmlns="http://www.w3.org/2000/svg" onclick="alert('The structure of the web!')">
            <path d="M189.435 2.9881C187.73 1.08577 185.298 0 182.75 0H8.9733C6.42489 0 3.99313 1.08577 2.2882 2.9881C0.583278 4.89044 -0.224319 7.42988 0.0538532 9.96035L19.813 187.838C20.2079 191.454 22.7652 194.478 26.2648 195.474L93.385 214.65C94.1926 214.883 95.0271 215 95.8527 215C96.6782 215 97.5128 214.883 98.3203 214.65L165.441 195.474C168.94 194.478 171.489 191.454 171.892 187.838L191.661 9.96035C191.948 7.42988 191.14 4.89044 189.435 2.9881ZM146.372 66.6715H66.2408L68.1432 89.4816H144.443L138.718 156.871L95.8886 170.493L95.4668 170.358L53.1129 156.853L50.7978 129.395H71.5441L72.4504 140.064L96.1129 145.278L119.363 140.055L121.83 111.224H49.2365L43.6192 44.8664H148.239L146.372 66.6715Z" />
        </svg>
        `
    },
    {   //JAVA
        svg: `
        <svg width="215" height="215" viewBox="0 0 215 215" xmlns="http://www.w3.org/2000/svg" onclick="alert('May the Java be with you! 🖖🏽')">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47716 0 10V205C0 210.523 4.47716 215 10 215H205C210.523 215 215 210.523 215 205V10C215 4.47715 210.523 0 205 0H10ZM93.9875 87.7068C98.6354 98.8709 101.981 104.8 106.614 111.967C106.589 111.967 76.1115 91.8279 79.9408 74.4929C81.678 66.6275 90.4906 59.6117 99.4693 52.4638C112.03 42.464 124.916 32.2055 119.209 19C132.531 38.3265 118.625 52.1892 106.592 64.1853C98.2258 72.5251 90.765 79.9627 93.9875 87.7068ZM113.521 93.2248C110.465 88.9296 107.168 84.2952 107.668 78.0236C109.671 52.8555 148.982 50.3643 148.982 50.3643C148.982 50.3643 122.266 66.3862 121.017 75.0199C120.447 78.9566 122.575 82.6415 124.792 86.4806C127.658 91.4428 130.672 96.6627 128.202 103.017C124.252 113.185 111.611 115.559 111.611 115.559C111.611 115.559 118.579 110.017 118.319 103.359C118.178 99.7699 115.924 96.6022 113.521 93.2248ZM160.673 121.609C160.673 115.875 153.811 110.907 145.687 112.658C156.719 104.718 170.894 108.21 170.894 122.206C170.894 143.396 142.039 146.695 142.039 146.695C142.039 146.695 160.673 134.506 160.673 121.609ZM131.999 123.067C131.999 123.067 141 116.911 143.391 114.612C121.319 119.11 70.9334 119.708 70.9334 115.811C70.9334 112.22 87.1724 108.519 87.1724 108.519C87.1724 108.519 51.157 108.024 51.157 118.22C51.1605 128.865 98.3186 129.616 131.999 123.067ZM78.4781 128.342C67.0828 137.289 105.582 139.431 126.462 132.748L137.124 139.289C106.319 151.375 64.7055 145.004 64.7055 136.73C64.7055 132.62 72.9477 128.342 78.4781 128.342ZM83.6029 146.848C76.0297 146.848 71.1149 151.528 71.1149 154.962C71.1149 165.585 116.341 166.656 134.263 155.855L122.875 148.606C109.49 154.268 75.8731 155.033 83.6029 146.848ZM158.415 157.912C160.502 158.96 164.424 160.93 164.424 164.649C164.424 189.653 37.9964 190.831 38 166.361C38 161.104 48.4772 154.606 63.9047 156.937L70.4815 160.67C62.7303 159.169 54.3777 162.311 54.3777 165.528C54.3777 179.632 168.093 181.489 157.769 157.581C157.953 157.68 158.172 157.79 158.415 157.912ZM177.752 172.926C158.534 191.144 109.817 197.781 60.8335 186.532C109.814 206.572 177.51 195.297 177.752 172.926Z"/>
        </svg>
        `
    },
    {   //JS
        svg: 
        `<svg width="215" height="215" viewBox="0 0 215 215" xmlns="http://www.w3.org/2000/svg" onclick="alert('What would we be without him?')">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47716 0 10V205C0 210.523 4.47716 215 10 215H205C210.523 215 215 210.523 215 205V10C215 4.47715 210.523 0 205 0H10ZM156.514 98.4577C150.493 99.7129 143.839 103.445 140.201 107.607C130.926 118.219 132.246 136.19 143.002 145.705C145.103 147.564 153.17 152.044 160.929 155.662C169.236 159.535 175.708 163.179 176.672 164.525C180.206 169.467 177.906 176.083 171.781 178.589C164.047 181.753 154.213 179.101 147.664 172.086L143.96 168.116L135.916 172.66C131.493 175.159 127.874 177.535 127.874 177.941C127.874 179.325 133.502 186.295 136.874 189.087C145.197 195.979 159.958 199.471 172.068 197.413C188.817 194.567 197.712 186.295 198.841 172.515C200.174 156.25 193.288 147.71 171.047 138.051C157.423 132.133 154.574 129.742 154.574 124.223C154.574 114.678 167.292 112.299 174.233 120.545L177.185 124.051L184.668 119.484C188.784 116.971 192.152 114.341 192.152 113.637C192.152 111.081 183.316 102.729 178.439 100.675C173.104 98.4277 162.029 97.3074 156.514 98.4577ZM96.0144 136.928L95.7346 175.266L92.9597 177.602C87.2697 182.395 78.4863 179.925 73.8435 172.227L72.2088 169.518L64.6883 173.425C60.5518 175.574 56.793 177.654 56.3341 178.047C54.1774 179.898 62.8984 189.68 69.9611 193.33C74.5476 195.701 75.9221 195.918 86.3401 195.918C96.857 195.918 98.103 195.717 102.913 193.233C105.942 191.671 109.354 188.874 111.081 186.539C116.71 178.929 116.996 176.473 116.996 135.699V98.5906H106.645H96.2943L96.0144 136.928Z" />
        </svg>
    `
    },
    {   //TS
        svg: `
        <svg width="215" height="215" viewBox="0 0 215 215" xmlns="http://www.w3.org/2000/svg" onclick="alert('Prevention is better than cure, let's type everything!')">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47716 0 10V205C0 210.523 4.47716 215 10 215H205C210.523 215 215 210.523 215 205V10C215 4.47715 210.523 0 205 0H10ZM182.628 98.6435C186.491 100.659 195 109.151 195 110.991C195 111.447 191.686 114.056 187.636 116.789L180.273 121.758L176.931 118.31C169.31 110.446 158 112.492 158 121.733C158 126.781 160.979 129.401 173 134.926C195.199 145.129 200.885 151.735 200.934 167.381C200.969 178.66 196.428 186.319 186.835 191.16C169.192 200.063 141.578 193.511 133.497 178.506L133.352 178.238C132.617 176.877 132.142 175.998 132.257 175.203C132.464 173.756 134.628 172.589 140.735 169.294L141.397 168.937L147.695 165.538L151.522 169.774C156.478 175.259 160.009 177.011 166.411 177.161C175.933 177.384 181.971 172.576 180.512 165.934C179.588 161.73 176.665 159.572 163.573 153.429C143.388 143.957 137.852 137.421 137.792 122.99C137.741 110.718 141.939 103.76 152.457 98.6845C158.124 95.9505 159.123 95.7905 168.5 96.1295C176.3 96.4105 179.408 96.9635 182.628 98.6435ZM126 105.881V114.881H112H98V154.381V193.881H88H78V154.381V114.881H64H50V105.881V96.8815H88H126V105.881Z" />
        </svg>
        `
    },
    {   //VSCODE
        svg: 
        `<svg width="216" height="215" viewBox="0 0 216 215" xmlns="http://www.w3.org/2000/svg" onclick="alert('Sensational! Wordless!')">
            <path d="M215.467 38.041V176.959C215.467 183.802 211.21 189.892 204.798 192.155L157.27 214.464L161.581 155.997V59.0026L157.27 0.536377L204.798 22.8452C211.21 25.1084 215.467 31.1975 215.467 38.041Z" />
            <path d="M26.8662 160.826L161.581 59.0027V7.01895C161.581 0.563411 153.595 -2.4542 149.322 2.38475L3.46896 135.731C-1.38077 140.203 -1.10595 147.947 4.04554 152.069C4.04554 152.069 11.18 158.708 13.7612 160.551C17.7272 163.38 22.938 163.703 26.8662 160.826Z" />
            <path d="M26.8662 54.1744L161.581 155.997V207.981C161.581 214.437 153.595 217.454 149.322 212.615L3.46896 79.2691C-1.38077 74.7966 -1.10595 67.0532 4.04554 62.9309C4.04554 62.9309 11.18 56.2921 13.7612 54.4492C17.7272 51.6202 22.938 51.2969 26.8662 54.1744Z" />
        </svg>
        `
    },   
    {   //SQL
        svg: `
        <svg width="215" height="215" viewBox="0 0 215 215" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="alert('Memory is not always enough!')">
        <path d="M10 0C4.47715 0 0 4.47716 0 10V205C0 210.523 4.47716 215 10 215H205C210.523 215 215 210.523 215 205V10C215 4.47715 210.523 0 205 0H10ZM25.6602 31.5234C28.2235 31.1889 51.9245 28.0168 78.3296 24.4747C104.735 20.9322 126.537 18.0189 126.778 18.0003C127.117 17.9739 127.218 19.6938 127.218 25.5221V33.078L156.322 33.1719L185.427 33.2658L187.361 34.1848C189.822 35.3536 191.78 37.3119 192.949 39.7725L193.868 41.707L193.959 107.369L194.049 173.031L193.286 175.072C192.304 177.697 189.336 180.753 186.834 181.714C185.158 182.357 183.701 182.394 156.147 182.489L127.218 182.589V190.294V198L126.075 197.841C125.446 197.754 116.781 196.573 106.818 195.218C89.494 192.862 72.68 190.563 45.0925 186.781C38.1285 185.826 29.859 184.693 26.7154 184.262L21 183.479V107.806V32.1319L25.6602 31.5234ZM185.94 40.8561C185.713 40.7215 185.45 40.6474 185.146 40.4619C184.054 39.7957 183.167 39.775 155.619 39.7739L127.218 39.7725V107.829V175.886H155.39C181.942 175.886 184.936 175.955 186.124 174.525C186.332 174.274 186.484 173.978 186.698 173.628C187.338 172.579 187.359 170.527 187.36 107.9C187.361 45.5595 187.497 41.7805 185.94 40.8561ZM87.4829 106.389C89.7754 97.4253 86.2315 88.0528 79.244 84.5993C76.3867 83.1872 73.0362 82.6751 69.3608 83.0887C60.932 84.0373 55.2173 90.9379 54.8431 100.619C54.6007 106.895 56.277 111.753 59.8793 115.215C62.2245 117.468 64.6971 118.689 68.6943 119.568C70.4149 119.946 73.1681 120.839 74.8124 121.552C76.4567 122.266 79.2264 123.373 80.9674 124.013C82.7084 124.653 84.5524 125.339 85.0649 125.538C85.9906 125.896 86.0047 125.877 87.1344 122.744C87.7601 121.009 88.2113 119.543 88.1368 119.486C88.0626 119.43 86.1419 118.931 83.8691 118.378C81.5963 117.824 79.7364 117.268 79.7364 117.141C79.7364 117.015 80.0924 116.746 80.5278 116.545C83.4822 115.178 86.2797 111.093 87.4829 106.389ZM102.246 112.929V97.8055V82.6818H98.0256H93.805V101.125V119.569L95.2998 119.752C96.1218 119.853 101.503 120.032 107.258 120.151L117.722 120.366V116.687C117.722 113.969 117.607 113.012 117.282 113.024C117.04 113.033 113.558 113.015 109.544 112.985L102.246 112.929ZM49.4734 85.2511C49.2545 84.8876 48.7168 84.716 47.7303 84.3992C45.8216 83.7865 39.3595 83.6652 37.7065 84.2114C32.4701 85.9411 29.8164 89.2121 29.8006 93.9556C29.7946 95.7424 29.9979 96.6723 30.7056 98.0918C31.9007 100.49 33.7289 101.933 38.253 104.049C42.2963 105.94 43.5098 107.056 43.5098 108.885C43.5098 112.427 38.1232 113.548 32.6499 111.144C31.8029 110.771 30.9964 110.467 30.8575 110.467C30.6131 110.467 29.4412 115.257 29.4412 116.255C29.4412 116.93 32.57 118.045 35.8621 118.544C40.5293 119.251 44.8653 118.276 47.7159 115.877C51.2872 112.872 52.1096 107.213 49.5709 103.11C48.4116 101.237 45.8518 99.466 41.6383 97.6226C38.2808 96.1535 36.8272 94.8377 36.8272 93.2677C36.8272 92.2892 37.7342 91.207 39.178 90.4635C40.3503 89.8596 43.5516 89.9908 45.963 90.7413C47.5172 91.2249 48.1644 91.2995 48.259 91.0051C48.3314 90.7796 48.7141 89.4157 49.1087 87.974C49.5397 86.4007 49.7363 85.6876 49.4734 85.2511ZM133.023 90.0048C134.588 87.635 140.788 85.2313 147.266 84.4843C151.099 84.0418 157.343 84.0327 161.207 84.4635C170.556 85.506 177.365 88.9989 176.712 92.4172C176.611 92.9431 176.686 93.7773 176.878 94.2704C177.338 95.4536 177.299 103.73 176.827 104.971C176.582 105.615 176.574 106.158 176.804 106.587C177.336 107.582 177.388 116.462 176.866 117.414C176.546 118 176.533 118.392 176.819 118.926C177.41 120.03 177.434 128.732 176.848 129.812C173.58 135.843 159.986 139.311 147.177 137.38C139.127 136.166 132.63 132.6 131.962 129.028C131.843 128.395 131.823 125.82 131.917 123.305C132.01 120.79 132.081 118.455 132.074 118.117C132.068 117.779 132.065 115.048 132.068 112.05C132.073 108.31 132.075 106.743 132.074 105.176C132.074 103.784 132.072 102.392 132.067 99.4762C132.055 91.6646 132.078 91.4377 133.023 90.0048ZM63.5062 96.1366C64.3281 93.4305 66.3698 90.7473 68.2631 89.8842C68.9342 89.5782 70.2123 89.4206 71.5517 89.4783C74.6021 89.6095 76.3195 90.8426 77.9778 94.0918C79.206 96.4982 79.2088 96.514 79.2088 101.287C79.2088 106.472 78.841 107.866 76.7504 110.608C74.8722 113.07 71.1715 113.928 68.2163 112.586C64.8086 111.039 63.1847 107.884 62.935 102.322C62.794 99.1878 62.8879 98.1724 63.5062 96.1366ZM154.476 102.026C146.839 102.026 138.596 100.423 135.528 98.3405C134.809 97.8526 134.127 97.4538 134.012 97.4538C133.545 97.4538 134.177 103.793 134.728 104.634C136.98 108.071 145.755 110.819 154.476 110.819C161.444 110.819 169.409 108.84 172.559 106.325C174.465 104.803 175.05 103.359 175.051 100.18C175.051 98.6806 174.979 97.4538 174.891 97.4538C174.803 97.4538 174.143 97.8526 173.424 98.3405C170.356 100.423 162.113 102.026 154.476 102.026ZM169.6 120.338C173.036 118.733 174.593 117.234 174.884 115.251C175.001 114.457 175.046 112.756 174.986 111.469L174.875 109.129L173.468 110.139C171.588 111.489 167.449 113.082 163.791 113.864C159.608 114.757 149.363 114.762 145.199 113.871C141.545 113.09 138.114 111.817 135.989 110.453C135.097 109.881 134.248 109.412 134.103 109.412C133.959 109.412 133.93 111.024 134.039 112.993C134.231 116.437 134.283 116.621 135.389 117.789C136.863 119.346 141.377 121.471 144.98 122.303C147.19 122.814 149.225 122.953 154.476 122.953C162.216 122.953 165.052 122.463 169.6 120.338ZM159.825 126.676C153.275 127.44 144.126 126.456 139.446 124.483C138.427 124.054 136.771 123.185 135.765 122.552L133.936 121.402L134.078 124.464C134.156 126.148 134.227 127.797 134.236 128.129C134.29 130.095 138.653 132.848 144.011 134.295C147.179 135.151 147.98 135.221 154.476 135.221C160.944 135.221 161.782 135.148 164.883 134.31C170.244 132.86 173.595 130.858 174.571 128.52C174.849 127.855 175.051 126.111 175.051 124.376V121.379L173.205 122.535C169.673 124.745 165.613 126.001 159.825 126.676Z"/>
        </svg>
    `
    }           
]


const DOMStacks = {
    stacksContainer: document.querySelector(".logo-stack-container"),

    addStack(index) {  //Responsável por adicionar o projeto no container
        const stacksBox = document.createElement('div');
        stacksBox.classList.add('logo-stack');
        stacksBox.innerHTML = DOMStacks.innerHTMLStacks(index).repeat(caclulateQuant(stacks));
        stacksBox.dataset.index = index;
        DOMStacks.stacksContainer.appendChild(stacksBox);
    },

    innerHTMLStacks(index) {
        const html = `
            
            ${index[0].svg}
            ${index[1].svg}
            ${index[2].svg}
            ${index[3].svg}
            ${index[4].svg}
            ${index[5].svg}
            ${index[6].svg}
            ${index[7].svg}
            ${index[8].svg}
            ${index[9].svg}
            ${index[10].svg}
            ${index[11].svg}
        `
        return html
    },

}

//CALCULATE QTD ITENS PAGE NEED
function caclulateQuant(array) {
    let qtd = 0;
    if(verifyDisplayWidth() > 920  ) {
        qtd = (220 / (array.length)).toFixed()
    } else if (verifyDisplayWidth() > 820 ) {
        qtd = (187 / (array.length)).toFixed()
    }  else if (verifyDisplayWidth() > 520 ) {
        qtd = (154 / (array.length)).toFixed()
    } else if (verifyDisplayWidth() <= 520 ) {
        qtd = (99 / (array.length)).toFixed()
    }
    return qtd
}

//EXECUTE TEMPLATE
const RunStack = {
    init() {
        DOMStacks.addStack(stacks);               //Exibe os anuncios na pagina de anuncios   
    }
}
RunStack.init()

// ====================================================================================== //
// ===================================== CONSOLE.LOG ==================================== //
// ====================================================================================== //

function consoleMessage() {
    console.log("YOU OVER HERE?");
    console.log("You thought I wouldn't find you right?!");
    console.log("WHAT ABOUT A COFFEE?");
    console.log("Click there ==> https://github.com/seiler-emerson");


    // let estilo = [
    //     'background-color:#fff',
    //     'background-image: url(house.png)',
    //     'background-repeat: no-repeat',
    //     'background-size:cover',
    //     'color:#fff',
    //     'padding:80px 100px',
    //     'line-height:35px',
    //     'width:80px',
    //     'height:180px',
    //     'border:1px solid black',
    //     'border-radius:8px'
    //   ];
      
    //   console.log('%c ', estilo.join(';'));
    // console.log('%c Meu Texto','color: white; background-color: red;');

    // console.log('%c','padding: 40px 45px;line-height:100px;background-image:url("house.png") no-repeat;background-size: cover;');

    // const style = 'background: url(house.png); background-repeat: no-repeat; background-attachment: inherit; background-position: inherit; background-size: cover;font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)';

    // console.log('%c ', style);

}
consoleMessage();

function visitProfile() {
    if (confirm("Visit my profile! Let's go")) {
        window.open('https://github.com/seiler-emerson','_blank');
    }
}

