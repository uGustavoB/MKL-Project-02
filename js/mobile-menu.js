class MenuNavBar{
    constructor(mobileMenu, navList, navLinks, navLogo){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLogo = document.querySelector(navLogo);
        this.navLinks = document.querySelectorAll(navLinks);

        this.activeClass = 'active';
        this.displayBlock = 'max-lg:block';
        this.displayFlex = 'max-lg:flex';
        this.displayNone = 'max-lg:hidden';
        this.translateX = 'max-lg:translate-x-full';
        this.zIndex = 'max-lg:z-50';

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });

        // animação nav-list
        this.navList.style.animation
            ? (this.navList.style.animation = "")
            : (this.navList.style.animation = `navLinkFade 0.7s`);
    }

    handleClick(){
        // adicionar ou remover a classe hidden do navList
        if (this.navList.classList.contains(this.displayNone)) {
            this.mobileMenu.classList.add(this.activeClass);
            this.navList.classList.remove(this.displayNone);
            this.navList.classList.add(this.displayFlex);
            this.navList.classList.remove(this.translateX);
            this.navLogo.classList.add(this.zIndex);
            this.navLinks.forEach((link) => {
                link.classList.remove(this.displayNone);
                link.classList.add(this.displayBlock);
            })
        } else {
            this.mobileMenu.classList.remove(this.activeClass);
            this.navList.classList.remove(this.displayFlex);
            this.navList.classList.add(this.displayNone);
            this.navList.classList.add(this.translateX);
            this.navLogo.classList.remove(this.zIndex);
            this.navLinks.forEach((link) => {
                link.classList.remove(this.displayBlock);
                link.classList.add(this.displayNone);
            })
        }

        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const menuNavBar = new MenuNavBar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li',
    '.logo',
);
menuNavBar.init();