// ********************* InnerHTML elements **********************
const imgPanel = document.getElementById ('img-panel');
const textPanel = document.getElementById ('text-panel');
const principalEditorContainer = document.getElementById ('principal-editor-container');
const canvasMeme = document.getElementById('canvas-meme');
const openCloseButton = document.getElementById('open-close-button');

// ********************* Events elements **********************
const imgPanelButton = document.getElementById ('img-panel-button');
const textPanelButton = document.getElementById ('text-panel-button');
const darkThemeButton = document.getElementById ('dark-theme-button');
const lightThemeButton = document.getElementById ('light-theme-button');

// ********************* Events **********************
// Botones header

imgPanelButton.addEventListener('click', () => {
    imgPanel.classList.remove('hidden');
    textPanel.classList.add('hidden');
});

textPanelButton.addEventListener('click', () => {
    textPanel.classList.remove('hidden');
    imgPanel.classList.add('hidden');
});

// Themes
lightThemeButton.addEventListener('click', () => {
    lightThemeButton.classList.add('hidden');
    darkThemeButton.classList.remove('hidden');
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    
});

darkThemeButton.addEventListener('click', () => {
    lightThemeButton.classList.remove('hidden');
    darkThemeButton.classList.add('hidden');
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
});

