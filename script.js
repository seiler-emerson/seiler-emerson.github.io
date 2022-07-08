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
        <svg width="206" height="215" viewBox="0 0 206 215" xmlns="http://www.w3.org/2000/svg">
            <path d="M202.482 33.6894L104.014 0.241931C103.033 -0.0852519 101.963 -0.0805777 100.976 0.255953L3.13462 34.3063C1.05934 35.0261 -0.235366 37.1014 0.0357285 39.2842L15.4975 166.058C15.6797 167.558 16.5725 168.881 17.9046 169.601L100.387 214.434C101.079 214.813 101.85 215 102.617 215C103.388 215 104.164 214.808 104.86 214.425L187.769 168.984C189.087 168.26 189.984 166.942 190.162 165.45L205.619 38.6812C205.89 36.4891 204.581 34.3998 202.482 33.6894ZM142.851 154.237L129.848 126.226H75.8066L62.8034 154.237H42.0647L102.827 23.3644L163.59 154.237H142.851Z" />
            <path d="M121.149 106.718L102.827 66.9888L84.5049 106.718H121.149Z" />
        </svg>
        `
    },
    {   //CSS3
        svg: `
        <svg width="192" height="215" viewBox="0 0 192 215" xmlns="http://www.w3.org/2000/svg">
            <path d="M189.435 2.9881C187.73 1.08577 185.298 0 182.75 0H8.9733C6.42489 0 3.99313 1.08577 2.2882 2.9881C0.583278 4.89044 -0.224319 7.42988 0.0538532 9.96035L19.813 187.838C20.2079 191.454 22.7652 194.478 26.2648 195.474L93.385 214.65C94.1926 214.883 95.0271 215 95.8527 215C96.6782 215 97.5128 214.883 98.3203 214.65L165.441 195.474C168.94 194.478 171.489 191.454 171.892 187.838L191.661 9.96035C191.948 7.42988 191.14 4.89044 189.435 2.9881ZM145.358 90.3969L141.356 155.767L96.1488 170.546L50.9414 155.767L49.2275 124.504H72.1094L72.6837 138.718L96.1488 146.677L119.614 138.718L121.328 113.144H70.9698L69.8302 90.4059H122.476L124.19 67.6676H45.2164L43.5025 44.9203H148.221L145.358 90.3969Z" />
        </svg>
        `
    },
    {   //ECLIPSE
        svg: `
        <svg width="234" height="215" viewBox="0 0 234 215" xmlns="http://www.w3.org/2000/svg">
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
        <svg width="139" height="215" viewBox="0 0 139 215" xmlns="http://www.w3.org/2000/svg">
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
        <svg width="215" height="215" viewBox="0 0 215 215" xmlns="http://www.w3.org/2000/svg">
            <path d="M209.363 93.8896L121.11 5.63674C117.353 1.87891 112.426 0 107.5 0C102.574 0 97.6474 1.87891 93.8896 5.63674L76.4372 23.0891L98.0493 44.7013C105.214 40.4854 114.562 41.3875 120.718 47.5384C126.869 53.6892 127.771 63.0371 123.555 70.2068L144.788 91.4404C151.954 87.2246 161.301 88.1266 167.457 94.2775C174.758 101.578 174.758 113.417 167.457 120.718C160.156 128.018 148.317 128.018 141.017 120.718C134.866 114.567 133.964 105.219 138.18 98.0493L116.946 76.8158C115.432 77.7038 113.833 78.3582 112.174 78.7835V136.203C120.222 138.287 126.196 145.536 126.196 154.239C126.196 164.564 117.825 172.935 107.5 172.935C97.1753 172.935 88.8043 164.564 88.8043 154.239C88.8043 145.536 94.7776 138.287 102.826 136.203V78.7882C99.6992 77.9796 96.7266 76.4278 94.2822 73.9834C88.1313 67.8325 87.2292 58.4847 91.4451 51.3149L69.8283 29.698L5.63674 93.8896C-1.87891 101.405 -1.87891 113.59 5.63674 121.106L93.8896 209.359C97.6474 213.121 102.574 215 107.5 215C112.426 215 117.353 213.121 121.11 209.363L209.363 121.11C216.879 113.595 216.879 101.405 209.363 93.8896Z" />
        </svg>
        `
    },
    {   //GITHUB
        svg: `
        <svg width="221" height="215" viewBox="0 0 221 215" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M110.21 0C49.3505 0 0 49.3505 0 110.228C0 158.917 31.5777 200.231 75.3805 214.807C80.8914 215.818 82.9029 212.419 82.9029 209.498C82.9029 206.881 82.8111 199.946 82.756 190.752C52.0968 197.411 45.6306 175.974 45.6306 175.974C40.6156 163.243 33.3963 159.854 33.3963 159.854C23.3848 153.011 34.1495 153.158 34.1495 153.158C45.2081 153.939 51.0313 164.52 51.0313 164.52C60.8592 181.365 76.8317 176.497 83.105 173.677C84.1062 166.559 86.9535 161.7 90.1039 158.945C65.6261 156.162 39.8992 146.71 39.8992 104.469C39.8992 92.4369 44.1978 82.5998 51.2426 74.8937C50.1128 72.1015 46.3286 60.8959 52.3264 45.7224C52.3264 45.7224 61.5848 42.7557 82.6366 57.0199C91.4265 54.5767 100.859 53.3551 110.228 53.3092C119.587 53.3551 129.02 54.5767 137.819 57.0199C158.862 42.7557 168.102 45.7224 168.102 45.7224C174.118 60.8959 170.334 72.1015 169.195 74.8937C176.258 82.5998 180.52 92.4369 180.52 104.469C180.52 146.811 154.747 156.125 130.196 158.853C134.155 162.251 137.682 168.984 137.682 179.262C137.682 193.994 137.544 205.88 137.544 209.498C137.544 212.447 139.528 215.873 145.121 214.798C188.888 200.185 220.438 158.908 220.438 110.228C220.438 49.3505 171.087 0 110.21 0Z" />
        </svg>
        `
    },
    {   //HTML
        svg: `
        <svg width="192" height="215" viewBox="0 0 192 215" xmlns="http://www.w3.org/2000/svg">
            <path d="M189.435 2.9881C187.73 1.08577 185.298 0 182.75 0H8.9733C6.42489 0 3.99313 1.08577 2.2882 2.9881C0.583278 4.89044 -0.224319 7.42988 0.0538532 9.96035L19.813 187.838C20.2079 191.454 22.7652 194.478 26.2648 195.474L93.385 214.65C94.1926 214.883 95.0271 215 95.8527 215C96.6782 215 97.5128 214.883 98.3203 214.65L165.441 195.474C168.94 194.478 171.489 191.454 171.892 187.838L191.661 9.96035C191.948 7.42988 191.14 4.89044 189.435 2.9881ZM146.372 66.6715H66.2408L68.1432 89.4816H144.443L138.718 156.871L95.8886 170.493L95.4668 170.358L53.1129 156.853L50.7978 129.395H71.5441L72.4504 140.064L96.1129 145.278L119.363 140.055L121.83 111.224H49.2365L43.6192 44.8664H148.239L146.372 66.6715Z" />
        </svg>
        `
    },
    {   //JAVA
        svg: `
        <svg width="215" height="215" viewBox="0 0 215 215" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47717 0 0 4.47705 0 10V205C0 210.523 4.47717 215 10 215H205C210.523 215 215 210.523 215 205V10C215 4.47705 210.523 0 205 0H10ZM99.8633 60.1467C103.256 68.2949 105.697 72.6223 109.079 77.8538C109.061 77.8538 86.8163 63.1545 89.6111 50.5024C90.879 44.7617 97.3112 39.6411 103.864 34.4241C113.032 27.1255 122.437 19.6382 118.272 10C127.995 24.1057 117.846 34.2236 109.063 42.9792C102.957 49.0662 97.5114 54.4946 99.8633 60.1467ZM109.848 53.0793C109.483 57.6567 111.89 61.0393 114.12 64.1741C115.874 66.6392 117.519 68.9512 117.622 71.5706C117.812 76.4304 112.726 80.4746 112.726 80.4746C112.726 80.4746 121.952 78.7422 124.835 71.3213C126.638 66.6833 124.438 62.8733 122.347 59.2517C120.728 56.4497 119.175 53.7603 119.591 50.887C120.503 44.5854 140.002 32.8916 140.002 32.8916C140.002 32.8916 111.31 34.71 109.848 53.0793ZM137.597 78.3579C143.527 77.0798 148.535 80.7058 148.535 84.8904C148.535 94.3037 134.934 103.2 134.934 103.2C134.934 103.2 155.995 100.792 155.995 85.3269C155.995 75.1108 145.649 72.5627 137.597 78.3579ZM135.921 79.7837C134.176 81.4617 127.607 85.9553 127.607 85.9553C103.025 90.7346 68.6055 90.1865 68.6028 82.4175C68.6028 74.9758 94.8892 75.3369 94.8892 75.3369C94.8892 75.3369 83.037 78.0381 83.037 80.6589C83.037 83.5032 119.812 83.0669 135.921 79.7837ZM123.565 93.0205C108.326 97.8987 80.2265 96.335 88.5436 89.8049C84.5071 89.8049 78.4914 92.927 78.4914 95.927C78.4914 101.966 108.864 106.616 131.347 97.7947L123.565 93.0205ZM83.1694 109.234C83.1694 106.727 86.7566 103.312 92.284 103.312C86.6423 109.286 111.178 108.727 120.947 104.595L129.259 109.886C116.178 117.769 83.1694 116.987 83.1694 109.234ZM151.272 116.304C151.272 113.589 148.41 112.151 146.886 111.386C146.709 111.297 146.55 111.217 146.415 111.146C153.951 128.595 70.9536 127.24 70.9536 116.946C70.9536 114.598 77.0498 112.304 82.7071 113.4L77.907 110.675C66.647 108.974 59 113.717 59 117.553C58.9974 135.414 151.272 134.554 151.272 116.304ZM161 122.346C146.974 135.642 111.417 140.487 75.6653 132.276C111.414 146.902 160.823 138.674 161 122.346ZM60.2519 169.472C60.2501 181.387 60.0533 191.149 59.7809 192.827C59.0507 197.327 57.0184 200.78 54.2523 202.219L53 202.87L54.4414 204.664C55.2341 205.651 56.2158 206.458 56.6235 206.458C57.6518 206.458 61.0938 204.169 62.8474 202.32C63.6509 201.472 64.8725 199.461 65.562 197.85L66.8156 194.921L66.9518 171.96L67.088 149H63.6718H60.2555L60.2519 169.472ZM143.649 160.986C137.853 162.315 136.976 163.083 138.046 165.897L138.472 167.018L141.326 166.108C145.223 164.865 150.99 164.754 152.72 165.888C154.334 166.945 155.264 169.184 155.264 172.011V174.24L151.154 174.565C143.554 175.166 139.443 176.927 137.132 180.571C136.013 182.336 135.811 183.112 135.82 185.622C135.83 188.782 136.805 191.596 138.37 192.986C140.67 195.029 146.58 195.776 150.236 194.487C151.265 194.124 153.001 193.212 154.093 192.46C156.18 191.024 156.621 191.183 156.621 193.375C156.621 194.135 156.962 194.242 159.366 194.242H162.111L161.968 180.783C161.839 168.667 161.74 167.165 160.978 165.74C159.772 163.482 158.905 162.604 156.848 161.549C154.51 160.35 147.689 160.06 143.649 160.986ZM103.236 161.135C103.236 161.339 103.527 162.408 103.883 163.51C104.728 166.123 109.439 181.061 111.828 188.7L113.703 194.695L117.178 194.663C119.09 194.645 121.025 194.485 121.479 194.306C122.477 193.912 124.837 188.617 127.01 181.894C128.696 176.681 132.191 162.982 132.191 161.588C132.191 160.864 131.781 160.763 128.825 160.763H125.46L125.187 162.912C124.499 168.339 119.331 187.449 118.55 187.454C118.388 187.455 118.006 186.387 117.701 185.081C116.925 181.757 111.065 162.772 110.476 161.67C110.056 160.886 109.53 160.763 106.613 160.763C104.755 160.763 103.236 160.93 103.236 161.135ZM155.167 182.801L155.038 187.194L152.854 188.543C149.896 190.37 146.096 190.7 144.304 189.285C142.705 188.023 141.914 185.225 142.584 183.195C143.629 180.03 146.641 178.71 153.358 178.475L155.297 178.407L155.167 182.801ZM74.4706 165.897C73.4011 163.083 74.2774 162.315 80.0739 160.986C84.114 160.06 90.9342 160.35 93.2723 161.549C95.33 162.604 96.1964 163.483 97.4025 165.74C98.1644 167.165 98.2635 168.667 98.3924 180.783L98.5358 194.242H95.791C93.3868 194.242 93.0461 194.135 93.0461 193.375C93.0461 191.184 92.605 191.024 90.518 192.46C89.4254 193.212 87.6895 194.124 86.6602 194.487C83.0051 195.776 77.0946 195.029 74.7945 192.986C73.2296 191.596 72.2551 188.782 72.2446 185.622C72.2361 183.112 72.4379 182.336 73.5567 180.572C75.8681 176.927 79.9783 175.166 87.5786 174.565L91.6888 174.24V172.011C91.6888 169.184 90.7587 166.945 89.1449 165.888C87.4144 164.754 81.6478 164.866 77.7506 166.108L74.8967 167.018L74.4706 165.897ZM91.4627 187.194L91.592 182.801L91.7215 178.408L89.7823 178.476C83.0662 178.71 80.0535 180.03 79.0089 183.195C78.3388 185.225 79.1292 188.023 80.7285 189.286C82.5206 190.7 86.3204 190.37 89.2788 188.543L91.4627 187.194Z"/>
        </svg>
        `
    },
    {   //JS
        svg: 
        `<svg width="215" height="215" viewBox="0 0 215 215" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47716 0 10V205C0 210.523 4.47716 215 10 215H205C210.523 215 215 210.523 215 205V10C215 4.47715 210.523 0 205 0H10ZM156.514 98.4577C150.493 99.7129 143.839 103.445 140.201 107.607C130.926 118.219 132.246 136.19 143.002 145.705C145.103 147.564 153.17 152.044 160.929 155.662C169.236 159.535 175.708 163.179 176.672 164.525C180.206 169.467 177.906 176.083 171.781 178.589C164.047 181.753 154.213 179.101 147.664 172.086L143.96 168.116L135.916 172.66C131.493 175.159 127.874 177.535 127.874 177.941C127.874 179.325 133.502 186.295 136.874 189.087C145.197 195.979 159.958 199.471 172.068 197.413C188.817 194.567 197.712 186.295 198.841 172.515C200.174 156.25 193.288 147.71 171.047 138.051C157.423 132.133 154.574 129.742 154.574 124.223C154.574 114.678 167.292 112.299 174.233 120.545L177.185 124.051L184.668 119.484C188.784 116.971 192.152 114.341 192.152 113.637C192.152 111.081 183.316 102.729 178.439 100.675C173.104 98.4277 162.029 97.3074 156.514 98.4577ZM96.0144 136.928L95.7346 175.266L92.9597 177.602C87.2697 182.395 78.4863 179.925 73.8435 172.227L72.2088 169.518L64.6883 173.425C60.5518 175.574 56.793 177.654 56.3341 178.047C54.1774 179.898 62.8984 189.68 69.9611 193.33C74.5476 195.701 75.9221 195.918 86.3401 195.918C96.857 195.918 98.103 195.717 102.913 193.233C105.942 191.671 109.354 188.874 111.081 186.539C116.71 178.929 116.996 176.473 116.996 135.699V98.5906H106.645H96.2943L96.0144 136.928Z" />
        </svg>
    `
    },
    {   //TS
        svg: `
        <svg width="215" height="215" viewBox="0 0 215 215" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47716 0 10V205C0 210.523 4.47716 215 10 215H205C210.523 215 215 210.523 215 205V10C215 4.47715 210.523 0 205 0H10ZM182.628 98.6435C186.491 100.659 195 109.151 195 110.991C195 111.447 191.686 114.056 187.636 116.789L180.273 121.758L176.931 118.31C169.31 110.446 158 112.492 158 121.733C158 126.781 160.979 129.401 173 134.926C195.199 145.129 200.885 151.735 200.934 167.381C200.969 178.66 196.428 186.319 186.835 191.16C169.192 200.063 141.578 193.511 133.497 178.506L133.352 178.238C132.617 176.877 132.142 175.998 132.257 175.203C132.464 173.756 134.628 172.589 140.735 169.294L141.397 168.937L147.695 165.538L151.522 169.774C156.478 175.259 160.009 177.011 166.411 177.161C175.933 177.384 181.971 172.576 180.512 165.934C179.588 161.73 176.665 159.572 163.573 153.429C143.388 143.957 137.852 137.421 137.792 122.99C137.741 110.718 141.939 103.76 152.457 98.6845C158.124 95.9505 159.123 95.7905 168.5 96.1295C176.3 96.4105 179.408 96.9635 182.628 98.6435ZM126 105.881V114.881H112H98V154.381V193.881H88H78V154.381V114.881H64H50V105.881V96.8815H88H126V105.881Z" />
        </svg>
        `
    },
    {   //VSCODE
        svg: 
        `<svg width="216" height="215" viewBox="0 0 216 215" xmlns="http://www.w3.org/2000/svg">
            <path d="M215.467 38.041V176.959C215.467 183.802 211.21 189.892 204.798 192.155L157.27 214.464L161.581 155.997V59.0026L157.27 0.536377L204.798 22.8452C211.21 25.1084 215.467 31.1975 215.467 38.041Z" />
            <path d="M26.8662 160.826L161.581 59.0027V7.01895C161.581 0.563411 153.595 -2.4542 149.322 2.38475L3.46896 135.731C-1.38077 140.203 -1.10595 147.947 4.04554 152.069C4.04554 152.069 11.18 158.708 13.7612 160.551C17.7272 163.38 22.938 163.703 26.8662 160.826Z" />
            <path d="M26.8662 54.1744L161.581 155.997V207.981C161.581 214.437 153.595 217.454 149.322 212.615L3.46896 79.2691C-1.38077 74.7966 -1.10595 67.0532 4.04554 62.9309C4.04554 62.9309 11.18 56.2921 13.7612 54.4492C17.7272 51.6202 22.938 51.2969 26.8662 54.1744Z" />
        </svg>
        `
    },              
]


const DOMStacks = {
    stacksContainer: document.querySelector(".logo-stack-container"),

    addStack(index) {  //Responsável por adicionar o projeto no container
        const stacksBox = document.createElement('div');
        stacksBox.classList.add('logo-stack');
        stacksBox.innerHTML = DOMStacks.innerHTMLStacks(index).repeat(caclulateQuant());
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
        
        `
        return html
    },

}

//CALCULATE QTD ITENS PAGE NEED
function caclulateQuant() {
    let qtd = 0;
    if(verifyDisplayWidth() > 920  ) {
        qtd =20
    } else if (verifyDisplayWidth() > 820 ) {
        qtd =17
    }  else if (verifyDisplayWidth() > 520 ) {
        qtd =14
    } else if (verifyDisplayWidth() <= 520 ) {
        qtd = 9
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
}
consoleMessage();


