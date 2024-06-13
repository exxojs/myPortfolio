const bOne = document.getElementById("cal1")
const bTwo = document.getElementById("cal2")
const bThree = document.getElementById("cal3")

//pages
const pageOne = document.querySelector(".subOne")
const pageTwo = document.querySelector(".subTwo")

//functionsss

function goPageOne(){
  pageOne.style.display = "contents";
  pageTwo.style.display = "none";
}

function goPageTwo(){
  pageOne.style.display = "none";
  pageTwo.style.display = "flex";

}

const goMinorAlbum = document.querySelector("minor")
const goMajorAlbum = document.querySelector("major")
const goBackProj = document.querySelector("GoBack")
const exploreAgain = document.querySelector("exploreBitch")
const contactMeBtn = document.querySelector("contactMe")
const goPy = document.querySelector("goPy")


const minorAlbum = document.querySelector(".minorAlbum")
const majorAlbum = document.querySelector(".majorAlbum")
const albumBtn = document.querySelector(".albumButtons")
const contactPage = document.querySelector("main")
const niggaTwo = document.querySelector(".pageTwo")
const pythonAlbum = document.querySelector(".pythonAlbum")
const webpage = document.querySelector(".webpage")


function closeContactMe(){
    contactPage.style.display = "none";
    niggaTwo.style.display = "flex";
}

function openContactMe(){
    contactPage.style.display = "flex";
    niggaTwo.style.display = "none";
}

function goMinor(){
  minorAlbum.style.display = "flex";
  majorAlbum.style.display = "none";
  albumBtn.style.display = "none";

}

function goMajor(){
    minorAlbum.style.display = "none";
    majorAlbum.style.display = "flex";
    albumBtn.style.display = "none";
  
  }

function goBackProjPage(){
  minorAlbum.style.display = "none";
  //majorAlbum.style.display = "none";
  albumBtn.style.display = "flex";
  majorAlbum.style.display = "none";
}

let pythonAlbumVisible = false;

function togglePythonAlbum() {
  pythonAlbumVisible = !pythonAlbumVisible;
  pythonAlbum.style.display = pythonAlbumVisible ? "flex" : "none";
  webpage.style.display = pythonAlbumVisible ? "none" : "flex";
}
