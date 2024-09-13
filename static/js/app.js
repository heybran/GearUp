// Utils
import { onDocumentReady } from 'utils/index.js';
// Components
import Menu from 'components/menu.js';

onDocumentReady(() => {
  new Menu({
    // Toggle button to open/hide the main navigation menu.
    toggleButtonClass: 'js-header-navigation-toggle',
    // Class added to navigation menu when it's open.
    navigationOpenClass: 'header__navigation-toggle--open',
  }).run();
});
