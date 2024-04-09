//

function showDropDownMenu() {
    const dropDown = document.querySelector('.dropdown_menu')
    const barsIcon = document.querySelector('.bars-icon')
    const closeIcon = document.querySelector('.close-icon')

    if (barsIcon.classList.contains('hide'))
    {   
        barsIcon.classList.remove('hide');
        closeIcon.classList.add('hide');
        dropDown.classList.add('hide');
    }

    else {
        barsIcon.classList.add('hide');
        closeIcon.classList.remove('hide');
        dropDown.classList.remove('hide');
    }
}

window.addEventListener('click', (e) => {
    if(!(e.target.classList.contains('hamburger-icon'))) {
        document.querySelector('.dropdown_menu').classList.add('hide');
        document.querySelector('.bars-icon').classList.remove('hide');
        document.querySelector('.close-icon').classList.add('hide');
    }
})

// TYPEWRITER:
// set up text to print, each item in array is new line
var aText = new Array(
    "May 11-12, 2024 • John Abbott College"
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
    mainLogo.style.filter = 'drop-shadow(0px -1em 0.5em rgba(0, 0, 0, 0.885))';
    typedText.style.filter = 'drop-shadow(0px -0.6em 0.2em rgb(0, 0, 0))';
    glowButton.classList.add('afterHover');
});

glowButton.addEventListener('mouseout', () => {
    mainLogo.style.filter = 'drop-shadow(0px -1em 0.5em rgba(0, 0, 0, 0.885))';
    typedText.style.filter = 'drop-shadow(0px -0.6em 0.2em rgb(0, 0, 0))';
    glowButton.classList.remove('afterHover');
});



