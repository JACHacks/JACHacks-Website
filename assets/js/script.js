let i = 0;

function showDropDownMenu() {
    i ++;

    const dropDown = document.querySelector('.dropdown_menu')
    const barsIcon = document.querySelector('.bars-icon')
    const closeIcon = document.querySelector('.close-icon')

    if (i % 2)
    {
        barsIcon.style.display = 'none'
        closeIcon.style.display = 'block'
        dropDown.style.display = 'flex'
    }

    else {
        barsIcon.style.display = 'block'
        closeIcon.style.display = 'none'
        dropDown.style.display = 'none'
    }
}





// TYPEWRITER:
// set up text to print, each item in array is new line
var aText = new Array(
    "May 11-12, 2024 &#x2022 John Abbott College"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    typewriter();



// Glow button shadow
const glowButton = document.querySelector('.glowbutton');
const mainLogo = document.querySelector('.main-logo');
const typedText = document.querySelector('#typedtext');
const buttonAfter = document.querySelector('.glowbutton::after');


glowButton.addEventListener('mouseover', () => {
    mainLogo.style.filter = 'drop-shadow(0px -20px 3px rgb(0, 0, 0))';
    typedText.style.filter = 'drop-shadow(0px -10px 1px rgb(0, 0, 0))';
    glowButton.classList.add('afterHover');
});

glowButton.addEventListener('mouseout', () => {
    mainLogo.style.filter = 'drop-shadow(0px -20px 6px rgba(0, 0, 0, 0.885))';
    typedText.style.filter = 'drop-shadow(0px -10px 3px rgb(0, 0, 0))';
    glowButton.classList.remove('afterHover');
});



