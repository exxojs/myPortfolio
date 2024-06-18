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
const ardu = document.querySelector("arrdee")


const minorAlbum = document.querySelector(".minorAlbum")
const majorAlbum = document.querySelector(".majorAlbum")
const albumBtn = document.querySelector(".albumButtons")
const contactPage = document.querySelector("main")
const niggaTwo = document.querySelector(".pageTwo")
const pythonAlbum = document.querySelector(".pythonAlbum")
const webpage = document.querySelector(".webpage")
const arduino = document.querySelector(".arduinoProj")


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
  arduino.style.display = pythonAlbum ? "none" : "block"
}

let arduinoVisible = false

function  toggleArduino(){
arduinoVisible = !arduinoVisible
arduino.style.display = arduinoVisible ? "block" : "none";
webpage.style.display = arduinoVisible ? "none" : "flex";
pythonAlbum.style.display = arduinoVisible ? "none" : "flex";
}

//==========================================================================================================
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.getElementById('page-dropdown');
  const content = document.getElementById('content');

  const page1Content = `
     <div class="pageOne">
     <h1>
      basicLCDArduino.ino
     </h1>
  <pre><code>
//C++ code
//C++ integers start with 0

#include <Adafruit_LiquidCrystal.h> 
//Adafruit LiquidCrystal library provides functions 
//...for controlling LCD screens

int seconds = 0; 
//We set a variable "seconds" and initialize it to 0

Adafruit_LiquidCrystal lcd_1(0); 
//Class name "lcd_1" is connected to analog pin 0

void setup()
{
lcd_1.begin(16, 2); 
//Initialize that the LCD has 16 colums and a height of 2 rows

lcd_1.setCursor(0, 0);
lcd_1.print("Hello World");
//setCursor points to the 1st column & 1st row which is (0,0) 
//There we print the string: "Hello World"

lcd_1.setCursor(0, 1);
lcd_1.print("Basic LCD - Diaz");
//Same as the first one;
//This time we start at the 1st column of 2nd row = (0, 1)
}

void loop()//void loop is a continious function after "setup()"
{
 lcd_1.setCursor(12, 0); // Set cursor to column 12, row 0
if (seconds < 10) {
  lcd_1.print("0"); // Add a leading zero for single-digit seconds
}
lcd_1.print(seconds);
//This prints the "seconds" variable we set earlier on coolum 12, row 1

lcd_1.setBacklight(1);
//setBackLight turns on the LCD's backlight (light blue)
delay(500); // Wait for 500 millisecond(s)

lcd_1.setBacklight(0);
//setBackLight turns off each count with delay 0.5 seconds
delay(500); // Wait for 500 millisecond(s)

seconds += 1;
//since this is a looping/continious function; we add an increment by 1 (+=1)
//this adds a value of 1 to whatever value variable 'seconds' have currently
}
      </code>
  </pre>
  </div>
  `;

  const page2Content = `
      <h1>Welcome to Page 2!</h1>
      <p>This is some sample content on page 2.</p>
      <img src="image2.jpg" alt="Image on page 2">
  `;

  const page3Content = `
      <h1>Welcome to Page 3!</h1>
      <p>This is some sample content on page 3.</p>
      <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
      </ul>
  `;

  dropdown.addEventListener('change', () => {
      switch (dropdown.value) {
          case 'page1':
              content.innerHTML = page1Content;
              break;
          case 'page2':
              content.innerHTML = page2Content;
              break;
          case 'page3':
              content.innerHTML = page3Content;
              break;
          default:
              content.innerHTML = '';
      }
  });

  // Trigger the change event on page load
  dropdown.dispatchEvent(new Event('change'));
});
