class MobileNavBar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = 'active'

    this.handleClick = this.handleClick.bind(this)
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`)
    })
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass)
    this.mobileMenu.classList.toggle(this.activeClass)
    this.animateLinks()
  }

  handleLinkClick(event) {
    event.preventDefault()
    const targetId = event.target.getAttribute('href').substring(1)
    const targetSection = document.getElementById(targetId)

    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })

    this.navList.classList.remove(this.activeClass)
    this.mobileMenu.classList.remove(this.activeClass)
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick)
  }

  addLinkClickEvent() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', this.handleLinkClick)
    })
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent()
      this.addLinkClickEvent()
    }
    return this
  }
}

const mobileNavBar = new MobileNavBar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li a'
)

mobileNavBar.init()
