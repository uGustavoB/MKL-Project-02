class MobileNavBar{
    constructor(mobileMenu, navList, navLinks, nav, divHidden, navLogo){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.nav = document.querySelector(nav);
        this.divHidden = document.querySelector(divHidden);
        this.navLogo = document.querySelector(navLogo);
        this.activeClass = "active";

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
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);  
        this.nav.classList.toggle(this.activeClass);
        this.navLogo.classList.toggle(this.activeClass);
        if (this.navList.classList.contains(this.activeClass)){
            this.divHidden.classList.add("div-hidden");
        } else{
            this.divHidden.classList.remove("div-hidden");
        }
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
};

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    "nav",
    ".shadow-div",
    ".logo-bg",
);

mobileNavBar.init();