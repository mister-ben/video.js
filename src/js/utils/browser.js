/**
 * @file browser.js
 * @module browser
 */
import * as Dom from './dom';
import window from 'global/window';

const uAD = window.navigator && window.navigator.userAgentData;
let USER_AGENT;

if (!uAD) {
  USER_AGENT = window.navigator && window.navigator.userAgent || '';
}

/**
 * Whether or not this device is an iPod.
 *
 * @static
 * @const
 * @type {Boolean}
 */
export const IS_IPOD = (/iPod/i).test(uAD ? uAD.platform : USER_AGENT);

/**
 * The detected iOS version - or `null`.
 *
 * @static
 * @const
 * @type {string|null}
 */
export const IOS_VERSION = (function() {
  if (uAD) {
    return null;
  }

  const match = USER_AGENT.match(/OS (\d+)_/i);

  if (match && match[1]) {
    return match[1];
  }
  return null;
}());

/**
 * Whether or not this is an Android device.
 *
 * @static
 * @const
 * @type {Boolean}
 */
export const IS_ANDROID = (/Android/i).test(uAD ? uAD.platform : USER_AGENT);

/**
 * Whether or not this is Mozilla Firefox.
 *
 * @static
 * @const
 * @type {Boolean}
 */
export const IS_FIREFOX = uAD ?
  // Firefox does not yet support uAD, don't know how their string will look
  uAD.brands.find(b => (/Firefox/i).test(b.brand)) ? true : false :
  (/Firefox/i).test(USER_AGENT);

/**
 * Whether or not this is Microsoft Edge.
 *
 * @static
 * @const
 * @type {Boolean}
 */
export const IS_EDGE = uAD ?
  uAD.brands.find(b => b.brand === 'Microsoft Edge') ? true : false :
  (/Edg/i).test(USER_AGENT);

/**
 * Whether or not this is a Chromium browser that is not Edge.
 *
 * This will also be `true` for Chrome on iOS, which will have different support
 * as it is actually Safari under the hood.
 *
 * @static
 * @const
 * @type {Boolean}
 */
export const IS_CHROME = uAD ?
// This will not match Chromium
  !IS_EDGE && uAD.brands.find(b => b.brand === 'Chromium') ? true : false :
  !IS_EDGE && ((/Chrome/i).test(USER_AGENT) || (/CriOS/i).test(USER_AGENT));

/**
 * The detected Google Chrome version - or `null`.
 *
 * @static
 * @const
 * @type {number|null}
 */
export const CHROME_VERSION = (function() {
  if (uAD) {
    const chrome = uAD.brands.find(b => b.brand === 'Chromium');

    return chrome ? parseFloat(chrome) : null;
  }

  const match = USER_AGENT.match(/(Chrome|CriOS)\/(\d+)/);

  if (match && match[2]) {
    return parseFloat(match[2]);
  }
  return null;
}());

/**
 * Whether or not this is desktop Safari.
 *
 * @static
 * @const
 * @type {Boolean}
 */
export const IS_SAFARI = uAD ?
  // Safari does not yet support uAD, don't know how their string will look
  uAD.brands.find(b => (/Safari/i).test(b.brand)) ? true : false :
  (/Safari/i).test(USER_AGENT) && !IS_CHROME && !IS_ANDROID && !IS_EDGE;

/**
 * Whether or not this is a Windows machine.
 *
 * @static
 * @const
 * @type {Boolean}
 */
export const IS_WINDOWS = uAD ?
  // Check Windows string
  (/Windows/i).test(uAD.platform) :
  (/Windows/i).test(USER_AGENT);

/**
 * Whether or not this device is touch-enabled.
 *
 * @static
 * @const
 * @type {Boolean}
 */
export const TOUCH_ENABLED = Boolean(Dom.isReal() && (
  'ontouchstart' in window ||
  window.navigator.maxTouchPoints ||
  window.DocumentTouch && window.document instanceof window.DocumentTouch));

/**
 * Whether or not this device is an iPad.
 *
 * @static
 * @const
 * @type {Boolean}
 */
export const IS_IPAD = uAD ?
  (/iPad/i).test(uAD.platform) :
  (/iPad/i).test(USER_AGENT) ||
  (IS_SAFARI && TOUCH_ENABLED && !(/iPhone/i).test(USER_AGENT));

/**
 * Whether or not this device is an iPhone.
 *
 * @static
 * @const
 * @type {Boolean}
 */
// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
// to identify iPhones, we need to exclude iPads.
// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
export const IS_IPHONE = uAD ?
  (/iPhone/i).test(uAD.platform) :
  (/iPhone/i).test(USER_AGENT) && !IS_IPAD;

/**
 * Whether or not this is an iOS device.
 *
 * @static
 * @const
 * @type {Boolean}
 */
export const IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

/**
 * Whether or not this is any flavor of Safari - including iOS.
 *
 * @static
 * @const
 * @type {Boolean}
 */
export const IS_ANY_SAFARI = (IS_SAFARI || IS_IOS) && !IS_CHROME;
