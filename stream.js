! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : e.Plyr = t()
}(this, function () {
    "use strict";
    var e, t, i = {
            html5: "html5",
            youtube: "youtube",
            vimeo: "vimeo"
        },
        n = {
            audio: "audio",
            video: "video"
        },
        s = {
            enabled: !0,
            title: "",
            debug: !1,
            autoplay: !1,
            autopause: !0,
            seekTime: 10,
            volume: 1,
            muted: !1,
            duration: null,
            displayDuration: !0,
            invertTime: !0,
            toggleInvert: !0,
            ratio: "16:9",
            clickToPlay: !0,
            hideControls: !0,
            showPosterOnEnd: !1,
            disableContextMenu: !0,
            loadSprite: !0,
            iconPrefix: "plyr",
            iconUrl: "https://cdn.plyr.io/3.0.0-beta.11/plyr.svg",
            blankVideo: "https://cdn.plyr.io/static/blank.mp4",
            quality: {
                default: "default",
                options: ["hd2160", "hd1440", "hd1080", "hd720", "large", "medium", "small", "tiny", "default"]
            },
            loop: {
                active: !1
            },
            speed: {
                selected: 1,
                options: [.5, .75, 1, 1.25, 1.5, 1.75, 2]
            },
            keyboard: {
                focused: !0,
                global: !1
            },
            tooltips: {
                controls: !1,
                seek: !0
            },
            captions: {
                active: !1,
                language: window.navigator.language.split("-")[0]
            },
            fullscreen: {
                enabled: !0,
                fallback: !0
            },
            storage: {
                enabled: !0,
                key: "plyr"
            },
            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
            settings: ["captions", "quality", "speed"],
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime} secs",
                play: "Play",
                pause: "Pause",
                forward: "Forward {seektime} secs",
                seek: "Seek",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                mute: "Mute",
                unmute: "Unmute",
                enableCaptions: "Enable captions",
                disableCaptions: "Disable captions",
                enterFullscreen: "Enter fullscreen",
                exitFullscreen: "Exit fullscreen",
                frameTitle: "Player for {title}",
                captions: "Captions",
                settings: "Settings",
                speed: "Speed",
                quality: "Quality",
                loop: "Loop",
                start: "Start",
                end: "End",
                all: "All",
                reset: "Reset",
                none: "None",
                disabled: "Disabled",
                advertisment: "Ad"
            },
            urls: {
                vimeo: {
                    api: "https://player.vimeo.com/api/player.js"
                },
                youtube: {
                    api: "https://www.youtube.com/iframe_api"
                },
                googleIMA: {
                    api: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                }
            },
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                forward: null,
                mute: null,
                volume: null,
                captions: null,
                fullscreen: null,
                pip: null,
                airplay: null,
                speed: null,
                quality: null,
                loop: null,
                language: null
            },
            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "qualityrequested", "adsloaded", "adscontentpause", "adsconentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
            selectors: {
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: {
                    container: null,
                    wrapper: ".plyr__controls"
                },
                labels: "[data-plyr]",
                buttons: {
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    forward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    fullscreen: '[data-plyr="fullscreen"]',
                    pip: '[data-plyr="pip"]',
                    airplay: '[data-plyr="airplay"]',
                    settings: '[data-plyr="settings"]',
                    loop: '[data-plyr="loop"]'
                },
                inputs: {
                    seek: '[data-plyr="seek"]',
                    volume: '[data-plyr="volume"]',
                    speed: '[data-plyr="speed"]',
                    language: '[data-plyr="language"]',
                    quality: '[data-plyr="quality"]'
                },
                display: {
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration",
                    buffer: ".plyr__progress--buffer",
                    played: ".plyr__progress--played",
                    loop: ".plyr__progress--loop",
                    volume: ".plyr__volume--display"
                },
                progress: ".plyr__progress",
                captions: ".plyr__captions",
                menu: {
                    quality: ".js-plyr__menu__list--quality"
                }
            },
            classNames: {
                video: "plyr__video-wrapper",
                embed: "plyr__video-embed",
                ads: "plyr__ads",
                control: "plyr__control",
                type: "plyr--{0}",
                provider: "plyr--{0}",
                stopped: "plyr--stopped",
                playing: "plyr--playing",
                loading: "plyr--loading",
                error: "plyr--has-error",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                cues: "plyr__cues",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                uiSupported: "plyr--full-ui",
                noTransition: "plyr--no-transition",
                menu: {
                    value: "plyr__menu__value",
                    badge: "plyr__badge",
                    open: "plyr--menu-open"
                },
                captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active"
                },
                fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    fallback: "plyr--fullscreen-fallback"
                },
                pip: {
                    supported: "plyr--pip-supported",
                    active: "plyr--pip-active"
                },
                airplay: {
                    supported: "plyr--airplay-supported",
                    active: "plyr--airplay-active"
                },
                tabFocus: "plyr__tab-focus"
            },
            attributes: {
                embed: {
                    provider: "data-plyr-provider",
                    id: "data-plyr-embed-id"
                }
            },
            keys: {
                google: null
            },
            ads: {
                enabled: !1
            }
        },
        a = (function () {
            function e(e) {
                this.value = e
            }

            function t(t) {
                var i, n;

                function s(i, n) {
                    try {
                        var o = t[i](n),
                            l = o.value;
                        l instanceof e ? Promise.resolve(l.value).then(function (e) {
                            s("next", e)
                        }, function (e) {
                            s("throw", e)
                        }) : a(o.done ? "return" : "normal", o.value)
                    } catch (e) {
                        a("throw", e)
                    }
                }

                function a(e, t) {
                    switch (e) {
                        case "return":
                            i.resolve({
                                value: t,
                                done: !0
                            });
                            break;
                        case "throw":
                            i.reject(t);
                            break;
                        default:
                            i.resolve({
                                value: t,
                                done: !1
                            })
                    }(i = i.next) ? s(i.key, i.arg): n = null
                }
                this._invoke = function (e, t) {
                    return new Promise(function (a, o) {
                        var l = {
                            key: e,
                            arg: t,
                            resolve: a,
                            reject: o,
                            next: null
                        };
                        n ? n = n.next = l : (i = n = l, s(e, t))
                    })
                }, "function" != typeof t.return && (this.return = void 0)
            }
            "function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = function () {
                return this
            }), t.prototype.next = function (e) {
                return this._invoke("next", e)
            }, t.prototype.throw = function (e) {
                return this._invoke("throw", e)
            }, t.prototype.return = function (e) {
                return this._invoke("return", e)
            }
        }(), function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }),
        o = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(),
        l = function (e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        },
        r = function () {
            return function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function (e, t) {
                    var i = [],
                        n = !0,
                        s = !1,
                        a = void 0;
                    try {
                        for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done) && (i.push(o.value), !t || i.length !== t); n = !0);
                    } catch (e) {
                        s = !0, a = e
                    } finally {
                        try {
                            !n && l.return && l.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                    return i
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        c = {
            is: {
                plyr: function (e) {
                    return this.instanceof(e, window.Plyr)
                },
                object: function (e) {
                    return this.getConstructor(e) === Object
                },
                number: function (e) {
                    return this.getConstructor(e) === Number && !Number.isNaN(e)
                },
                string: function (e) {
                    return this.getConstructor(e) === String
                },
                boolean: function (e) {
                    return this.getConstructor(e) === Boolean
                },
                function: function (e) {
                    return this.getConstructor(e) === Function
                },
                array: function (e) {
                    return !this.nullOrUndefined(e) && Array.isArray(e)
                },
                weakMap: function (e) {
                    return this.instanceof(e, window.WeakMap)
                },
                nodeList: function (e) {
                    return this.instanceof(e, window.NodeList)
                },
                element: function (e) {
                    return this.instanceof(e, window.Element)
                },
                textNode: function (e) {
                    return this.getConstructor(e) === Text
                },
                event: function (e) {
                    return this.instanceof(e, window.Event)
                },
                cue: function (e) {
                    return this.instanceof(e, window.TextTrackCue) || this.instanceof(e, window.VTTCue)
                },
                track: function (e) {
                    return this.instanceof(e, TextTrack) || !this.nullOrUndefined(e) && this.string(e.kind)
                },
                url: function (e) {
                    return !this.nullOrUndefined(e) && /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(e)
                },
                nullOrUndefined: function (e) {
                    return null === e || void 0 === e
                },
                empty: function (e) {
                    return this.nullOrUndefined(e) || (this.string(e) || this.array(e) || this.nodeList(e)) && !e.length || this.object(e) && !Object.keys(e).length
                },
                instanceof: function (e, t) {
                    return Boolean(e && t && e instanceof t)
                },
                getConstructor: function (e) {
                    return this.nullOrUndefined(e) ? null : e.constructor
                }
            },
            getBrowser: function () {
                return {
                    isIE: !!document.documentMode,
                    isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
                    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
                    isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
                }
            },
            fetch: function (e) {
                return new Promise(function (t, i) {
                    try {
                        var n = new XMLHttpRequest;
                        if (!("withCredentials" in n)) return;
                        n.addEventListener("load", function () {
                            try {
                                t(JSON.parse(n.responseText))
                            } catch (e) {
                                t(n.responseText)
                            }
                        }), n.addEventListener("error", function () {
                            throw new Error(n.statusText)
                        }), n.open("GET", e, !0), n.send()
                    } catch (e) {
                        i(e)
                    }
                })
            },
            loadScript: function (e, t, i) {
                var n = document.querySelector('script[src="' + e + '"]');
                if (null !== n) return n.callbacks = n.callbacks || [], void n.callbacks.push(t);
                var s = document.createElement("script");
                s.callbacks = s.callbacks || [], s.callbacks.push(t), s.errors = s.errors || [], s.errors.push(i), c.is.function(t) && s.addEventListener("load", function (e) {
                    s.callbacks.forEach(function (t) {
                        return t.call(null, e)
                    }), s.callbacks = null
                }, !1), s.addEventListener("error", function (e) {
                    s.errors.forEach(function (t) {
                        return t.call(null, e)
                    }), s.errors = null
                }, !1), s.src = e;
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(s, a)
            },
            loadSprite: function (e, t) {
                if (c.is.string(e)) {
                    var i = c.is.string(t);
                    if (!i || !document.querySelectorAll("#" + t).length) {
                        var n = document.createElement("div");
                        if (c.toggleHidden(n, !0), i && n.setAttribute("id", t), u.storage) {
                            var s = window.localStorage.getItem("cache-" + t);
                            if (null !== s) {
                                var a = JSON.parse(s);
                                return void o.call(n, a.content)
                            }
                        }
                        c.fetch(e).then(function (e) {
                            c.is.empty(e) || (u.storage && window.localStorage.setItem("cache-" + t, JSON.stringify({
                                content: e
                            })), o.call(n, e))
                        }).catch(function () {})
                    }
                }

                function o(e) {
                    this.innerHTML = e, document.body.insertBefore(this, document.body.childNodes[0])
                }
            },
            generateId: function (e) {
                return e + "-" + Math.floor(1e4 * Math.random())
            },
            inFrame: function () {
                try {
                    return window.self !== window.top
                } catch (e) {
                    return !0
                }
            },
            wrap: function (e, t) {
                var i = e.length ? e : [e];
                Array.from(i).reverse().forEach(function (e, i) {
                    var n = i > 0 ? t.cloneNode(!0) : t,
                        s = e.parentNode,
                        a = e.nextSibling;
                    n.appendChild(e), a ? s.insertBefore(n, a) : s.appendChild(n)
                })
            },
            createElement: function (e, t, i) {
                var n = document.createElement(e);
                return c.is.object(t) && c.setAttributes(n, t), c.is.string(i) && (n.textContent = i), n
            },
            insertAfter: function (e, t) {
                t.parentNode.insertBefore(e, t.nextSibling)
            },
            insertElement: function (e, t, i, n) {
                t.appendChild(c.createElement(e, i, n))
            },
            removeElement: function (e) {
                return c.is.element(e) && c.is.element(e.parentNode) ? (e.parentNode.removeChild(e), e) : null
            },
            emptyElement: function (e) {
                for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
            },
            replaceElement: function (e, t) {
                return c.is.element(t) && c.is.element(t.parentNode) && c.is.element(e) ? (t.parentNode.replaceChild(e, t), e) : null
            },
            setAttributes: function (e, t) {
                c.is.element(e) && !c.is.empty(t) && Object.keys(t).forEach(function (i) {
                    e.setAttribute(i, t[i])
                })
            },
            getAttributesFromSelector: function (e, t) {
                if (!c.is.string(e) || c.is.empty(e)) return {};
                var i = {},
                    n = t;
                return e.split(",").forEach(function (e) {
                    var t = e.trim(),
                        s = t.replace(".", ""),
                        a = t.replace(/[[\]]/g, "").split("="),
                        o = a[0],
                        l = a.length > 1 ? a[1].replace(/["']/g, "") : "";
                    switch (t.charAt(0)) {
                        case ".":
                            c.is.object(n) && c.is.string(n.class) && (n.class += " " + s), i.class = s;
                            break;
                        case "#":
                            i.id = t.replace("#", "");
                            break;
                        case "[":
                            i[o] = l
                    }
                }), i
            },
            toggleClass: function (e, t, i) {
                if (c.is.element(e)) {
                    var n = e.classList.contains(t);
                    return e.classList[i ? "add" : "remove"](t), i && !n || !i && n
                }
                return null
            },
            hasClass: function (e, t) {
                return c.is.element(e) && e.classList.contains(t)
            },
            toggleHidden: function (e, t) {
                c.is.element(e) && (t ? e.setAttribute("hidden", "") : e.removeAttribute("hidden"))
            },
            matches: function (e, t) {
                var i = {
                    Element: Element
                };
                var n = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function () {
                    return Array.from(document.querySelectorAll(t)).includes(this)
                };
                return n.call(e, t)
            },
            getElements: function (e) {
                return this.elements.container.querySelectorAll(e)
            },
            getElement: function (e) {
                return this.elements.container.querySelector(e)
            },
            findElements: function () {
                try {
                    return this.elements.controls = c.getElement.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                        play: c.getElements.call(this, this.config.selectors.buttons.play),
                        pause: c.getElement.call(this, this.config.selectors.buttons.pause),
                        restart: c.getElement.call(this, this.config.selectors.buttons.restart),
                        rewind: c.getElement.call(this, this.config.selectors.buttons.rewind),
                        forward: c.getElement.call(this, this.config.selectors.buttons.forward),
                        mute: c.getElement.call(this, this.config.selectors.buttons.mute),
                        pip: c.getElement.call(this, this.config.selectors.buttons.pip),
                        airplay: c.getElement.call(this, this.config.selectors.buttons.airplay),
                        settings: c.getElement.call(this, this.config.selectors.buttons.settings),
                        captions: c.getElement.call(this, this.config.selectors.buttons.captions),
                        fullscreen: c.getElement.call(this, this.config.selectors.buttons.fullscreen)
                    }, this.elements.progress = c.getElement.call(this, this.config.selectors.progress), this.elements.inputs = {
                        seek: c.getElement.call(this, this.config.selectors.inputs.seek),
                        volume: c.getElement.call(this, this.config.selectors.inputs.volume)
                    }, this.elements.display = {
                        buffer: c.getElement.call(this, this.config.selectors.display.buffer),
                        duration: c.getElement.call(this, this.config.selectors.display.duration),
                        currentTime: c.getElement.call(this, this.config.selectors.display.currentTime)
                    }, c.is.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), !0
                } catch (e) {
                    return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
                }
            },
            getFocusElement: function () {
                var e = document.activeElement;
                return e = e && e !== document.body ? document.querySelector(":focus") : null
            },
            trapFocus: function () {
                var e = this,
                    t = c.getElements.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
                    i = t[0],
                    n = t[t.length - 1];
                c.on(this.elements.container, "keydown", function (t) {
                    if ("Tab" === t.key && 9 === t.keyCode && e.fullscreen.active) {
                        var s = c.getFocusElement();
                        s !== n || t.shiftKey ? s === i && t.shiftKey && (n.focus(), t.preventDefault()) : (i.focus(), t.preventDefault())
                    }
                }, !1)
            },
            toggleListener: function (e, t, i, n, s, a) {
                if (!c.is.nullOrUndefined(e))
                    if (c.is.nodeList(e)) Array.from(e).forEach(function (e) {
                        e instanceof Node && c.toggleListener.call(null, e, t, i, n, s, a)
                    });
                    else {
                        var o = t.split(" "),
                            l = !!c.is.boolean(a) && a;
                        u.passiveListeners && (l = {
                            passive: !c.is.boolean(s) || s,
                            capture: !!c.is.boolean(a) && a
                        }), o.forEach(function (t) {
                            e[n ? "addEventListener" : "removeEventListener"](t, i, l)
                        })
                    }
            },
            on: function (e, t, i, n, s) {
                c.toggleListener(e, t, i, !0, n, s)
            },
            off: function (e, t, i, n, s) {
                c.toggleListener(e, t, i, !1, n, s)
            },
            dispatchEvent: function (e, t, i, n) {
                if (e && t) {
                    var s = new CustomEvent(t, {
                        bubbles: !!c.is.boolean(i) && i,
                        detail: Object.assign({}, n, {
                            plyr: c.is.plyr(this) ? this : null
                        })
                    });
                    e.dispatchEvent(s)
                }
            },
            toggleState: function (e, t) {
                if (c.is.element(e)) {
                    var i = "true" === e.getAttribute("aria-pressed"),
                        n = c.is.boolean(t) ? t : !i;
                    e.setAttribute("aria-pressed", n)
                }
            },
            getPercentage: function (e, t) {
                return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2)
            },
            getHours: function (e) {
                return parseInt(e / 60 / 60 % 60, 10)
            },
            getMinutes: function (e) {
                return parseInt(e / 60 % 60, 10)
            },
            getSeconds: function (e) {
                return parseInt(e % 60, 10)
            },
            formatTime: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!c.is.number(e)) return this.formatTime(null, t, i);
                var n = function (e) {
                        return ("0" + e).slice(-2)
                    },
                    s = this.getHours(e),
                    a = this.getMinutes(e),
                    o = this.getSeconds(e);
                return t || s > 0 ? s += ":" : s = "", (i ? "-" : "") + s + n(a) + ":" + n(o)
            },
            extend: function () {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                if (!i.length) return e;
                var s = i.shift();
                return c.is.object(s) ? (Object.keys(s).forEach(function (t) {
                    c.is.object(s[t]) ? (Object.keys(e).includes(t) || Object.assign(e, l({}, t, {})), c.extend(e[t], s[t])) : Object.assign(e, l({}, t, s[t]))
                }), c.extend.apply(c, [e].concat(function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                        return i
                    }
                    return Array.from(e)
                }(i)))) : e
            },
            getProviderByUrl: function (e) {
                return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? i.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{8,}(?=\b|\/)/.test(e) ? i.vimeo : null
            },
            parseYouTubeId: function (e) {
                if (c.is.empty(e)) return null;
                return e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e
            },
            parseVimeoId: function (e) {
                if (c.is.empty(e)) return null;
                if (c.is.number(Number(e))) return e;
                return e.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e
            },
            parseUrl: function (e) {
                var t = document.createElement("a");
                return t.href = e, t
            },
            getUrlParams: function (e) {
                var t = e;
                (e.startsWith("http://") || e.startsWith("https://")) && (t = this.parseUrl(e).search);
                return this.is.empty(t) ? null : t.slice(t.indexOf("?") + 1).split("&").reduce(function (e, t) {
                    var i = t.split("="),
                        n = r(i, 2),
                        s = n[0],
                        a = n[1];
                    return Object.assign(e, l({}, s, decodeURIComponent(a)))
                }, {})
            },
            buildUrlParams: function (e) {
                return c.is.object(e) ? Object.keys(e).map(function (t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                }).join("&") : ""
            },
            stripHTML: function (e) {
                var t = document.createDocumentFragment(),
                    i = document.createElement("div");
                return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText
            },
            getAspectRatio: function (e, t) {
                var i = function e(t, i) {
                    return 0 === i ? t : e(i, t % i)
                }(e, t);
                return e / i + ":" + t / i
            },
            get transitionEndEvent() {
                var e = document.createElement("span"),
                    t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    },
                    i = Object.keys(t).find(function (t) {
                        return void 0 !== e.style[t]
                    });
                return !!c.is.string(i) && t[i]
            },
            repaint: function (e) {
                window.setTimeout(function () {
                    c.toggleHidden(e, !0), e.offsetHeight, c.toggleHidden(e, !1)
                }, 0)
            }
        },
        u = {
            audio: "canPlayType" in document.createElement("audio"),
            video: "canPlayType" in document.createElement("video"),
            check: function (e, t, i) {
                var n = !1,
                    s = !1,
                    a = c.getBrowser(),
                    o = a.isIPhone && i && u.inline;
                switch (t + ":" + e) {
                    case "html5:video":
                        s = (n = u.video) && u.rangeInput && (!a.isIPhone || o);
                        break;
                    case "html5:audio":
                        s = (n = u.audio) && u.rangeInput;
                        break;
                    case "youtube:video":
                        n = !0, s = u.rangeInput && (!a.isIPhone || o);
                        break;
                    case "vimeo:video":
                        n = !0, s = u.rangeInput && !a.isIPhone;
                        break;
                    default:
                        s = (n = u.audio && u.video) && u.rangeInput
                }
                return {
                    api: n,
                    ui: s
                }
            },
            pip: !c.getBrowser().isIPhone && c.is.function(c.createElement("video").webkitSetPresentationMode),
            airplay: c.is.function(window.WebKitPlaybackTargetAvailabilityEvent),
            inline: "playsInline" in document.createElement("video"),
            mime: function (e) {
                var t = this.media;
                try {
                    if (!this.isHTML5 || !c.is.function(t.canPlayType)) return !1;
                    if (this.isVideo) switch (e) {
                        case "video/webm":
                            return t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, "");
                        case "video/mp4":
                            return t.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, "");
                        case "video/ogg":
                            return t.canPlayType('video/ogg; codecs="theora"').replace(/no/, "");
                        default:
                            return !1
                    } else if (this.isAudio) switch (e) {
                        case "audio/mpeg":
                            return t.canPlayType("audio/mpeg;").replace(/no/, "");
                        case "audio/ogg":
                            return t.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, "");
                        case "audio/wav":
                            return t.canPlayType('audio/wav; codecs="1"').replace(/no/, "");
                        default:
                            return !1
                    }
                } catch (e) {
                    return !1
                }
                return !1
            },
            textTracks: "textTracks" in document.createElement("video"),
            passiveListeners: function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            return e = !0, null
                        }
                    });
                    window.addEventListener("test", null, t)
                } catch (e) {}
                return e
            }(),
            rangeInput: (e = document.createElement("input"), e.type = "range", "range" === e.type),
            touch: "ontouchstart" in document.documentElement,
            transitions: !1 !== c.transitionEndEvent,
            reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        },
        d = function () {},
        h = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                a(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
            }
            return o(e, [{
                key: "log",
                get: function () {
                    return this.enabled ? Function.prototype.bind.call(console.log, console) : d
                }
            }, {
                key: "warn",
                get: function () {
                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : d
                }
            }, {
                key: "error",
                get: function () {
                    return this.enabled ? Function.prototype.bind.call(console.error, console) : d
                }
            }]), e
        }(),
        p = function () {
            function e(t) {
                a(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
            }
            return o(e, [{
                key: "get",
                value: function (t) {
                    var i = window.localStorage.getItem(this.key);
                    if (!e.supported || c.is.empty(i)) return null;
                    var n = JSON.parse(i);
                    return c.is.string(t) && t.length ? n[t] : n
                }
            }, {
                key: "set",
                value: function (t) {
                    if (e.supported && this.enabled && c.is.object(t)) {
                        var i = this.get();
                        c.is.empty(i) && (i = {}), c.extend(i, t), window.localStorage.setItem(this.key, JSON.stringify(i))
                    }
                }
            }], [{
                key: "supported",
                get: function () {
                    if (!("localStorage" in window)) return !1;
                    try {
                        return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0
                    } catch (e) {
                        return !1
                    }
                }
            }]), e
        }(),
        m = function () {
            function e(t) {
                var i = this;
                a(this, e), this.player = t, this.enabled = t.config.ads.enabled, this.playing = !1, this.initialized = !1, this.blocked = !1, this.enabled = c.is.url(t.config.ads.tag), this.enabled && (c.is.object(window.google) ? this.ready() : c.loadScript(t.config.urls.googleIMA.api, function () {
                    i.ready()
                }, function () {
                    i.blocked = !0, i.player.debug.log("Ads error: Google IMA SDK failed to load")
                }))
            }
            return o(e, [{
                key: "ready",
                value: function () {
                    var e = this;
                    this.elements = {
                        container: null,
                        displayContainer: null
                    }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.listeners(), this.startSafetyTimer(12e3, "ready()"), this.loaderPromise = new Promise(function (t) {
                        e.on("ADS_LOADER_LOADED", function () {
                            return t()
                        })
                    }), this.managerPromise = new Promise(function (t) {
                        e.on("ADS_MANAGER_LOADED", function () {
                            return t()
                        })
                    }), this.managerPromise.then(function () {
                        e.clearSafetyTimer("onAdsManagerLoaded()")
                    }), this.setupIMA()
                }
            }, {
                key: "setupIMA",
                value: function () {
                    this.elements.container = c.createElement("div", {
                        class: this.player.config.classNames.ads,
                        hidden: ""
                    }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds()
                }
            }, {
                key: "requestAds",
                value: function () {
                    var e = this,
                        t = this.player.elements.container;
                    try {
                        this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (t) {
                            return e.onAdsManagerLoaded(t)
                        }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (t) {
                            return e.onAdError(t)
                        }, !1);
                        var i = new google.ima.AdsRequest;
                        i.adTagUrl = "https://go.aniview.com/api/adserver6/vast/?" + c.buildUrlParams({
                            AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                            AV_CHANNELID: "5a0458dc28a06145e4519d21",
                            AV_URL: "127.0.0.1:3000",
                            cb: 1,
                            AV_WIDTH: 640,
                            AV_HEIGHT: 480
                        }), i.linearAdSlotWidth = t.offsetWidth, i.linearAdSlotHeight = t.offsetHeight, i.nonLinearAdSlotWidth = t.offsetWidth, i.nonLinearAdSlotHeight = t.offsetHeight, i.forceNonLinearFullSlot = !1, this.loader.requestAds(i), this.handleEventListeners("ADS_LOADER_LOADED")
                    } catch (e) {
                        this.onAdError(e)
                    }
                }
            }, {
                key: "pollCountdown",
                value: function () {
                    var e = this;
                    if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return window.clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                    this.countdownTimer = window.setInterval(function () {
                        var t = c.formatTime(e.manager.getRemainingTime()),
                            i = e.player.config.i18n.advertisment + " - " + t;
                        e.elements.container.setAttribute("data-badge-text", i)
                    }, 100)
                }
            }, {
                key: "onAdsManagerLoaded",
                value: function (e) {
                    var t = this,
                        i = new google.ima.AdsRenderingSettings;
                    i.restoreCustomPlaybackStateOnAdBreakComplete = !0, i.enablePreloading = !0, this.manager = e.getAdsManager(this.player, i), this.cuePoints = this.manager.getCuePoints(), this.cuePoints.forEach(function (e) {
                        if (0 !== e && -1 !== e) {
                            var i = t.player.elements.progress;
                            if (i) {
                                var n = 100 / t.player.duration * e,
                                    s = c.createElement("span", {
                                        class: t.player.config.classNames.cues
                                    });
                                s.style.left = n.toString() + "%", i.appendChild(s)
                            }
                        }
                    }), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
                        return t.onAdError(e)
                    }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
                        t.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
                            return t.onAdEvent(e)
                        })
                    }), this.handleEventListeners("ADS_MANAGER_LOADED")
                }
            }, {
                key: "onAdEvent",
                value: function (e) {
                    var t = this,
                        i = this.player.elements.container,
                        n = e.getAd(),
                        s = function (e) {
                            c.dispatchEvent.call(t.player, t.player.media, "ads" + e)
                        };
                    switch (e.type) {
                        case google.ima.AdEvent.Type.LOADED:
                            this.handleEventListeners("LOADED"), s("loaded"), this.pollCountdown(!0), n.isLinear() || (n.width = i.offsetWidth, n.height = i.offsetHeight);
                            break;
                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                            this.handleEventListeners("ALL_ADS_COMPLETED"), s("allcomplete"), this.loadAds();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                            this.handleEventListeners("CONTENT_PAUSE_REQUESTED"), s("contentpause"), this.pauseContent();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                            this.handleEventListeners("CONTENT_RESUME_REQUESTED"), s("contentresume"), this.pollCountdown(), this.resumeContent();
                            break;
                        case google.ima.AdEvent.Type.STARTED:
                            s("started");
                            break;
                        case google.ima.AdEvent.Type.MIDPOINT:
                            s("midpoint");
                            break;
                        case google.ima.AdEvent.Type.COMPLETE:
                            s("complete");
                            break;
                        case google.ima.AdEvent.Type.IMPRESSION:
                            s("impression");
                            break;
                        case google.ima.AdEvent.Type.CLICK:
                            s("click")
                    }
                }
            }, {
                key: "onAdError",
                value: function (e) {
                    this.cancel(), this.player.debug.log("Ads error", e)
                }
            }, {
                key: "listeners",
                value: function () {
                    var e = this,
                        t = this.player.elements.container,
                        i = void 0;
                    this.player.on("ended", function () {
                        e.loader.contentComplete()
                    }), this.player.on("seeking", function () {
                        return i = e.player.currentTime
                    }), this.player.on("seeked", function () {
                        var t = e.player.currentTime;
                        e.cuePoints.forEach(function (n, s) {
                            i < n && n < t && (e.manager.discardAdBreak(), e.cuePoints.splice(s, 1))
                        })
                    }), window.addEventListener("resize", function () {
                        e.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
                    })
                }
            }, {
                key: "play",
                value: function () {
                    var e = this,
                        t = this.player.elements.container;
                    this.managerPromise && this.managerPromise.then(function () {
                        e.elements.displayContainer.initialize();
                        try {
                            e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
                        } catch (t) {
                            e.onAdError(t)
                        }
                    })
                }
            }, {
                key: "resumeContent",
                value: function () {
                    c.toggleHidden(this.elements.container, !0), this.playing = !1, this.player.currentTime < this.player.duration && this.player.play()
                }
            }, {
                key: "pauseContent",
                value: function () {
                    c.toggleHidden(this.elements.container, !1), this.playing = !0, this.player.pause()
                }
            }, {
                key: "cancel",
                value: function () {
                    this.initialized && this.resumeContent(), this.handleEventListeners("ERROR"), this.loadAds()
                }
            }, {
                key: "loadAds",
                value: function () {
                    var e = this;
                    this.managerPromise.then(function () {
                        e.manager && e.manager.destroy(), e.managerPromise = new Promise(function (t) {
                            e.on("ADS_MANAGER_LOADED", function () {
                                return t()
                            }), e.player.debug.log(e.manager)
                        }), e.requestAds()
                    })
                }
            }, {
                key: "handleEventListeners",
                value: function (e) {
                    c.is.function(this.events[e]) && this.events[e].call(this)
                }
            }, {
                key: "on",
                value: function (e, t) {
                    return this.events[e] = t, this
                }
            }, {
                key: "startSafetyTimer",
                value: function (e, t) {
                    var i = this;
                    this.player.debug.log("Safety timer invoked from: " + t), this.safetyTimer = window.setTimeout(function () {
                        i.cancel(), i.clearSafetyTimer("startSafetyTimer()")
                    }, e)
                }
            }, {
                key: "clearSafetyTimer",
                value: function (e) {
                    c.is.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                }
            }]), e
        }(),
        g = (t = !1, c.is.function(document.cancelFullScreen) ? t = "" : ["webkit", "o", "moz", "ms", "khtml"].some(function (e) {
            return c.is.function(document[e + "CancelFullScreen"]) ? (t = e, !0) : !(!c.is.function(document.msExitFullscreen) || !document.msFullscreenEnabled || (t = "ms", 0))
        }), t),
        f = {
            prefix: g,
            enabled: document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled,
            eventType: "ms" === g ? "MSFullscreenChange" : g + "fullscreenchange",
            isFullScreen: function (e) {
                if (!f.enabled) return !1;
                var t = c.is.nullOrUndefined(e) ? document.body : e;
                switch (g) {
                    case "":
                        return document.fullscreenElement === t;
                    case "moz":
                        return document.mozFullScreenElement === t;
                    default:
                        return document[g + "FullscreenElement"] === t
                }
            },
            requestFullScreen: function (e) {
                if (!f.enabled) return !1;
                var t = c.is.nullOrUndefined(e) ? document.body : e;
                return g.length ? t[g + ("ms" === g ? "RequestFullscreen" : "RequestFullScreen")]() : t.requestFullScreen()
            },
            cancelFullScreen: function () {
                return !!f.enabled && (g.length ? document[g + ("ms" === g ? "ExitFullscreen" : "CancelFullScreen")]() : document.cancelFullScreen())
            },
            element: function () {
                return f.enabled ? g.length ? document[g + "FullscreenElement"] : document.fullscreenElement : null
            },
            setup: function () {
                if (this.supported.ui && !this.isAudio && this.config.fullscreen.enabled) {
                    var e = f.enabled;
                    e || this.config.fullscreen.fallback && !c.inFrame() ? (this.debug.log((e ? "Native" : "Fallback") + " fullscreen enabled"), c.toggleClass(this.elements.container, this.config.classNames.fullscreen.enabled, !0)) : this.debug.log("Fullscreen not supported and fallback disabled"), this.elements.buttons && this.elements.buttons.fullscreen && c.toggleState(this.elements.buttons.fullscreen, !1), c.trapFocus.call(this)
                }
            }
        },
        y = c.getBrowser(),
        v = {
            global: function () {
                var e = this,
                    t = null,
                    i = function (i) {
                        var n = function (e) {
                                return e.keyCode ? e.keyCode : e.which
                            }(i),
                            s = "keydown" === i.type,
                            a = s && n === t;
                        if (!(i.altKey || i.ctrlKey || i.metaKey || i.shiftKey) && c.is.number(n)) {
                            if (s) {
                                var o = c.getFocusElement();
                                if (c.is.element(o) && c.matches(o, e.config.selectors.editable)) return;
                                switch ([48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67, 73, 76, 79].includes(n) && (i.preventDefault(), i.stopPropagation()), n) {
                                    case 48:
                                    case 49:
                                    case 50:
                                    case 51:
                                    case 52:
                                    case 53:
                                    case 54:
                                    case 55:
                                    case 56:
                                    case 57:
                                        a || (e.currentTime = e.duration / 10 * (n - 48));
                                        break;
                                    case 32:
                                    case 75:
                                        a || e.togglePlay();
                                        break;
                                    case 38:
                                        e.increaseVolume(.1);
                                        break;
                                    case 40:
                                        e.decreaseVolume(.1);
                                        break;
                                    case 77:
                                        a || (e.muted = !e.muted);
                                        break;
                                    case 39:
                                        e.forward();
                                        break;
                                    case 37:
                                        e.rewind();
                                        break;
                                    case 70:
                                        e.toggleFullscreen();
                                        break;
                                    case 67:
                                        a || e.toggleCaptions();
                                        break;
                                    case 76:
                                        e.loop = !e.loop
                                }!f.enabled && e.fullscreen.active && 27 === n && e.toggleFullscreen(), t = n
                            } else t = null
                        }
                    };
                this.config.keyboard.global ? c.on(window, "keydown keyup", i, !1) : this.config.keyboard.focused && c.on(this.elements.container, "keydown keyup", i, !1), c.on(this.elements.container, "focusout", function (t) {
                    c.toggleClass(t.target, e.config.classNames.tabFocus, !1)
                }), c.on(this.elements.container, "keydown", function (t) {
                    9 === t.keyCode && window.setTimeout(function () {
                        c.toggleClass(c.getFocusElement(), e.config.classNames.tabFocus, !0)
                    }, 0)
                }), this.config.hideControls && c.on(this.elements.container, "mouseenter mouseleave mousemove touchstart touchend touchmove enterfullscreen exitfullscreen", function (t) {
                    e.toggleControls(t)
                }), f.enabled && (c.on(document, f.eventType, function (t) {
                    e.toggleFullscreen(t)
                }), c.on(this.elements.container, "dblclick", function (t) {
                    e.toggleFullscreen(t)
                }))
            },
            media: function () {
                var e = this;
                if (c.on(this.media, "timeupdate seeking", function (t) {
                        return b.timeUpdate.call(e, t)
                    }), c.on(this.media, "durationchange loadedmetadata", function (t) {
                        return b.durationUpdate.call(e, t)
                    }), c.on(this.media, "loadeddata", function () {
                        c.toggleHidden(e.elements.volume, !e.hasAudio), c.toggleHidden(e.elements.buttons.mute, !e.hasAudio)
                    }), c.on(this.media, "ended", function () {
                        e.isHTML5 && e.isVideo && e.config.showPosterOnEnd && (e.restart(), e.media.load())
                    }), c.on(this.media, "progress playing", function (t) {
                        return b.updateProgress.call(e, t)
                    }), c.on(this.media, "volumechange", function (t) {
                        return b.updateVolume.call(e, t)
                    }), c.on(this.media, "playing play pause ended", function (t) {
                        return b.checkPlaying.call(e, t)
                    }), c.on(this.media, "stalled waiting canplay seeked playing", function (t) {
                        return b.checkLoading.call(e, t)
                    }), this.supported.ui && this.config.clickToPlay && !this.isAudio) {
                    var t = c.getElement.call(this, "." + this.config.classNames.video);
                    if (!c.is.element(t)) return;
                    c.on(t, "click", function () {
                        e.config.hideControls && u.touch && !e.paused || (e.paused ? e.play() : e.ended ? (e.restart(), e.play()) : e.pause())
                    })
                }
                this.supported.ui && this.config.disableContextMenu && c.on(this.media, "contextmenu", function (e) {
                    e.preventDefault()
                }, !1), c.on(this.media, "volumechange", function () {
                    e.storage.set({
                        volume: e.volume,
                        muted: e.muted
                    })
                }), c.on(this.media, "ratechange", function () {
                    w.updateSetting.call(e, "speed"), e.storage.set({
                        speed: e.speed
                    })
                }), c.on(this.media, "qualitychange", function () {
                    w.updateSetting.call(e, "quality"), e.storage.set({
                        quality: e.quality
                    })
                }), c.on(this.media, "languagechange", function () {
                    w.updateSetting.call(e, "captions"), e.storage.set({
                        language: e.language
                    })
                }), c.on(this.media, "captionsenabled captionsdisabled", function () {
                    w.updateSetting.call(e, "captions"), e.storage.set({
                        captions: e.captions.active
                    })
                }), c.on(this.media, this.config.events.concat(["keyup", "keydown"]).join(" "), function (t) {
                    var i = {};
                    "error" === t.type && (i = e.media.error), c.dispatchEvent.call(e, e.elements.container, t.type, !0, i)
                })
            },
            controls: function () {
                var e = this,
                    t = y.isIE ? "change" : "input",
                    i = function (t, i, n) {
                        var s = e.config.listeners[i];
                        c.is.function(s) && s.call(e, t), !t.defaultPrevented && c.is.function(n) && n.call(e, t)
                    };
                c.on(this.elements.buttons.play, "click", function (t) {
                    return i(t, "play", function () {
                        e.togglePlay()
                    })
                }), c.on(this.elements.buttons.restart, "click", function (t) {
                    return i(t, "restart", function () {
                        e.restart()
                    })
                }), c.on(this.elements.buttons.rewind, "click", function (t) {
                    return i(t, "rewind", function () {
                        e.rewind()
                    })
                }), c.on(this.elements.buttons.forward, "click", function (t) {
                    return i(t, "forward", function () {
                        e.forward()
                    })
                }), c.on(this.elements.buttons.mute, "click", function (t) {
                    return i(t, "mute", function () {
                        e.muted = !e.muted
                    })
                }), c.on(this.elements.buttons.captions, "click", function (t) {
                    return i(t, "captions", function () {
                        e.toggleCaptions()
                    })
                }), c.on(this.elements.buttons.fullscreen, "click", function (t) {
                    return i(t, "fullscreen", function () {
                        e.toggleFullscreen()
                    })
                }), c.on(this.elements.buttons.pip, "click", function (t) {
                    return i(t, "pip", function () {
                        e.pip = "toggle"
                    })
                }), c.on(this.elements.buttons.airplay, "click", function (t) {
                    return i(t, "airplay", function () {
                        e.airplay()
                    })
                }), c.on(this.elements.buttons.settings, "click", function (t) {
                    w.toggleMenu.call(e, t)
                }), c.on(document.documentElement, "click", function (t) {
                    w.toggleMenu.call(e, t)
                }), c.on(this.elements.settings.form, "click", function (t) {
                    t.stopPropagation(), c.matches(t.target, e.config.selectors.inputs.language) ? i(t, "language", function () {
                        e.language = t.target.value
                    }) : c.matches(t.target, e.config.selectors.inputs.quality) ? i(t, "quality", function () {
                        e.quality = t.target.value
                    }) : c.matches(t.target, e.config.selectors.inputs.speed) ? i(t, "speed", function () {
                        e.speed = parseFloat(t.target.value)
                    }) : w.showTab.call(e, t)
                }), c.on(this.elements.inputs.seek, t, function (t) {
                    return i(t, "seek", function () {
                        e.currentTime = t.target.value / t.target.max * e.duration
                    })
                }), this.config.toggleInvert && !c.is.element(this.elements.display.duration) && c.on(this.elements.display.currentTime, "click", function () {
                    0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, b.timeUpdate.call(e))
                }), c.on(this.elements.inputs.volume, t, function (t) {
                    return i(t, "volume", function () {
                        e.volume = t.target.value
                    })
                }), y.isWebkit && c.on(c.getElements.call(this, 'input[type="range"]'), "input", function (t) {
                    w.updateRangeFill.call(e, t.target)
                }), c.on(this.elements.progress, "mouseenter mouseleave mousemove", function (t) {
                    return w.updateSeekTooltip.call(e, t)
                }), this.config.hideControls && (c.on(this.elements.controls, "mouseenter mouseleave", function (t) {
                    e.elements.controls.hover = "mouseenter" === t.type
                }), c.on(this.elements.controls, "mousedown mouseup touchstart touchend touchcancel", function (t) {
                    e.elements.controls.pressed = ["mousedown", "touchstart"].includes(t.type)
                }), c.on(this.elements.controls, "focusin focusout", function (t) {
                    e.toggleControls(t)
                })), c.on(this.elements.inputs.volume, "wheel", function (t) {
                    return i(t, "volume", function () {
                        var i = t.webkitDirectionInvertedFromDevice,
                            n = 0;
                        (t.deltaY < 0 || t.deltaX > 0) && (i ? (e.decreaseVolume(.02), n = -1) : (e.increaseVolume(.02), n = 1)), (t.deltaY > 0 || t.deltaX < 0) && (i ? (e.increaseVolume(.02), n = 1) : (e.decreaseVolume(.02), n = -1)), (1 === n && e.media.volume < 1 || -1 === n && e.media.volume > 0) && t.preventDefault()
                    })
                }, !1)
            }
        },
        b = {
            addStyleHook: function () {
                c.toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), !0), c.toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
            },
            toggleNativeControls: function () {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
            },
            build: function () {
                if (v.media.call(this), !this.supported.ui) return this.debug.warn("Basic support only for " + this.provider + " " + this.type), c.removeElement.call(this, "controls"), c.removeElement.call(this, "buttons.play"), void b.toggleNativeControls.call(this, !0);
                c.is.element(this.elements.controls) || (w.inject.call(this), v.controls.call(this)), c.is.element(this.elements.controls) && (b.toggleNativeControls.call(this), f.setup.call(this), E.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.options.quality = [], b.timeUpdate.call(this), b.checkPlaying.call(this), this.ready = !0, c.dispatchEvent.call(this, this.media, "ready"), b.setTitle.call(this))
            },
            setTitle: function () {
                var e = this.config.i18n.play;
                if (c.is.string(this.config.title) && !c.is.empty(this.config.title) && (e += ", " + this.config.title, this.elements.container.setAttribute("aria-label", this.config.title)), c.is.nodeList(this.elements.buttons.play) && Array.from(this.elements.buttons.play).forEach(function (t) {
                        t.setAttribute("aria-label", e)
                    }), this.isEmbed) {
                    var t = c.getElement.call(this, "iframe");
                    if (!c.is.element(t)) return;
                    var i = c.is.empty(this.config.title) ? "video" : this.config.title;
                    t.setAttribute("title", this.config.i18n.frameTitle.replace("{title}", i))
                }
            },
            checkPlaying: function () {
                var e = this;
                c.toggleClass(this.elements.container, this.config.classNames.playing, this.playing), c.toggleClass(this.elements.container, this.config.classNames.stopped, this.paused), c.is.nodeList(this.elements.buttons.play) && Array.from(this.elements.buttons.play).forEach(function (t) {
                    return c.toggleState(t, e.playing)
                }), this.toggleControls(!this.playing)
            },
            checkLoading: function (e) {
                var t = this;
                this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
                    c.toggleClass(t.elements.container, t.config.classNames.loading, t.loading), t.toggleControls(t.loading)
                }, this.loading ? 250 : 0)
            },
            checkFailed: function () {
                var e = this;
                this.failed = 3 === this.media.networkState, this.failed && (c.toggleClass(this.elements.container, this.config.classNames.loading, !1), c.toggleClass(this.elements.container, this.config.classNames.error, !0)), clearTimeout(this.timers.failed), this.timers.loading = setTimeout(function () {
                    c.toggleClass(e.elements.container, e.config.classNames.loading, e.loading), e.toggleControls(e.loading)
                }, this.loading ? 250 : 0)
            },
            updateVolume: function () {
                this.supported.ui && (c.is.element(this.elements.inputs.volume) && b.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), c.is.element(this.elements.buttons.mute) && c.toggleState(this.elements.buttons.mute, this.muted || 0 === this.volume))
            },
            setRange: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                c.is.element(e) && (e.value = t, w.updateRangeFill.call(this, e))
            },
            setProgress: function (e, t) {
                var i = c.is.number(t) ? t : 0,
                    n = c.is.element(e) ? e : this.elements.display.buffer;
                if (c.is.element(n)) {
                    n.value = i;
                    var s = n.getElementsByTagName("span")[0];
                    c.is.element(s) && (s.childNodes[0].nodeValue = i)
                }
            },
            updateProgress: function (e) {
                var t = this;
                if (this.supported.ui && c.is.event(e)) {
                    var i, n = 0;
                    if (e) switch (e.type) {
                        case "timeupdate":
                        case "seeking":
                            n = c.getPercentage(this.currentTime, this.duration), "timeupdate" === e.type && b.setRange.call(this, this.elements.inputs.seek, n);
                            break;
                        case "playing":
                        case "progress":
                            n = (i = t.media.buffered) && i.length ? c.getPercentage(i.end(0), t.duration) : c.is.number(i) ? 100 * i : 0, b.setProgress.call(this, this.elements.display.buffer, n)
                    }
                }
            },
            updateTimeDisplay: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (c.is.element(e) && c.is.number(t)) {
                    var n = c.getHours(this.duration) > 0;
                    e.textContent = c.formatTime(t, n, i)
                }
            },
            timeUpdate: function (e) {
                var t = !c.is.element(this.elements.display.duration) && this.config.invertTime;
                b.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || b.updateProgress.call(this, e)
            },
            durationUpdate: function () {
                if (this.supported.ui) {
                    var e = c.is.element(this.elements.display.duration);
                    !e && this.config.displayDuration && this.paused && b.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && b.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), w.updateSeekTooltip.call(this)
                }
            }
        },
        k = c.getBrowser(),
        w = {
            updateRangeFill: function (e) {
                if (k.isWebkit) {
                    var t = c.is.event(e) ? e.target : e;
                    c.is.element(t) && "range" === t.getAttribute("type") && t.style.setProperty("--value", t.value / t.max * 100 + "%")
                }
            },
            getIconUrl: function () {
                return {
                    url: this.config.iconUrl,
                    absolute: 0 === this.config.iconUrl.indexOf("http") || k.isIE && !window.svg4everybody
                }
            },
            createIcon: function (e, t) {
                var i = w.getIconUrl.call(this),
                    n = (i.absolute ? "" : i.url) + "#" + this.config.iconPrefix,
                    s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                c.setAttributes(s, c.extend(t, {
                    role: "presentation"
                }));
                var a = document.createElementNS("http://www.w3.org/2000/svg", "use"),
                    o = n + "-" + e;
                return "href" in a ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", o) : a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), s.appendChild(a), s
            },
            createLabel: function (e, t) {
                var i = this.config.i18n[e],
                    n = Object.assign({}, t);
                switch (e) {
                    case "pip":
                        i = "PIP";
                        break;
                    case "airplay":
                        i = "AirPlay"
                }
                return "class" in n ? n.class += " " + this.config.classNames.hidden : n.class = this.config.classNames.hidden, c.createElement("span", n, i)
            },
            createBadge: function (e) {
                if (c.is.empty(e)) return null;
                var t = c.createElement("span", {
                    class: this.config.classNames.menu.value
                });
                return t.appendChild(c.createElement("span", {
                    class: this.config.classNames.menu.badge
                }, e)), t
            },
            createButton: function (e, t) {
                var i = c.createElement("button"),
                    n = Object.assign({}, t),
                    s = e,
                    a = !1,
                    o = void 0,
                    l = void 0,
                    r = void 0,
                    u = void 0;
                switch ("type" in n || (n.type = "button"), "class" in n ? n.class.includes(this.config.classNames.control) && (n.class += " " + this.config.classNames.control) : n.class = this.config.classNames.control, s) {
                    case "play":
                        a = !0, o = "play", r = "pause", l = "play", u = "pause";
                        break;
                    case "mute":
                        a = !0, o = "mute", r = "unmute", l = "volume", u = "muted";
                        break;
                    case "captions":
                        a = !0, o = "enableCaptions", r = "disableCaptions", l = "captions-off", u = "captions-on";
                        break;
                    case "fullscreen":
                        a = !0, o = "enterFullscreen", r = "exitFullscreen", l = "enter-fullscreen", u = "exit-fullscreen";
                        break;
                    case "play-large":
                        n.class += " " + this.config.classNames.control + "--overlaid", s = "play", o = "play", l = "play";
                        break;
                    default:
                        o = s, l = s
                }
                return a ? (i.appendChild(w.createIcon.call(this, u, {
                    class: "icon--pressed"
                })), i.appendChild(w.createIcon.call(this, l, {
                    class: "icon--not-pressed"
                })), i.appendChild(w.createLabel.call(this, r, {
                    class: "label--pressed"
                })), i.appendChild(w.createLabel.call(this, o, {
                    class: "label--not-pressed"
                })), n["aria-pressed"] = !1, n["aria-label"] = this.config.i18n[o]) : (i.appendChild(w.createIcon.call(this, l)), i.appendChild(w.createLabel.call(this, o))), c.extend(n, c.getAttributesFromSelector(this.config.selectors.buttons[s], n)), c.setAttributes(i, n), this.elements.buttons[s] = i, i
            },
            createRange: function (e, t) {
                var i = c.createElement("label", {
                        for: t.id,
                        class: this.config.classNames.hidden
                    }, this.config.i18n[e]),
                    n = c.createElement("input", c.extend(c.getAttributesFromSelector(this.config.selectors.inputs[e]), {
                        type: "range",
                        min: 0,
                        max: 100,
                        step: .01,
                        value: 0,
                        autocomplete: "off"
                    }, t));
                return this.elements.inputs[e] = n, w.updateRangeFill.call(this, n), {
                    label: i,
                    input: n
                }
            },
            createProgress: function (e, t) {
                var i = c.createElement("progress", c.extend(c.getAttributesFromSelector(this.config.selectors.display[e]), {
                    min: 0,
                    max: 100,
                    value: 0
                }, t));
                if ("volume" !== e) {
                    i.appendChild(c.createElement("span", null, "0"));
                    var n = "";
                    switch (e) {
                        case "played":
                            n = this.config.i18n.played;
                            break;
                        case "buffer":
                            n = this.config.i18n.buffered
                    }
                    i.textContent = "% " + n.toLowerCase()
                }
                return this.elements.display[e] = i, i
            },
            createTime: function (e) {
                var t = c.createElement("div", {
                    class: "plyr__time"
                });
                return t.appendChild(c.createElement("span", {
                    class: this.config.classNames.hidden
                }, this.config.i18n[e])), t.appendChild(c.createElement("span", c.getAttributesFromSelector(this.config.selectors.display[e]), "00:00")), this.elements.display[e] = t, t
            },
            createMenuItem: function (e, t, i, n) {
                var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    o = c.createElement("li"),
                    l = c.createElement("label", {
                        class: this.config.classNames.control
                    }),
                    r = c.createElement("input", c.extend(c.getAttributesFromSelector(this.config.selectors.inputs[i]), {
                        type: "radio",
                        name: "plyr-" + i,
                        value: e,
                        checked: a,
                        class: "plyr__sr-only"
                    })),
                    u = c.createElement("span", {
                        "aria-hidden": !0
                    });
                l.appendChild(r), l.appendChild(u), l.insertAdjacentHTML("beforeend", n), c.is.element(s) && l.appendChild(s), o.appendChild(l), t.appendChild(o)
            },
            updateSeekTooltip: function (e) {
                if (this.config.tooltips.seek && c.is.element(this.elements.inputs.seek) && c.is.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
                    var t = 0,
                        i = this.elements.inputs.seek.getBoundingClientRect(),
                        n = this.config.classNames.tooltip + "--visible";
                    if (c.is.event(e)) t = 100 / i.width * (e.pageX - i.left);
                    else {
                        if (!c.hasClass(this.elements.display.seekTooltip, n)) return;
                        t = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                    }
                    t < 0 ? t = 0 : t > 100 && (t = 100), b.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * t), this.elements.display.seekTooltip.style.left = t + "%", c.is.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && c.toggleClass(this.elements.display.seekTooltip, n, "mouseenter" === e.type)
                }
            },
            toggleTab: function (e, t) {
                var i = this.elements.settings.tabs[e],
                    n = this.elements.settings.panes[e];
                c.toggleHidden(i, !t), c.toggleHidden(n, !t)
            },
            setQualityMenu: function (e) {
                var t = this,
                    i = this.elements.settings.panes.quality.querySelector("ul");
                c.is.array(e) ? this.options.quality = e.filter(function (e) {
                    return t.config.quality.options.includes(e)
                }) : this.options.quality = this.config.quality.options;
                var n = !c.is.empty(this.options.quality) && this.isYouTube;
                if (w.toggleTab.call(this, "quality", n), n) {
                    c.emptyElement(i);
                    this.options.quality.forEach(function (e) {
                        return w.createMenuItem.call(t, e, i, "quality", w.getLabel.call(t, "quality", e), function (e) {
                            var i = "";
                            switch (e) {
                                case "hd2160":
                                    i = "4K";
                                    break;
                                case "hd1440":
                                    i = "WQHD";
                                    break;
                                case "hd1080":
                                case "hd720":
                                    i = "HD"
                            }
                            return i.length ? w.createBadge.call(t, i) : null
                        }(e))
                    }), w.updateSetting.call(this, "quality", i)
                }
            },
            getLabel: function (e, t) {
                switch (e) {
                    case "speed":
                        return 1 === t ? "Normal" : t + "&times;";
                    case "quality":
                        switch (t) {
                            case "hd2160":
                                return "2160P";
                            case "hd1440":
                                return "1440P";
                            case "hd1080":
                                return "1080P";
                            case "hd720":
                                return "720P";
                            case "large":
                                return "480P";
                            case "medium":
                                return "360P";
                            case "small":
                                return "240P";
                            case "tiny":
                                return "Tiny";
                            case "default":
                                return "Auto";
                            default:
                                return t
                        }
                    case "captions":
                        return w.getLanguage.call(this);
                    default:
                        return null
                }
            },
            updateSetting: function (e, t) {
                var i = this.elements.settings.panes[e],
                    n = null,
                    s = t;
                switch (e) {
                    case "captions":
                        n = this.captions.active ? this.captions.language : "";
                        break;
                    default:
                        if (n = this[e], c.is.empty(n) && (n = this.config[e].default), !this.options[e].includes(n)) return void this.debug.warn("Unsupported value of '" + n + "' for " + e);
                        if (!this.config[e].options.includes(n)) return void this.debug.warn("Disabled value of '" + n + "' for " + e)
                }(c.is.element(s) || (s = i && i.querySelector("ul")), c.is.empty(n)) || (this.elements.settings.tabs[e].querySelector("." + this.config.classNames.menu.value).innerHTML = w.getLabel.call(this, e, n));
                var a = s && s.querySelector('input[value="' + n + '"]');
                c.is.element(a) && (a.checked = !0)
            },
            getLanguage: function () {
                if (!this.supported.ui) return null;
                if (!u.textTracks || !E.getTracks.call(this).length) return this.config.i18n.none;
                if (this.captions.active) {
                    var e = E.getCurrentTrack.call(this);
                    if (c.is.track(e)) return e.label
                }
                return this.config.i18n.disabled
            },
            setCaptionsMenu: function () {
                var e = this,
                    t = this.elements.settings.panes.captions.querySelector("ul"),
                    i = E.getTracks.call(this).length;
                if (w.toggleTab.call(this, "captions", i), c.emptyElement(t), i) {
                    var n = E.getTracks.call(this).map(function (e) {
                        return {
                            language: e.language,
                            label: c.is.empty(e.label) ? e.language.toUpperCase() : e.label
                        }
                    });
                    n.unshift({
                        language: "",
                        label: this.config.i18n.none
                    }), n.forEach(function (i) {
                        w.createMenuItem.call(e, i.language, t, "language", i.label || i.language, w.createBadge.call(e, i.language.toUpperCase()), i.language.toLowerCase() === e.captions.language.toLowerCase())
                    }), w.updateSetting.call(this, "captions", t)
                }
            },
            setSpeedMenu: function () {
                var e = this;
                c.is.object(this.options.speed) && Object.keys(this.options.speed).length || (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function (t) {
                    return e.config.speed.options.includes(t)
                });
                var t = !c.is.empty(this.options.speed);
                if (w.toggleTab.call(this, "speed", t), t) {
                    var i = this.elements.settings.panes.speed.querySelector("ul");
                    c.toggleHidden(this.elements.settings.tabs.speed, !1), c.toggleHidden(this.elements.settings.panes.speed, !1), c.emptyElement(i), this.options.speed.forEach(function (t) {
                        return w.createMenuItem.call(e, t, i, "speed", w.getLabel.call(e, "speed", t))
                    }), w.updateSetting.call(this, "speed", i)
                }
            },
            toggleMenu: function (e) {
                var t = this.elements.settings.form,
                    i = this.elements.buttons.settings,
                    n = c.is.boolean(e) ? e : c.is.element(t) && "true" === t.getAttribute("aria-hidden");
                if (c.is.event(e)) {
                    var s = c.is.element(t) && t.contains(e.target),
                        a = e.target === this.elements.buttons.settings;
                    if (s || !s && !a && n) return;
                    a && e.stopPropagation()
                }
                c.is.element(i) && i.setAttribute("aria-expanded", n), c.is.element(t) && (t.setAttribute("aria-hidden", !n), c.toggleClass(this.elements.container, this.config.classNames.menu.open, n), n ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", -1))
            },
            getTabSize: function (e) {
                var t = e.cloneNode(!0);
                t.style.position = "absolute", t.style.opacity = 0, t.setAttribute("aria-hidden", !1), Array.from(t.querySelectorAll("input[name]")).forEach(function (e) {
                    var t = e.getAttribute("name");
                    e.setAttribute("name", t + "-clone")
                }), e.parentNode.appendChild(t);
                var i = t.scrollWidth,
                    n = t.scrollHeight;
                return c.removeElement(t), {
                    width: i,
                    height: n
                }
            },
            showTab: function (e) {
                var t = this.elements.settings.menu,
                    i = e.target,
                    n = "false" === i.getAttribute("aria-expanded"),
                    s = document.getElementById(i.getAttribute("aria-controls"));
                if (c.is.element(s) && "tabpanel" === s.getAttribute("role")) {
                    var a = t.querySelector('[role="tabpanel"][aria-hidden="false"]'),
                        o = a.parentNode;
                    if (Array.from(t.querySelectorAll('[aria-controls="' + a.getAttribute("id") + '"]')).forEach(function (e) {
                            e.setAttribute("aria-expanded", !1)
                        }), u.transitions && !u.reducedMotion) {
                        o.style.width = a.scrollWidth + "px", o.style.height = a.scrollHeight + "px";
                        var l = w.getTabSize.call(this, s);
                        c.on(o, c.transitionEndEvent, function e(t) {
                            t.target === o && ["width", "height"].includes(t.propertyName) && (o.style.width = "", o.style.height = "", c.off(o, c.transitionEndEvent, e))
                        }), o.style.width = l.width + "px", o.style.height = l.height + "px"
                    }
                    a.setAttribute("aria-hidden", !0), a.setAttribute("tabindex", -1), s.setAttribute("aria-hidden", !n), i.setAttribute("aria-expanded", n), s.removeAttribute("tabindex"), s.querySelectorAll("button:not(:disabled), input:not(:disabled), [tabindex]")[0].focus()
                }
            },
            create: function (e) {
                var t = this;
                if (c.is.empty(this.config.controls)) return null;
                var i = c.createElement("div", c.getAttributesFromSelector(this.config.selectors.controls.wrapper));
                if (this.config.controls.includes("restart") && i.appendChild(w.createButton.call(this, "restart")), this.config.controls.includes("rewind") && i.appendChild(w.createButton.call(this, "rewind")), this.config.controls.includes("play") && i.appendChild(w.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && i.appendChild(w.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
                    var n = c.createElement("div", c.getAttributesFromSelector(this.config.selectors.progress)),
                        s = w.createRange.call(this, "seek", {
                            id: "plyr-seek-" + e.id
                        });
                    if (n.appendChild(s.label), n.appendChild(s.input), n.appendChild(w.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
                        var a = c.createElement("span", {
                            role: "tooltip",
                            class: this.config.classNames.tooltip
                        }, "00:00");
                        n.appendChild(a), this.elements.display.seekTooltip = a
                    }
                    this.elements.progress = n, i.appendChild(this.elements.progress)
                }
                if (this.config.controls.includes("current-time") && i.appendChild(w.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && i.appendChild(w.createTime.call(this, "duration")), this.config.controls.includes("mute") && i.appendChild(w.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
                    var o = c.createElement("div", {
                            class: "plyr__volume"
                        }),
                        l = {
                            max: 1,
                            step: .05,
                            value: this.config.volume
                        },
                        r = w.createRange.call(this, "volume", c.extend(l, {
                            id: "plyr-volume-" + e.id
                        }));
                    o.appendChild(r.label), o.appendChild(r.input), this.elements.volume = o, i.appendChild(o)
                }
                if (this.config.controls.includes("captions") && i.appendChild(w.createButton.call(this, "captions")), this.config.controls.includes("settings") && !c.is.empty(this.config.settings)) {
                    var d = c.createElement("div", {
                        class: "plyr__menu"
                    });
                    d.appendChild(w.createButton.call(this, "settings", {
                        id: "plyr-settings-toggle-" + e.id,
                        "aria-haspopup": !0,
                        "aria-controls": "plyr-settings-" + e.id,
                        "aria-expanded": !1
                    }));
                    var h = c.createElement("form", {
                            class: "plyr__menu__container",
                            id: "plyr-settings-" + e.id,
                            "aria-hidden": !0,
                            "aria-labelled-by": "plyr-settings-toggle-" + e.id,
                            role: "tablist",
                            tabindex: -1
                        }),
                        p = c.createElement("div"),
                        m = c.createElement("div", {
                            id: "plyr-settings-" + e.id + "-home",
                            "aria-hidden": !1,
                            "aria-labelled-by": "plyr-settings-toggle-" + e.id,
                            role: "tabpanel"
                        }),
                        g = c.createElement("ul", {
                            role: "tablist"
                        });
                    this.config.settings.forEach(function (i) {
                        var n = c.createElement("li", {
                                role: "tab",
                                hidden: ""
                            }),
                            s = c.createElement("button", c.extend(c.getAttributesFromSelector(t.config.selectors.buttons.settings), {
                                type: "button",
                                class: t.config.classNames.control + " " + t.config.classNames.control + "--forward",
                                id: "plyr-settings-" + e.id + "-" + i + "-tab",
                                "aria-haspopup": !0,
                                "aria-controls": "plyr-settings-" + e.id + "-" + i,
                                "aria-expanded": !1
                            }), t.config.i18n[i]),
                            a = c.createElement("span", {
                                class: t.config.classNames.menu.value
                            });
                        a.innerHTML = e[i], s.appendChild(a), n.appendChild(s), g.appendChild(n), t.elements.settings.tabs[i] = n
                    }), m.appendChild(g), p.appendChild(m), this.config.settings.forEach(function (i) {
                        var n = c.createElement("div", {
                                id: "plyr-settings-" + e.id + "-" + i,
                                "aria-hidden": !0,
                                "aria-labelled-by": "plyr-settings-" + e.id + "-" + i + "-tab",
                                role: "tabpanel",
                                tabindex: -1,
                                hidden: ""
                            }),
                            s = c.createElement("button", {
                                type: "button",
                                class: t.config.classNames.control + " " + t.config.classNames.control + "--back",
                                "aria-haspopup": !0,
                                "aria-controls": "plyr-settings-" + e.id + "-home",
                                "aria-expanded": !1
                            }, t.config.i18n[i]);
                        n.appendChild(s);
                        var a = c.createElement("ul");
                        n.appendChild(a), p.appendChild(n), t.elements.settings.panes[i] = n
                    }), h.appendChild(p), d.appendChild(h), i.appendChild(d), this.elements.settings.form = h, this.elements.settings.menu = d
                }
                return this.config.controls.includes("pip") && u.pip && i.appendChild(w.createButton.call(this, "pip")), this.config.controls.includes("airplay") && u.airplay && i.appendChild(w.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && i.appendChild(w.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(w.createButton.call(this, "play-large")), this.elements.controls = i, this.config.controls.includes("settings") && this.config.settings.includes("speed") && w.setSpeedMenu.call(this), i
            },
            inject: function () {
                var e = this;
                if (this.config.loadSprite) {
                    var t = w.getIconUrl.call(this);
                    t.absolute && c.loadSprite(t.url, "sprite-plyr")
                }
                this.id = Math.floor(1e4 * Math.random());
                var i = null;
                i = c.is.string(this.config.controls) ? this.config.controls : c.is.function(this.config.controls) ? this.config.controls({
                    id: this.id,
                    seektime: this.config.seekTime,
                    title: this.config.title
                }) : w.create.call(this, {
                    id: this.id,
                    seektime: this.config.seekTime,
                    speed: this.speed,
                    quality: this.quality,
                    captions: w.getLanguage.call(this)
                });
                var n = void 0;
                if (c.is.string(this.config.selectors.controls.container) && (n = document.querySelector(this.config.selectors.controls.container)), c.is.element(n) || (n = this.elements.container), c.is.element(i) ? n.appendChild(i) : n.insertAdjacentHTML("beforeend", i), c.is.element(this.elements.controls) && c.findElements.call(this), window.navigator.userAgent.includes("Edge") && c.repaint(n), this.config.tooltips.controls) {
                    var s = c.getElements.call(this, [this.config.selectors.controls.wrapper, " ", this.config.selectors.labels, " .", this.config.classNames.hidden].join(""));
                    Array.from(s).forEach(function (t) {
                        c.toggleClass(t, e.config.classNames.hidden, !1), c.toggleClass(t, e.config.classNames.tooltip, !0), t.setAttribute("role", "tooltip")
                    })
                }
            }
        },
        E = {
            setup: function () {
                if (this.supported.ui) {
                    var e = this.storage.get("language");
                    if (c.is.empty(e) || (this.captions.language = e), c.is.empty(this.captions.language) && (this.captions.language = this.config.captions.language.toLowerCase()), !c.is.boolean(this.captions.active)) {
                        var t = this.storage.get("captions");
                        c.is.boolean(t) ? this.captions.active = t : this.captions.active = this.config.captions.active
                    }!this.isVideo || this.isYouTube || this.isHTML5 && !u.textTracks ? this.config.controls.includes("settings") && this.config.settings.includes("captions") && w.setCaptionsMenu.call(this) : (c.is.element(this.elements.captions) || (this.elements.captions = c.createElement("div", c.getAttributesFromSelector(this.config.selectors.captions)), c.insertAfter(this.elements.captions, this.elements.wrapper)), c.toggleClass(this.elements.container, this.config.classNames.captions.enabled, !c.is.empty(E.getTracks.call(this))), c.is.empty(E.getTracks.call(this)) || (E.setLanguage.call(this), E.show.call(this), this.config.controls.includes("settings") && this.config.settings.includes("captions") && w.setCaptionsMenu.call(this)))
                }
            },
            setLanguage: function () {
                var e = this;
                if (this.isHTML5 && this.isVideo) {
                    E.getTracks.call(this).forEach(function (t) {
                        c.on(t, "cuechange", function (t) {
                            return E.setCue.call(e, t)
                        }), t.mode = "hidden"
                    });
                    var t = E.getCurrentTrack.call(this);
                    c.is.track(t) && Array.from(t.activeCues || []).length && E.setCue.call(this, t)
                } else this.isVimeo && this.captions.active && this.embed.enableTextTrack(this.language)
            },
            getTracks: function () {
                return c.is.nullOrUndefined(this.media) ? [] : Array.from(this.media.textTracks || []).filter(function (e) {
                    return ["captions", "subtitles"].includes(e.kind)
                })
            },
            getCurrentTrack: function () {
                var e = this;
                return E.getTracks.call(this).find(function (t) {
                    return t.language.toLowerCase() === e.language
                })
            },
            setCue: function (e) {
                var t = c.is.event(e) ? e.target : e,
                    i = t.activeCues[0];
                t === E.getCurrentTrack.call(this) && (c.is.cue(i) ? E.setText.call(this, i.getCueAsHTML()) : E.setText.call(this, null), c.dispatchEvent.call(this, this.media, "cuechange"))
            },
            setText: function (e) {
                if (this.supported.ui)
                    if (c.is.element(this.elements.captions)) {
                        var t = c.createElement("span");
                        c.emptyElement(this.elements.captions);
                        var i = c.is.nullOrUndefined(e) ? "" : e;
                        c.is.string(i) ? t.textContent = i.trim() : t.appendChild(i), this.elements.captions.appendChild(t)
                    } else this.debug.warn("No captions element to render to")
            },
            show: function () {
                if (c.is.element(this.elements.buttons.captions)) {
                    var e = this.storage.get("captions");
                    c.is.boolean(e) ? this.captions.active = e : e = this.config.captions.active, e && (c.toggleClass(this.elements.container, this.config.classNames.captions.active, !0), c.toggleState(this.elements.buttons.captions, !0))
                }
            }
        },
        T = {
            setup: function () {
                var e = this;
                c.toggleClass(this.elements.wrapper, this.config.classNames.embed, !0), T.setAspectRatio.call(this), c.is.object(window.YT) && c.is.function(window.YT.Player) ? T.ready.call(this) : (c.loadScript(this.config.urls.youtube.api), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function () {
                    T.ready.call(e)
                }), window.onYouTubeIframeAPIReady = function () {
                    window.onYouTubeReadyCallbacks.forEach(function (e) {
                        e()
                    })
                })
            },
            getTitle: function (e) {
                var t = this;
                if (c.is.function(this.embed.getVideoData)) {
                    var i = this.embed.getVideoData().title;
                    if (c.is.empty(i)) return this.config.title = i, void b.setTitle.call(this)
                }
                var n = this.config.keys.google;
                if (c.is.string(n) && !c.is.empty(n)) {
                    var s = "https://www.googleapis.com/youtube/v3/videos?id=" + e + "&key=" + n + "&fields=items(snippet(title))&part=snippet";
                    c.fetch(s).then(function (e) {
                        c.is.object(e) && (t.config.title = e.items[0].snippet.title, b.setTitle.call(t))
                    }).catch(function () {})
                }
            },
            setAspectRatio: function () {
                var e = this.config.ratio.split(":");
                this.elements.wrapper.style.paddingBottom = 100 / e[0] * e[1] + "%"
            },
            ready: function () {
                var e = this,
                    t = e.media.getAttribute("id");
                if (c.is.empty(t) || !t.startsWith("youtube-")) {
                    var i = e.media.getAttribute("src");
                    c.is.empty(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
                    var n = c.parseYouTubeId(i),
                        s = c.generateId(e.provider),
                        a = c.createElement("div", {
                            id: s
                        });
                    e.media = c.replaceElement(a, e.media), e.embed = new window.YT.Player(s, {
                        videoId: n,
                        playerVars: {
                            autoplay: e.config.autoplay ? 1 : 0,
                            controls: e.supported.ui ? 0 : 1,
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3,
                            modestbranding: 1,
                            disablekb: 1,
                            playsinline: 1,
                            widget_referrer: window ? window.location.href : null,
                            cc_load_policy: e.captions.active ? 1 : 0,
                            cc_lang_pref: e.config.captions.language
                        },
                        events: {
                            onError: function (t) {
                                if (!c.is.object(e.media.error)) {
                                    var i = {
                                        code: t.data
                                    };
                                    switch (t.data) {
                                        case 2:
                                            i.message = "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.";
                                            break;
                                        case 5:
                                            i.message = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";
                                            break;
                                        case 100:
                                            i.message = "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.";
                                            break;
                                        case 101:
                                        case 150:
                                            i.message = "The owner of the requested video does not allow it to be played in embedded players.";
                                            break;
                                        default:
                                            i.message = "An unknown error occured"
                                    }
                                    e.media.error = i, c.dispatchEvent.call(e, e.media, "error")
                                }
                            },
                            onPlaybackQualityChange: function (t) {
                                var i = t.target;
                                e.media.quality = i.getPlaybackQuality(), c.dispatchEvent.call(e, e.media, "qualitychange")
                            },
                            onPlaybackRateChange: function (t) {
                                var i = t.target;
                                e.media.playbackRate = i.getPlaybackRate(), c.dispatchEvent.call(e, e.media, "ratechange")
                            },
                            onReady: function (t) {
                                var i = t.target;
                                T.getTitle.call(e, n), e.media.play = function () {
                                    i.playVideo(), e.media.paused = !1
                                }, e.media.pause = function () {
                                    i.pauseVideo(), e.media.paused = !0
                                }, e.media.stop = function () {
                                    i.stopVideo(), e.media.paused = !0
                                }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                    get: function () {
                                        return Number(i.getCurrentTime())
                                    },
                                    set: function (t) {
                                        e.media.seeking = !0, c.dispatchEvent.call(e, e.media, "seeking"), i.seekTo(t)
                                    }
                                }), Object.defineProperty(e.media, "playbackRate", {
                                    get: function () {
                                        return i.getPlaybackRate()
                                    },
                                    set: function (e) {
                                        i.setPlaybackRate(e)
                                    }
                                }), Object.defineProperty(e.media, "quality", {
                                    get: function () {
                                        return i.getPlaybackQuality()
                                    },
                                    set: function (t) {
                                        c.dispatchEvent.call(e, e.media, "qualityrequested", !1, {
                                            quality: t
                                        }), i.setPlaybackQuality(t)
                                    }
                                });
                                var s = e.config.volume;
                                Object.defineProperty(e.media, "volume", {
                                    get: function () {
                                        return s
                                    },
                                    set: function (t) {
                                        s = t, i.setVolume(100 * s), c.dispatchEvent.call(e, e.media, "volumechange")
                                    }
                                });
                                var a = e.config.muted;
                                Object.defineProperty(e.media, "muted", {
                                    get: function () {
                                        return a
                                    },
                                    set: function (t) {
                                        var n = c.is.boolean(t) ? t : a;
                                        a = n, i[n ? "mute" : "unMute"](), c.dispatchEvent.call(e, e.media, "volumechange")
                                    }
                                }), Object.defineProperty(e.media, "currentSrc", {
                                    get: function () {
                                        return i.getVideoUrl()
                                    }
                                }), Object.defineProperty(e.media, "ended", {
                                    get: function () {
                                        return e.currentTime === e.duration
                                    }
                                }), e.options.speed = i.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), c.dispatchEvent.call(e, e.media, "timeupdate"), c.dispatchEvent.call(e, e.media, "durationchange"), window.clearInterval(e.timers.buffering), e.timers.buffering = window.setInterval(function () {
                                    e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && c.dispatchEvent.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (window.clearInterval(e.timers.buffering), c.dispatchEvent.call(e, e.media, "canplaythrough"))
                                }, 200), window.setTimeout(function () {
                                    return b.build.call(e)
                                }, 50)
                            },
                            onStateChange: function (t) {
                                var i = t.target;
                                switch (window.clearInterval(e.timers.playing), t.data) {
                                    case 0:
                                        e.media.paused = !0, e.media.loop ? (i.stopVideo(), i.playVideo()) : c.dispatchEvent.call(e, e.media, "ended");
                                        break;
                                    case 1:
                                        e.media.seeking && c.dispatchEvent.call(e, e.media, "seeked"), e.media.seeking = !1, e.media.paused && c.dispatchEvent.call(e, e.media, "play"), e.media.paused = !1, c.dispatchEvent.call(e, e.media, "playing"), e.timers.playing = window.setInterval(function () {
                                            c.dispatchEvent.call(e, e.media, "timeupdate")
                                        }, 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), c.dispatchEvent.call(e, e.media, "durationchange")), w.setQualityMenu.call(e, i.getAvailableQualityLevels());
                                        break;
                                    case 2:
                                        e.media.paused = !0, c.dispatchEvent.call(e, e.media, "pause")
                                }
                                c.dispatchEvent.call(e, e.elements.container, "statechange", !1, {
                                    code: t.data
                                })
                            }
                        }
                    })
                }
            }
        },
        A = {
            setup: function () {
                var e = this;
                c.toggleClass(this.elements.wrapper, this.config.classNames.embed, !0), A.setAspectRatio.call(this), c.is.object(window.Vimeo) ? A.ready.call(this) : c.loadScript(this.config.urls.vimeo.api, function () {
                    A.ready.call(e)
                })
            },
            setAspectRatio: function (e) {
                var t = c.is.string(e) ? e.split(":") : this.config.ratio.split(":"),
                    i = 100 / t[0] * t[1],
                    n = (200 - i) / 4;
                this.elements.wrapper.style.paddingBottom = i + "%", this.media.style.transform = "translateY(-" + n + "%)"
            },
            ready: function () {
                var e = this,
                    t = this,
                    i = {
                        loop: t.config.loop.active,
                        autoplay: t.autoplay,
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        speed: !0,
                        transparent: 0,
                        gesture: "media"
                    },
                    n = c.buildUrlParams(i),
                    s = t.media.getAttribute("src");
                c.is.empty(s) && (s = t.media.getAttribute(this.config.attributes.embed.id));
                var a = c.parseVimeoId(s),
                    o = c.createElement("iframe"),
                    l = "https://player.vimeo.com/video/" + a + "?" + n;
                o.setAttribute("src", l), o.setAttribute("allowfullscreen", ""), o.setAttribute("allowtransparency", ""), o.setAttribute("allow", "autoplay");
                var r = c.createElement("div");
                r.appendChild(o), t.media = c.replaceElement(r, t.media), t.embed = new window.Vimeo.Player(o), t.media.paused = !0, t.media.currentTime = 0, t.media.play = function () {
                    t.embed.play().then(function () {
                        t.media.paused = !1
                    })
                }, t.media.pause = function () {
                    t.embed.pause().then(function () {
                        t.media.paused = !0
                    })
                }, t.media.stop = function () {
                    t.embed.stop().then(function () {
                        t.media.paused = !0, t.currentTime = 0
                    })
                };
                var u = t.media.currentTime;
                Object.defineProperty(t.media, "currentTime", {
                    get: function () {
                        return u
                    },
                    set: function (e) {
                        var i = t.media.paused;
                        t.media.seeking = !0, c.dispatchEvent.call(t, t.media, "seeking"), t.embed.setCurrentTime(e), i && t.pause()
                    }
                });
                var d = t.config.speed.selected;
                Object.defineProperty(t.media, "playbackRate", {
                    get: function () {
                        return d
                    },
                    set: function (e) {
                        t.embed.setPlaybackRate(e).then(function () {
                            d = e, c.dispatchEvent.call(t, t.media, "ratechange")
                        })
                    }
                });
                var h = t.config.volume;
                Object.defineProperty(t.media, "volume", {
                    get: function () {
                        return h
                    },
                    set: function (e) {
                        t.embed.setVolume(e).then(function () {
                            h = e, c.dispatchEvent.call(t, t.media, "volumechange")
                        })
                    }
                });
                var p = t.config.muted;
                Object.defineProperty(t.media, "muted", {
                    get: function () {
                        return p
                    },
                    set: function (e) {
                        var i = !!c.is.boolean(e) && e;
                        t.embed.setVolume(i ? 0 : t.config.volume).then(function () {
                            p = i, c.dispatchEvent.call(t, t.media, "volumechange")
                        })
                    }
                });
                var m = t.config.loop;
                Object.defineProperty(t.media, "loop", {
                    get: function () {
                        return m
                    },
                    set: function (e) {
                        var i = c.is.boolean(e) ? e : t.config.loop.active;
                        t.embed.setLoop(i).then(function () {
                            m = i
                        })
                    }
                });
                var g = void 0;
                t.embed.getVideoUrl().then(function (e) {
                    g = e
                }), Object.defineProperty(t.media, "currentSrc", {
                    get: function () {
                        return g
                    }
                }), Object.defineProperty(t.media, "ended", {
                    get: function () {
                        return t.currentTime === t.duration
                    }
                }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function (t) {
                    var i = c.getAspectRatio(t[0], t[1]);
                    A.setAspectRatio.call(e, i)
                }), t.embed.setAutopause(t.config.autopause).then(function (e) {
                    t.config.autopause = e
                }), t.embed.getVideoTitle().then(function (i) {
                    t.config.title = i, b.setTitle.call(e)
                }), t.embed.getCurrentTime().then(function (e) {
                    u = e, c.dispatchEvent.call(t, t.media, "timeupdate")
                }), t.embed.getDuration().then(function (e) {
                    t.media.duration = e, c.dispatchEvent.call(t, t.media, "durationchange")
                }), t.embed.getTextTracks().then(function (e) {
                    t.media.textTracks = e, E.setup.call(t)
                }), t.embed.on("cuechange", function (e) {
                    var i = null;
                    e.cues.length && (i = c.stripHTML(e.cues[0].text)), E.setText.call(t, i)
                }), t.embed.on("loaded", function () {
                    c.is.element(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1)
                }), t.embed.on("play", function () {
                    t.media.paused && c.dispatchEvent.call(t, t.media, "play"), t.media.paused = !1, c.dispatchEvent.call(t, t.media, "playing")
                }), t.embed.on("pause", function () {
                    t.media.paused = !0, c.dispatchEvent.call(t, t.media, "pause")
                }), t.embed.on("timeupdate", function (e) {
                    t.media.seeking = !1, u = e.seconds, c.dispatchEvent.call(t, t.media, "timeupdate")
                }), t.embed.on("progress", function (e) {
                    t.media.buffered = e.percent, c.dispatchEvent.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && c.dispatchEvent.call(t, t.media, "canplaythrough")
                }), t.embed.on("seeked", function () {
                    t.media.seeking = !1, c.dispatchEvent.call(t, t.media, "seeked"), c.dispatchEvent.call(t, t.media, "play")
                }), t.embed.on("ended", function () {
                    t.media.paused = !0, c.dispatchEvent.call(t, t.media, "ended")
                }), t.embed.on("error", function (e) {
                    t.media.error = e, c.dispatchEvent.call(t, t.media, "error")
                }), window.setTimeout(function () {
                    return b.build.call(t)
                }, 0)
            }
        },
        C = c.getBrowser(),
        S = {
            setup: function () {
                if (this.media)
                    if (c.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), c.toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && c.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.supported.ui && (c.toggleClass(this.elements.container, this.config.classNames.pip.supported, u.pip && this.isHTML5 && this.isVideo), c.toggleClass(this.elements.container, this.config.classNames.airplay.supported, u.airplay && this.isHTML5), c.toggleClass(this.elements.container, this.config.classNames.stopped, this.config.autoplay), c.toggleClass(this.elements.container, this.config.classNames.isIos, C.isIos), c.toggleClass(this.elements.container, this.config.classNames.isTouch, u.touch)), this.isVideo && (this.elements.wrapper = c.createElement("div", {
                            class: this.config.classNames.video
                        }), c.wrap(this.media, this.elements.wrapper)), this.isEmbed) switch (this.provider) {
                        case "youtube":
                            T.setup.call(this);
                            break;
                        case "vimeo":
                            A.setup.call(this)
                    } else this.isHTML5 && b.setTitle.call(this);
                    else this.debug.warn("No media element found!")
            },
            cancelRequests: function () {
                this.isHTML5 && (Array.from(this.media.querySelectorAll("source")).forEach(c.removeElement), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
            }
        },
        N = {
            insertElements: function (e, t) {
                var i = this;
                c.is.string(t) ? c.insertElement(e, this.media, {
                    src: t
                }) : c.is.array(t) && t.forEach(function (t) {
                    c.insertElement(e, i.media, t)
                })
            },
            change: function (e) {
                var t = this;
                c.is.object(e) && "sources" in e && e.sources.length ? (S.cancelRequests.call(this), this.destroy.call(this, function () {
                    switch (c.removeElement(t.media), t.media = null, c.is.element(t.elements.container) && t.elements.container.removeAttribute("class"), t.type = e.type, t.provider = c.is.empty(e.sources[0].provider) ? i.html5 : e.sources[0].provider, t.supported = u.check(t.type, t.provider, t.config.inline), t.provider + ":" + t.type) {
                        case "html5:video":
                            t.media = c.createElement("video");
                            break;
                        case "html5:audio":
                            t.media = c.createElement("audio");
                            break;
                        case "youtube:video":
                        case "vimeo:video":
                            t.media = c.createElement("div", {
                                src: e.sources[0].src
                            })
                    }
                    t.elements.container.appendChild(t.media), c.is.boolean(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), "poster" in e && t.media.setAttribute("poster", e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.inline && t.media.setAttribute("playsinline", "")), b.addStyleHook.call(t), t.isHTML5 && N.insertElements.call(t, "source", e.sources), t.config.title = e.title, S.setup.call(t), t.isHTML5 && ("tracks" in e && N.insertElements.call(t, "track", e.tracks), t.media.load()), (t.isHTML5 || t.isEmbed && !t.supported.ui) && b.build.call(t)
                }, !0)) : this.debug.warn("Invalid source format")
            }
        },
        P = {
            x: 0,
            y: 0
        };
    return function () {
        function e(t, o) {
            var l = this;
            if (a(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.media = t, c.is.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || c.is.nodeList(this.media) || c.is.array(this.media)) && (this.media = this.media[0]), this.config = c.extend({}, s, o, function () {
                    try {
                        return JSON.parse(l.media.getAttribute("data-plyr-config"))
                    } catch (e) {
                        return {}
                    }
                }()), this.elements = {
                    container: null,
                    buttons: {},
                    display: {},
                    progress: {},
                    inputs: {},
                    settings: {
                        menu: null,
                        panes: {},
                        tabs: {}
                    },
                    captions: null
                }, this.captions = {
                    active: null,
                    currentTrack: null
                }, this.fullscreen = {
                    active: !1
                }, this.options = {
                    speed: [],
                    quality: []
                }, this.debug = new h(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", u), !c.is.nullOrUndefined(this.media) && c.is.element(this.media))
                if (this.media.plyr) this.debug.warn("Target already setup");
                else if (this.config.enabled)
                if (u.check().api) {
                    this.elements.original = this.media.cloneNode(!0);
                    var r = this.media.tagName.toLowerCase(),
                        d = null,
                        g = null,
                        f = null;
                    switch (r) {
                        case "div":
                            if (d = this.media.querySelector("iframe"), c.is.element(d)) {
                                if (g = d.getAttribute("src"), this.provider = c.getProviderByUrl(g), this.elements.container = this.media, this.media = d, this.elements.container.className = "", f = c.getUrlParams(g), !c.is.empty(f)) {
                                    var y = ["1", "true"];
                                    y.includes(f.autoplay) && (this.config.autoplay = !0), y.includes(f.playsinline) && (this.config.inline = !0), y.includes(f.loop) && (this.config.loop.active = !0)
                                }
                            } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                            if (c.is.empty(this.provider) || !Object.keys(i).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                            this.type = n.video;
                            break;
                        case "video":
                        case "audio":
                            this.type = r, this.provider = i.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), this.media.hasAttribute("playsinline") && (this.config.inline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                            break;
                        default:
                            return void this.debug.error("Setup failed: unsupported type")
                    }
                    this.storage = new p(this), this.supported = u.check(this.type, this.provider, this.config.inline), this.supported.api ? (this.media.plyr = this, c.is.element(this.elements.container) || (this.elements.container = c.createElement("div"), c.wrap(this.media, this.elements.container)), this.elements.container.setAttribute("tabindex", 0), v.global.call(this), b.addStyleHook.call(this), S.setup.call(this), this.config.debug && c.on(this.elements.container, this.config.events.join(" "), function (e) {
                        l.debug.log("event: " + e.type)
                    }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && b.build.call(this), this.ads = new m(this)) : this.debug.error("Setup failed: no support")
                } else this.debug.error("Setup failed: no support");
            else this.debug.error("Setup failed: disabled by config");
            else this.debug.error("Setup failed: no suitable element passed")
        }
        return o(e, [{
            key: "play",
            value: function () {
                return !this.ads.enabled || this.ads.initialized || this.ads.blocked ? this.media.play() : (this.ads.play(), null)
            }
        }, {
            key: "pause",
            value: function () {
                this.playing && this.media.pause()
            }
        }, {
            key: "togglePlay",
            value: function (e) {
                (c.is.boolean(e) ? e : !this.playing) ? this.play(): this.pause()
            }
        }, {
            key: "stop",
            value: function () {
                this.restart(), this.pause()
            }
        }, {
            key: "restart",
            value: function () {
                this.currentTime = 0
            }
        }, {
            key: "rewind",
            value: function (e) {
                this.currentTime = this.currentTime - (c.is.number(e) ? e : this.config.seekTime)
            }
        }, {
            key: "forward",
            value: function (e) {
                this.currentTime = this.currentTime + (c.is.number(e) ? e : this.config.seekTime)
            }
        }, {
            key: "increaseVolume",
            value: function (e) {
                var t = this.media.muted ? 0 : this.volume;
                this.volume = t + (c.is.number(e) ? e : 1)
            }
        }, {
            key: "decreaseVolume",
            value: function (e) {
                var t = this.media.muted ? 0 : this.volume;
                this.volume = t - (c.is.number(e) ? e : 1)
            }
        }, {
            key: "toggleCaptions",
            value: function (e) {
                if (this.supported.ui && c.is.element(this.elements.buttons.captions)) {
                    var t = c.is.boolean(e) ? e : -1 === this.elements.container.className.indexOf(this.config.classNames.captions.active);
                    this.captions.active !== t && (this.captions.active = t, c.toggleState(this.elements.buttons.captions, this.captions.active), c.toggleClass(this.elements.container, this.config.classNames.captions.active, this.captions.active), c.dispatchEvent.call(this, this.media, this.captions.active ? "captionsenabled" : "captionsdisabled"))
                }
            }
        }, {
            key: "toggleFullscreen",
            value: function (e) {
                if (!this.isAudio) {
                    if (f.enabled) {
                        if (!c.is.event(e) || e.type !== f.eventType) return void(this.fullscreen.active ? f.cancelFullScreen() : f.requestFullScreen(this.elements.container));
                        this.fullscreen.active = f.isFullScreen(this.elements.container)
                    } else this.fullscreen.active = !this.fullscreen.active, c.toggleClass(this.elements.container, this.config.classNames.fullscreen.fallback, this.fullscreen.active), this.fullscreen.active ? P = {
                        x: window.pageXOffset || 0,
                        y: window.pageYOffset || 0
                    } : window.scrollTo(P.x, P.y), document.body.style.overflow = this.fullscreen.active ? "hidden" : "";
                    c.is.element(this.elements.buttons.fullscreen) && c.toggleState(this.elements.buttons.fullscreen, this.fullscreen.active), c.dispatchEvent.call(this, this.media, this.fullscreen.active ? "enterfullscreen" : "exitfullscreen")
                }
            }
        }, {
            key: "airplay",
            value: function () {
                u.airplay && this.media.webkitShowPlaybackTargetPicker()
            }
        }, {
            key: "toggleControls",
            value: function (e) {
                var t = this;
                if (c.is.element(this.elements.controls) && this.supported.ui && !this.isAudio) {
                    var i = 0,
                        n = e,
                        s = !1;
                    if (c.is.boolean(e) || (c.is.event(e) ? (s = "enterfullscreen" === e.type, n = ["mouseenter", "mousemove", "touchstart", "touchmove", "focusin"].includes(e.type), ["mousemove", "touchmove", "touchend"].includes(e.type) && (i = 2e3), "focusin" === e.type && (i = 3e3, c.toggleClass(this.elements.controls, this.config.classNames.noTransition, !0))) : n = c.hasClass(this.elements.container, this.config.classNames.hideControls)), window.clearTimeout(this.timers.controls), n || this.paused || this.loading) {
                        if (c.toggleClass(this.elements.container, this.config.classNames.hideControls, !1) && c.dispatchEvent.call(this, this.media, "controlsshown"), this.paused || this.loading) return;
                        u.touch && (i = 3e3)
                    }
                    n && !this.playing || (this.timers.controls = window.setTimeout(function () {
                        (!t.elements.controls.pressed && !t.elements.controls.hover || s) && (c.hasClass(t.elements.container, t.config.classNames.hideControls) || c.toggleClass(t.elements.controls, t.config.classNames.noTransition, !1), c.toggleClass(t.elements.container, t.config.classNames.hideControls, !0) && (c.dispatchEvent.call(t, t.media, "controlshidden"), t.config.controls.includes("settings") && !c.is.empty(t.config.settings) && w.toggleMenu.call(t, !1)))
                    }, i))
                }
            }
        }, {
            key: "on",
            value: function (e, t) {
                c.on(this.elements.container, e, t)
            }
        }, {
            key: "off",
            value: function (e, t) {
                c.off(this.elements.container, e, t)
            }
        }, {
            key: "destroy",
            value: function (e) {
                var t = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = function () {
                        document.body.style.overflow = "", t.embed = null, i ? (Object.keys(t.elements).length && (t.elements.buttons && t.elements.buttons.play && Array.from(t.elements.buttons.play).forEach(function (e) {
                            return c.removeElement(e)
                        }), c.removeElement(t.elements.captions), c.removeElement(t.elements.controls), c.removeElement(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), c.is.function(e) && e()) : (c.replaceElement(t.elements.original, t.elements.container), c.dispatchEvent.call(t, t.elements.original, "destroyed", !0), c.is.function(e) && e.call(t.elements.original), t.elements = null)
                    };
                switch (this.provider + ":" + this.type) {
                    case "html5:video":
                    case "html5:audio":
                        b.toggleNativeControls.call(this, !0), n();
                        break;
                    case "youtube:video":
                        window.clearInterval(this.timers.buffering), window.clearInterval(this.timers.playing), null !== this.embed && this.embed.destroy(), n();
                        break;
                    case "vimeo:video":
                        null !== this.embed && this.embed.unload().then(n), window.setTimeout(n, 200)
                }
            }
        }, {
            key: "supports",
            value: function (e) {
                return u.mime.call(this, e)
            }
        }, {
            key: "isHTML5",
            get: function () {
                return this.provider === i.html5
            }
        }, {
            key: "isEmbed",
            get: function () {
                return this.isYouTube || this.isVimeo
            }
        }, {
            key: "isYouTube",
            get: function () {
                return this.provider === i.youtube
            }
        }, {
            key: "isVimeo",
            get: function () {
                return this.provider === i.vimeo
            }
        }, {
            key: "isVideo",
            get: function () {
                return this.type === n.video
            }
        }, {
            key: "isAudio",
            get: function () {
                return this.type === n.audio
            }
        }, {
            key: "paused",
            get: function () {
                return this.media.paused
            }
        }, {
            key: "playing",
            get: function () {
                return !this.paused && !this.ended && (!this.isHTML5 || this.media.readyState > 2)
            }
        }, {
            key: "ended",
            get: function () {
                return this.media.ended
            }
        }, {
            key: "currentTime",
            set: function (e) {
                var t = 0;
                c.is.number(e) && (t = e), t < 0 ? t = 0 : t > this.duration && (t = this.duration), this.media.currentTime = t.toFixed(4), this.debug.log("Seeking to " + this.currentTime + " seconds")
            },
            get: function () {
                return Number(this.media.currentTime)
            }
        }, {
            key: "seeking",
            get: function () {
                return this.media.seeking
            }
        }, {
            key: "duration",
            get: function () {
                var e = parseInt(this.config.duration, 10),
                    t = Number(this.media.duration);
                return Number.isNaN(e) ? t : e
            }
        }, {
            key: "volume",
            set: function (e) {
                var t = e;
                c.is.string(t) && (t = Number(t)), c.is.number(t) || (t = this.storage.get("volume")), c.is.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, this.muted && t > 0 && (this.muted = !1)
            },
            get: function () {
                return this.media.volume
            }
        }, {
            key: "muted",
            set: function (e) {
                var t = e;
                c.is.boolean(t) || (t = this.storage.get("muted")), c.is.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
            },
            get: function () {
                return this.media.muted
            }
        }, {
            key: "hasAudio",
            get: function () {
                return !this.isHTML5 || (!!this.isAudio || (this.media.mozHasAudio || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)))
            }
        }, {
            key: "speed",
            set: function (e) {
                var t = null;
                c.is.number(e) && (t = e), c.is.number(t) || (t = this.storage.get("speed")), c.is.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (" + t + ")")
            },
            get: function () {
                return this.media.playbackRate
            }
        }, {
            key: "quality",
            set: function (e) {
                var t = null;
                c.is.string(e) && (t = e), c.is.string(t) || (t = this.storage.get("quality")), c.is.string(t) || (t = this.config.quality.selected), this.options.quality.includes(t) ? (this.config.quality.selected = t, this.media.quality = t) : this.debug.warn("Unsupported quality option (" + t + ")")
            },
            get: function () {
                return this.media.quality
            }
        }, {
            key: "loop",
            set: function (e) {
                var t = c.is.boolean(e) ? e : this.config.loop.active;
                this.config.loop.active = t, this.media.loop = t
            },
            get: function () {
                return this.media.loop
            }
        }, {
            key: "source",
            set: function (e) {
                N.change.call(this, e)
            },
            get: function () {
                return this.media.currentSrc
            }
        }, {
            key: "poster",
            set: function (e) {
                this.isHTML5 && this.isVideo ? c.is.string(e) && this.media.setAttribute("poster", e) : this.debug.warn("Poster can only be set on HTML5 video")
            },
            get: function () {
                return this.isHTML5 && this.isVideo ? this.media.getAttribute("poster") : null
            }
        }, {
            key: "autoplay",
            set: function (e) {
                var t = c.is.boolean(e) ? e : this.config.autoplay;
                this.config.autoplay = t
            },
            get: function () {
                return this.config.autoplay
            }
        }, {
            key: "language",
            set: function (e) {
                if (c.is.string(e) && (this.toggleCaptions(!c.is.empty(e)), !c.is.empty(e))) {
                    var t = e.toLowerCase();
                    this.language !== t && (this.captions.language = t, E.setText.call(this, null), E.setLanguage.call(this), c.dispatchEvent.call(this, this.media, "languagechange"))
                }
            },
            get: function () {
                return this.captions.language
            }
        }, {
            key: "pip",
            set: function (e) {
                var t = "picture-in-picture",
                    i = "inline";
                if (u.pip) {
                    var n = c.is.boolean(e) ? e : this.pip === i;
                    this.media.webkitSetPresentationMode(n ? t : i)
                }
            },
            get: function () {
                return u.pip ? this.media.webkitPresentationMode : null
            }
        }], [{
            key: "supported",
            value: function (e, t, i) {
                return u.check(e, t, i)
            }
        }, {
            key: "loadSprite",
            value: function (e, t) {
                return c.loadSprite(e, t)
            }
        }]), e
    }()
});
