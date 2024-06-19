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
const pythonAlbum = document.querySelector(".projectContainer")
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
let arduinoVisible = false;
let webpageVisible = true; // assuming webpage is visible by default

function togglePythonAlbum() {
  pythonAlbumVisible =!pythonAlbumVisible;
  pythonAlbum.style.display = pythonAlbumVisible? "block" : "none";
  webpage.style.display = pythonAlbumVisible? "none" : "flex";
  arduino.style.display = "none"; // close arduino when pythonAlbum is toggled
  arduinoVisible = false; // reset arduinoVisible flag
}

function toggleArduino(){
  arduinoVisible =!arduinoVisible;
  arduino.style.display = arduinoVisible? "block" : "none";
  webpage.style.display = arduinoVisible? "none" : "flex";
  pythonAlbum.style.display = "none"; // close pythonAlbum when arduino is toggled
  pythonAlbumVisible = false; // reset pythonAlbumVisible flag
}
//==========================================================================================================
const codeDisplayElement = document.getElementById('codeDisplay');
const codeToggleElement = document.getElementById('codeToggle');
const pageSelectElement = document.getElementById('pageSelect');
const copyCodeElement = document.getElementById('copyCode');

const longCodeExample1 = `
# Slope Calculator

def calculate_slope(x1, y1, x2, y2):
    """
    Calculates the slope of a line given two points (x1, y1) and (x2, y2).

    Args:
        x1 (float): x-coordinate of the first point
        y1 (float): y-coordinate of the first point
        x2 (float): x-coordinate of the second point
        y2 (float): y-coordinate of the second point

    Returns:
        tuple: (slope, y-intercept) of the line in slope-intercept form
    """
    if x1 == x2:
        return "Undefined"  # This means that the equation is a vertical line
    else:
        slope = (y2 - y1) / (x2 - x1)
        y_intercept = y1 - slope * x1
        return slope, y_intercept

def main():
    print("Slope Calculator")
    print("Enter 'new' to create a new equation, or 'quit' to exit the program.")

    while True:
        user_input = input("What would you like to do? ")

        if user_input.lower() == 'new':
            print("Enter the x and y coordinates of two points on the line to create the Slope-Intercept Form")

            x1 = float(input("Enter x1: "))
            y1 = float(input("Enter y1: "))
            x2 = float(input("Enter x2: "))
            y2 = float(input("Enter y2: "))

            result = calculate_slope(x1, y1, x2, y2)

            if result == "Undefined":
                print("The slope is undefined meaning it is a vertical line.")
            else:
                slope, y_intercept = result
                if slope == 1:
                    slope_str = ""
                elif slope == -1:
                    slope_str = "-"
                else:
                    slope_str = f"{slope:.2f}"
                if y_intercept == 0:
                    y_intercept_str = ""
                elif y_intercept > 0:
                    y_intercept_str = f" + {y_intercept:.2f}"
                else:
                    y_intercept_str = f" - {-y_intercept:.2f}"
                print(f"The equation of the line is: y = {slope_str}x{y_intercept_str}")

        elif user_input.lower() == 'quit':
            print("Goodbye!")
            break

        else:
            print("Invalid input. Please try again.")

if __name__ == "__main__":
    main()
`;

const longCodeExample2 = `
// This is a long code example for Page 2
function exampleFunction() {
    //...long code here...
}
// More long code here...
`;

const longCodeExample3 = `
// This is a long code example for Page 3
function exampleFunction() {
    //...long code here...
}
// More long code here...
`;

// Set the code display element to block initially
codeDisplayElement.style.display = 'block';

pageSelectElement.addEventListener('change', () => {
  switch (pageSelectElement.value) {
    case 'page1':
      codeDisplayElement.textContent = longCodeExample1;
      break;
    case 'page2':
      codeDisplayElement.textContent = longCodeExample2;
      break;
    case 'page3':
      codeDisplayElement.textContent = longCodeExample3;
      break;
    default:
      codeDisplayElement.textContent = '';
  }
});

copyCodeElement.addEventListener('click', () => {
  const codeToCopy = codeDisplayElement.textContent;
  const textarea = document.createElement('textarea');
  textarea.value = codeToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Code copied to clipboard!');
});

// Set the initial code display
codeDisplayElement.textContent = longCodeExample1;
//==========================================================================================================
const codeDisplay = document.getElementById('code-display');
const toggleButton = document.getElementById('toggle-button');
const pageDropdown = document.getElementById('page-dropdown');
const copyButton = document.getElementById('copy-button');

const longCodePage1 = `
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
`;

const longCodePage2 = `
// This is a long code example for Page 2
function exampleFunction() {
    //...long code here...
}
// More long code here...
`;

const longCodePage3 = `
// This is a long code example for Page 3
function exampleFunction() {
    //...long code here...
}
// More long code here...
`;

toggleButton.addEventListener('click', () => {
  if (codeDisplay.style.display === 'none') {
    codeDisplay.style.display = 'block';
    toggleButton.textContent = 'Toggle Code';
  } else {
    codeDisplay.style.display = 'none';
    toggleButton.textContent = 'Show Code';
  }
});

pageDropdown.addEventListener('change', () => {
  switch (pageDropdown.value) {
    case 'page1':
      codeDisplay.textContent = longCodePage1;
      break;
    case 'page2':
      codeDisplay.textContent = longCodePage2;
      break;
    case 'page3':
      codeDisplay.textContent = longCodePage3;
      break;
    default:
      codeDisplay.textContent = '';
  }
});

copyButton.addEventListener('click', () => {
  const codeToCopy = codeDisplay.textContent;
  const textarea = document.createElement('textarea');
  textarea.value = codeToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Code copied to clipboard!');
});

codeDisplay.textContent = longCodePage1;
