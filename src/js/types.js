/**
 * @typedef {object} SourceObject
 * @property {string} src Source URL
 * @property {string} type Content-type
 * @property {boolean} [withCredentials] (VHS) use credentials for XHR requests
 * @property {boolean} [allowSeeksWithinUnsafeLiveWindow] (VHS) Allow a seek beyind duration - three segment durations of a live stream
 * @property {array} [customTagParsers] [VHS] Array of custom m3u8 tag parser objects
 * @property {array} [customTagMappers] [VHS] Array of custom m3u8 tag mapper objects
 * @property {boolean} [cacheEncryptionKeys] [VHS] Cache AES keys
 * @property {boolean} [useForcedSubtitles] [VHS] Display forced subtitles
 */

/**
 * @typedef {object} PlayerOptions
 * @property {string} [aspectRatio] An aspect ratio, e.g. '16:9'
 * @property {boolean} [audioOnlyMode] Whether to use audio only mode, where a reduced player UI is used
 * @property {boolean} [audioPosterMode] Whether to use audio poster mode, where the poster is shown throughout playback
 * @property {boolean|'play'|'muted'|'any'} [autoplay] Autoplay mode
 * @property {Object.<string, number>|boolean} [breakpoints] Whether to use standard breakpoints, or an array of classes and sizes
 * @property {boolean} [controls] Whether to show player controls
 * @property {string|null|undefined} [crossOrigin] Value to set crossorigin attribute ontech and poster
 * @property {boolean} [debug] Whether to enable debug logging to console
 * @property {boolean} [disablePictureInPicture] Whether to disable the video element's picture-in-picture mode on supported browsers
 * @property {boolean} [enableSourceSet] Enables the `sourceset` event
 * @property {boolean} [fluid] Enables fluid mode
 * @property {object} [fullscreen] Fullscreen enabled
 * @property {object} [fullscreen.options] Fullscreen options
 * @property {'hide'|'auto'|'none'} [fullscreen.options.navigationUI] Fullscreen navigation UI
 * @property {number} [height] Player height
 * @property {object} [html5] HTML5 tech options
 * @property {boolean} [html5.nativeControlsForTouch] can be set to true to force native controls for touch devices.
 * @property {boolean} [html5.nativeAudioTracks] Can be set to false to disable native audio track support.
 * @property {boolean} [html5.nativeTextTracks] Can be set to false to force emulation of text tracks instead of native support
 * @property {boolean} [html5.nativeVideoTracks] Can be set to false to disable native video track support.
 * @property {boolean} [html5.preloadTextTracks] Can be set to false to delay loading of non-active text tracks until use
 * @property {object} [html5.vhs] HTTP-Streaming options
 * @property {number} [inactivityTimeout] Milliseconds until the user is considered inactive
 * @property {string} [language] IETF language tag representing language to use forcontrols if available
 * @property {Object.<string, Object.<string, string>>} [languages] Traslations to add to the player
 * @property {object} [liveTracker] Options for liveTracker component
 * @property {number} [liveTracker.liveTolerance] How close to the live edge to consider live
 * @property {number} [liveTracker.trackingThreshold] Threshold in seconds for whether to show the live ui
 * @property {boolean} [liveui] Whether to use the "new" live ui
 * @property {boolean} [loop] Whether to loop
 * @property {boolean} [muted] Whether the player is muted
 * @property {boolean} [nativeControlsForTouch] Whether browser's controls will be usedon mobile
 * @property {boolean} [normalizeAutoplay] Whether to treat autoplay set to `true` as Video.js's `'play'`
 * @property {string} [notSupportedMessage] Error message text when no supported sourceis found
 * @property {boolean} [noUITitleAttributes] Whether ClickableComponents have title attributes for mouseover text
 * @property {string} [poster] URI of a poster image
 * @property {boolean} [playsinline] Whether to set the video el playsinine attribute
 * @property {Object.<string, *>} [plugins] Plugins to intitialise and their options
 * @property {boolean} [preferFullWindow] On browsers that do not support the fullscreenAPI but which do support fullscreen on the video element (iOS), whether to use a fullwindow mode instead of fullscreen
 * @property {'auto'|'metadata'|'none'} [preload] Preload option
 * @property {number[]} [playbackRates] Playback rates to make available
 * @property {boolean} [responsive] Whether to add classes at breakpoints
 * @property {boolean} [sourceOrder] Whether to base source slection on the orderof sources, rather than by the order of techs
 * // If this were importing from separate files it would also work but be much more verbose
 * // {string|import('./tech/tech'.SourceObject)|Array<string|import('./tech/tech'.SourceObject>}
 * @property {string|SourceObject|Array<string|SourceObject>} [sources] Source or sources to load
 * @property {boolean} [suppressNotSupportedError] Whether to delay displaying an errorwhen no source is available until after a play attempt.
 * @property {boolean} [techCanOverridePoster] Whether the tech changing poster changesthe posterImage component
 * @property {string[]} [techOrder] Array of techs to use in order of preference
 * @property {object} [userActions] User actions settings
 * @property {boolean|function} [userActions.click] Whether to use the standard handler, or a custom function
 * @property {boolean|function} [userActions.doubleClick] Whether to use the standard handler, or a custom function
 * @property {boolean|object} [userActions.hotkeys] Whether hotkeys are enabled; or customized
 * @property {function} [userActions.hotkeys.fullscreenKey] Function to determine fullscreen key
 * @property {function} [userActions.hotkeys.muteKey] Function to determine mute key
 * @property {function} [userActions.hotkeys.playPauseKey] Function to determine play toggle key
 * @property {string} [vtt.js] URL to vtt.js, used with novtt build of Video.js
 * @property {number} [width] Player width
 * // Inherited from Component
 * // Apparently there's no way to extend types, `@ typedef {OneThing & AnotherThing} SomethingElse` is supposed to work, but
 * // jsodc breaks and typescript keeps it as a literal "OneThing & AnotherThing" and doesn't resolve to a combined definition
 * // We'd have to write each out in full, which might be a bit more manageable in a single file approach
 * @property {object} [children] Child components
 * @property {string} [className] A class or space separated list of classes to add the component
 * @property {String} [id] id for the component element
 * @property {string} [name] name of the component
 * @property {Element} [el] The component's element
 * @property {boolean} [createEl] Whether to create an elemeent if none is provided
 * @property {boolean} [evented] Whether the component has event listeners
 * @property {boolean} [initChildren] Whether to initialize child components
 * @property {boolean} [reportTouchActivity] Whether to set up listeners for touch events where supported
 * @property {boolean|Element} [restoreEl] If Boolean, whether to replace a disposed player with a copy of the original el. Or an element to use as the replacement.
 */

export {};
