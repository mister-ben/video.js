
import Component from '.././component';
import ModalDialog from '.././modal-dialog';

class MenuPanel extends ModalDialog {
  constructor(player, options) {
    options.pauseOnOpen = false;
    options.temporary = false;
    options.className = 'vjs-menu-panel';

    super(player, options);

    this.on('modalopen', () => {
      player.addClass('vjs-menu-panel-showing');
    });
    this.on('modalclose', () => {
      player.removeClass('vjs-menu-panel-showing');
    });
  }
}

Component.registerComponent('MenuPanel', MenuPanel);
export default MenuPanel;
