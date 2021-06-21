/**
 * @file playback-rate-menu-item.js
 */
import MenuItem from '../../menu/menu-item.js';
import Component from '../../component.js';
import localizeRate from '../../utils/format-rate.js';

/**
 * The specific menu item type for selecting a playback rate.
 *
 * @extends MenuItem
 */
class PlaybackRateMenuItem extends MenuItem {

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   */
  constructor(player, options) {
    const rate = parseFloat(options.rate, 10);
    // Label set to unlocalised rate initially, just to avoid this before super headache
    const label = player.localize('playback rate display: rate={1}', [localizeRate(rate, player.language())], '{1}x');

    // Modify options for parent MenuItem class's init.
    options.label = label;
    options.selected = rate === player.playbackRate();
    options.selectable = true;
    options.multiSelectable = false;

    super(player, options);

    this.label = label;
    this.rate = rate;

    this.on(player, 'ratechange', (e) => this.update(e));
  }

  /**
   * This gets called when an `PlaybackRateMenuItem` is "clicked". See
   * {@link ClickableComponent} for more detailed information on what a click can be.
   *
   * @param {EventTarget~Event} [event]
   *        The `keydown`, `tap`, or `click` event that caused this function to be
   *        called.
   *
   * @listens tap
   * @listens click
   */
  handleClick(event) {
    super.handleClick();
    this.player().playbackRate(this.rate);
  }

  /**
   * Update the PlaybackRateMenuItem when the playbackrate changes.
   *
   * @param {EventTarget~Event} [event]
   *        The `ratechange` event that caused this function to run.
   *
   * @listens Player#ratechange
   */
  update(event) {
    this.selected(this.player().playbackRate() === this.rate);
  }

  /**
   * Update label on language change
   */

  handleLanguagechange(e) {
    this.label = this.player_.localize('playback rate display: rate={1}', [localizeRate(this.rate, this.player_.language())], '{1}x');
    this.el_.querySelector('.vjs-menu-item-text').innerHTML = this.label;

  }

}

/**
 * The text that should display over the `PlaybackRateMenuItem`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
PlaybackRateMenuItem.prototype.contentElType = 'button';

Component.registerComponent('PlaybackRateMenuItem', PlaybackRateMenuItem);
export default PlaybackRateMenuItem;
