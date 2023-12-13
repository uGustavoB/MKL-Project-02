// criar darkmode que troca o tema do site e o icone bootstrap de darkmode

class DarkMode{
    constructor(darkModeButton, darkModeIcon){
        this.darkModeButton = document.querySelector(darkModeButton);
        this.darkModeIcon = document.querySelector(darkModeIcon);

        this.tagHtml = document.querySelector('html');

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if (this.tagHtml.classList.contains('dark')) {
            this.tagHtml.classList.remove('dark');
            this.darkModeIcon.classList.add('bi-moon-stars');
            this.darkModeIcon.classList.remove('bi-brightness-high');
        } else {
            this.tagHtml.classList.add('dark');
            this.darkModeIcon.classList.add('bi-brightness-high');
            this.darkModeIcon.classList.remove('bi-moon-stars');
        }
    }

    addClickEvent(){
        this.darkModeButton.addEventListener('click', this.handleClick);
    }

    init(){
        if (this.darkModeButton) {
            this.addClickEvent();
        }
        return this;
    }
}

const darkMode = new DarkMode(
    '.dark-mode-button',
    '.dark-mode-icon'
);
darkMode.init();