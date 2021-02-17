// ********************* InnerHTML elements **********************
const topText = document.getElementById ('top-text');
const bottomText = document.getElementById ('bottom-text');
const textColor = document.getElementById ('text-color');
const textBackgroundColor = document.getElementById ('text-background-color');


// ********************* Events elements **********************
// topText Elements
const topTextInput = document.getElementById ('top-text-input');
const noTopTextCheckbox = document.getElementById ('no-top-text-checkbox');

// bottomText Elements
const bottomTextInput = document.getElementById ('bottom-text-input');
const noBottomTextCheckbox = document.getElementById ('no-bottom-text-checkbox');

// Font styles
const textFontSelect = document.getElementById ('text-font-select');
const fontSizeInput = document.getElementById ('font-size-input');
const alignLeftButton = document.getElementById ('align-left-button');
const alignCenterButton = document.getElementById ('align-center-button');
const alignRightButton = document.getElementById ('align-right-button');

// Font Color
const textColorInput = document.getElementById ('text-color-input');

// Background Color
const textBackgroundColorInput = document.getElementById ('text-background-color-input');
const textNoBackgroundCheckbox = document.getElementById ('text-no-background-checkbox');

// Outline
const noOutlineButton = document.getElementById ('no-outline-button');
const lightOutlineButton = document.getElementById ('light-outline-button');
const darkOutlineButton = document.getElementById ('dark-outline-button');

// Letter Spacing Input
const letterSpacingInput = document.getElementById ('letter-spacing-input');

// line Height
const lineHeightInput = document.getElementById ('line-height-input');

// ********************* Events **********************
// Chance top text
topTextInput.addEventListener('keyup', ()=>{
    topText.innerHTML = topTextInput.value;
});

// Chance botton text
bottomTextInput.addEventListener('keyup', ()=>{
    bottomText.innerHTML = bottomTextInput.value;
});

// Disappear top text
noTopTextCheckbox.addEventListener('click', ()=>{
    if(noTopTextCheckbox.checked){
        topText.style.display = 'none';
    } else {
        topText.style.display = 'block';
    }
});

// Disappear bottom text
noBottomTextCheckbox.addEventListener('click', ()=>{
    if(noBottomTextCheckbox.checked){
        bottomText.style.display = 'none';
    } else {
        bottomText.style.display = 'block';
    }
});

// Change font style
textFontSelect.addEventListener('change', ()=>{
    topText.style.fontFamily =  `${textFontSelect.value}`;
    bottomText.style.fontFamily = `${textFontSelect.value}`;
});

// Font size
const fontSize = () =>{
    topText.style.fontSize = `${fontSizeInput.value}px`;
    bottomText.style.fontSize = `${fontSizeInput.value}px`;
}

fontSizeInput.addEventListener ('input', fontSize)

// Align text
alignLeftButton.addEventListener('click',()=>{
    topText.style.textAlign = 'left';
    bottomText.style.textAlign = 'left'; 
});

alignCenterButton.addEventListener('click',()=>{
    topText.style.textAlign = 'center';
    bottomText.style.textAlign = 'center'; 
});

alignRightButton.addEventListener('click',()=>{
    topText.style.textAlign = 'right';
    bottomText.style.textAlign = 'right'; 
});

// Choose color font
textColorInput.addEventListener('input', ()=>{
    const valueColor = textColorInput.value;
    topText.style.color = valueColor;
    bottomText.style.color = valueColor;
    textColor.innerHTML = valueColor.toUpperCase();
});

// choose background color
textBackgroundColorInput.addEventListener('input',()=>{
    const colorValue = textBackgroundColorInput.value;
    topText.style.backgroundColor = colorValue;
    bottomText.style.backgroundColor = colorValue;
    textBackgroundColor.innerHTML = colorValue.toUpperCase();
});

// Transparent background
textNoBackgroundCheckbox.addEventListener('change',()=>{
    if(textNoBackgroundCheckbox.checked){
        topText.style.backgroundColor = 'transparent';
        bottomText.style.backgroundColor = 'transparent';

    } else{
        topText.style.backgroundColor = `${textBackgroundColorInput.value}`;
        bottomText.style.backgroundColor = `${textBackgroundColorInput.value}`;
    }
});

// Outline
noOutlineButton.addEventListener('click', ()=>{
    topText.style.webkitTextStroke  = 'transparent';
    bottomText.style.webkitTextStroke = 'transparent';
});

lightOutlineButton.addEventListener('click', ()=>{
    topText.style.webkitTextStroke  = '2px white';
    bottomText.style.webkitTextStroke = '2px white';
});

darkOutlineButton.addEventListener('click', ()=>{
    topText.style.webkitTextStroke  = '2px black';
    bottomText.style.webkitTextStroke = '2px black';
});


// Letter Spacing
letterSpacingInput.addEventListener('change', () => {
    topText.style.letterSpacing = `${letterSpacingInput.value}px`;
    bottomText.style.letterSpacing = `${letterSpacingInput.value}px`;
});

// Line Height 
lineHeightInput.addEventListener('change', ()=>{
    topText.style.lineHeight = `${lineHeightInput.value}`;
    bottomText.style.lineHeight = `${lineHeightInput.value}`;
});