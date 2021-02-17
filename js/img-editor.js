const imageMeme = document.getElementById('image-meme');
const blendModeColor = document.getElementById('blend-mode-color');

const urlImgInput = document.getElementById('url-img-input');
const blendModeColorInput = document.getElementById('blend-mode-color-input');
const blendModeSelect = document.getElementById('blend-mode-select');

const brightnessSlider = document.getElementById('brightness-slider');
const opacitySlider = document.getElementById('opacity-slider');
const contrastSlider = document.getElementById('contrast-slider');
const blurSlider = document.getElementById('blur-slider');
const grayscaleSlider = document.getElementById('grayscale-slider');
const sepiaSlider = document.getElementById('sepia-slider');
const hueSlider = document.getElementById('hue-slider');
const saturationSlider = document.getElementById('saturation-slider');
const invertSlider = document.getElementById('Invert-slider');
const defaultFiltersButton = document.getElementById('default-filters-button');

// Image URL
urlImgInput.addEventListener('keyup', (e)=>{
    e.preventDefault();
    const valueUrl = urlImgInput.value;
    imageMeme.style.backgroundImage = `url("${valueUrl}")`;
    imageMeme.style.backgroundPosition = 'center';
});


// Background color
blendModeColorInput.addEventListener('input', ()=>{
    const valueBlendModeColor = blendModeColorInput.value;
    imageMeme.style.backgroundColor = valueBlendModeColor;
    blendModeColor.innerHTML = valueBlendModeColor.toUpperCase();
});

blendModeSelect.addEventListener('change',()=> imageMeme.style.backgroundBlendMode = blendModeSelect.value);


// Filters

brightnessSlider.addEventListener('change', () => {
    imageMeme.style.filter = `brightness(${brightnessSlider.value})`
})

opacitySlider.addEventListener('change', () => {
    imageMeme.style.filter = `opacity(${opacitySlider.value})`
})

contrastSlider.addEventListener('change', () => {
    imageMeme.style.filter = `contrast(${contrastSlider.value}%)`
})

blurSlider.addEventListener('change', () => {
    imageMeme.style.filter = `blur(${blurSlider.value}px)`
})

grayscaleSlider.addEventListener('change', () => {
    imageMeme.style.filter = `grayscale(${grayscaleSlider.value}%)`
})

sepiaSlider.addEventListener('change', () => {
    imageMeme.style.filter = `sepia(${sepiaSlider.value}%)`
})

hueSlider.addEventListener('change', () => {
    imageMeme.style.filter = `hue-rotate(${hueSlider.value}deg)`
})

saturationSlider.addEventListener('change', () => {
    imageMeme.style.filter = `saturate(${saturationSlider.value}%)`
})

invertSlider.addEventListener('change', () => {
    imageMeme.style.filter = `invert(${invertSlider.value})`
})

// Restaring Filters

defaultFiltersButton.addEventListener('click', ()=>{
    brightnessSlider.value = 1
    opacitySlider.value= 1
    contrastSlider.value = 100
    blurSlider.value= 0
    grayscaleSlider.value = 0
    sepiaSlider.value = 0
    hueSlider.value= 0
    saturationSlider.value = 100
    invertSlider.value = 0
    imageMeme.style.filter = 'none';
});