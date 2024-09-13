export default class Menu {
  constructor({ toggleButtonClass, navigationOpenClass }) {
    this.toggleButtonClass = toggleButtonClass;
    this.navigationOpenClass = navigationOpenClass;
  }

  run() {
    this.toggleButton = document.querySelector(`.${this.toggleButtonClass}`);
    if (!this.toggleButton) {
      // eslint-disable-next-line
      return console.log(`No toggle button found with this class: '${this.toggleButtonClass}'`);
    }

    const ariaControls = this.toggleButton.getAttribute('aria-controls');
    if (!ariaControls) {
      // eslint-disable-next-line
      return console.log(`Toggle button is missing 'aria-controls' attribute or attribute value is empty.`);
    }

    this.navigation = document.getElementById(ariaControls);
    if (!this.navigation) {
      // eslint-disable-next-line
      return console.log(`Missing nav element with id of '${ariaControls}'`);
    }

    this.toggleButton.addEventListener('click', this.toggleNavigation);
  }

  toggleNavigation = () => {
    const ariaExpanded = this.toggleButton.getAttribute('aria-expanded');
    if (ariaExpanded === 'false') {
      this.toggleButton.setAttribute('aria-expanded', 'true');
      this.navigation.classList.add(this.navigationOpenClass);
    } else {
      this.toggleButton.setAttribute('aria-expanded', 'false');
      this.navigation.classList.remove(this.navigationOpenClass);
    }
  }
}
