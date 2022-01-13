(() => {
    const n = {
        234: (n, r, e) => {
            e.d(r, { Z: () => u });
            const t = e(81);
            const o = e.n(t);
            const a = e(645);
            const i = e.n(a);
            const c = e(667);
            const s = e.n(c);
            const l = new URL(e(199), e.b);
            const d = i()(o());
            const p = s()(l);
            d.push([
                n.id,
                `*,\r\n*::after,\r\n*::before {\r\n  --wheat-color: #f5deb3;\r\n  --black-color: #000;\r\n  --white-color: #fff;\r\n  --black-transp-color: #0000009e;\r\n  --black-moretransp-color: #0006;\r\n  --grey-color: #888;\r\n  --lightgrey-color: #aaa;\r\n  --indigo-color: #4b0082;\r\n  --darkgrey-color: #373737;\r\n  --darkviolet-color: #9400d3;\r\n  --blue-color: #5986c5;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  transition: 0.5s ease-in-out;\r\n  /* добавим плавность переходов для всех элементов страницы*/\r\n}\r\nimg {\r\n  display: block;\r\n  width: 100%;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: 'Playfair Display';\r\n  font-weight: normal;\r\n  letter-spacing: 1px;\r\n}\r\nbody {\r\n  background: var(--blue-color);\r\n  color: var(--darkgrey-color);\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  font-family: 'Open Sans', arial, sans-serif;\r\n  font-size: 14px;\r\n  height: 100vh;\r\n  line-height: 1;\r\n}\r\n\r\n.notes {\r\n  background-color: var(--darkviolet-color);\r\n  box-shadow: 10px 10px 10px -5px var(--black-transp-color);\r\n  box-shadow: 10px 10px 10px -5px var(--black-transp-color);\r\n  box-shadow: 10px 10px 10px -5px var(--black-transp-color);\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 350px;\r\n  margin-bottom: 10px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  margin-top: 10px;\r\n\r\n  opacity: 1;\r\n  padding: 10px;\r\n  transition: opacity 350ms ease, height 350ms ease 400ms;\r\n  width: 350px;\r\n}\r\n.delete_notes {\r\n  align-items: center;\r\n  display: flex;\r\n  height: 40px;\r\n  justify-content: center;\r\n  margin: 10px;\r\n  position: relative;\r\n  right: 10px;\r\n  width: 40px;\r\n}\r\n.delete_notes:hover {\r\n  background: var(--indigo-color);\r\n}\r\n.note_info {\r\n  background-color: var(--white-color);\r\n  height: 100%;\r\n  padding: 10px;\r\n  width: 100%;\r\n  word-wrap: break-word;\r\n}\r\n.add_notes {\r\n  align-items: center;\r\n  background-color: var(--darkviolet-color);\r\n  box-shadow: 10px 10px 10px -5px var(--black-transp-color);\r\n  box-shadow: 10px 10px 10px -5px var(--black-transp-color);\r\n  box-shadow: 10px 10px 10px -5px var(--black-transp-color);\r\n  display: flex;\r\n  height: 350px;\r\n  justify-content: center;\r\n  margin-bottom: 10px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 10px;\r\n\r\n  opacity: 1;\r\n  transition: opacity 350ms ease, height 350ms ease 400ms;\r\n  width: 350px;\r\n}\r\n.add_button {\r\n  background-color: var(--wheat-color);\r\n  height: 80%;\r\n  width: 80%;\r\n}\r\n.animate {\r\n  height: 0;\r\n  margin-bottom: 0;\r\n  margin-top: 0;\r\n  opacity: 0;\r\n}\r\n\r\n.modal {\r\n  background-color: var(--black-color);\r\n  background-color: var(--black-moretransp-color);\r\n  display: none;\r\n  height: 100%;\r\n  left: 0;\r\n  overflow: auto;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.modal-content {\r\n  background-color: var(--white-color);\r\n  border: 1px solid var(--grey-color);\r\n  height: 80%;\r\n  margin: 15% auto;\r\n  padding: 20px;\r\n  width: 80%;\r\n}\r\n\r\n.close {\r\n  color: var(--lightgrey-color);\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: var(--black-color);\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n#note_textarea {\r\n  height: 90%;\r\n  width: 90%;\r\n}\r\n.plusPic{\r\n  background-image: url(${p});\r\n}\r\n\r\n@media (max-width: 380px) {\r\n  .notes {\r\n    background-color: var(--darkviolet-color);\r\n    box-shadow: 10px 10px 10px -5px var(--black-transp-color);\r\n    box-shadow: 10px 10px 10px -5px var(--black-transp-color);\r\n    box-shadow: 10px 10px 10px -5px var(--black-transp-color);\r\n    display: flex;\r\n    height: 350px;\r\n    margin-bottom: 10px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 10px;\r\n\r\n    opacity: 1;\r\n    transition: opacity 350ms ease, height 350ms ease 400ms;\r\n    width: 350px;\r\n  }\r\n  .delete_notes {\r\n    align-items: center;\r\n    display: flex;\r\n    height: 40px;\r\n    justify-content: center;\r\n    margin: 10px;\r\n    position: absolute;\r\n    right: 10px;\r\n    width: 40px;\r\n  }\r\n  .delete_notes:hover {\r\n    background: var(--indigo-color);\r\n  }\r\n  .add_notes {\r\n    align-items: center;\r\n    background-color: var(--darkviolet-color);\r\n    box-shadow: 10px 10px 10px -5px var(--black-transp-color);\r\n    box-shadow: 10px 10px 10px -5px var(--black-transp-color);\r\n    box-shadow: 10px 10px 10px -5px var(--black-transp-color);\r\n    display: flex;\r\n    height: 350px;\r\n    justify-content: center;\r\n    margin-bottom: 10px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 10px;\r\n\r\n    opacity: 1;\r\n    transition: opacity 350ms ease, height 350ms ease 400ms;\r\n    width: 350px;\r\n  }\r\n  .add_button {\r\n    background-color: var(--wheat-color);\r\n    height: 80%;\r\n    width: 80%;\r\n  }\r\n  .animate {\r\n    height: 0;\r\n    margin-bottom: 0;\r\n    margin-top: 0;\r\n    opacity: 0;\r\n  }\r\n\r\n  .modal {\r\n    background-color: var(--black-color);\r\n    background-color: var(--black-moretransp-color);\r\n    display: none;\r\n    height: 100%;\r\n    left: 0;\r\n    overflow: auto;\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 1;\r\n  }\r\n\r\n  .modal-content {\r\n    background-color: var(--white-color);\r\n    border: 1px solid var(--grey-color);\r\n    height: 80%;\r\n    margin: 15% auto;\r\n    padding: 20px;\r\n    width: 80%;\r\n  }\r\n\r\n  .close {\r\n    color: var(--lightgrey-color);\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .close:hover,\r\n  .close:focus {\r\n    color: var(--black-color);\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n  }\r\n  #note_textarea {\r\n    height: 400px;\r\n  }\r\n}\r\n`,
                '',
            ]);
            const u = d;
        },
        645: (n) => {
            n.exports = function (n) {
                const r = [];
                return (
                    (r.toString = function () {
                        return this.map((r) => {
                            let e = '';
                            const t = void 0 !== r[5];
                            return (
                                r[4] &&
                                    (e += '@supports ('.concat(r[4], ') {')),
                                r[2] && (e += '@media '.concat(r[2], ' {')),
                                t &&
                                    (e += '@layer'.concat(
                                        r[5].length > 0 ? ' '.concat(r[5]) : '',
                                        ' {'
                                    )),
                                (e += n(r)),
                                t && (e += '}'),
                                r[2] && (e += '}'),
                                r[4] && (e += '}'),
                                e
                            );
                        }).join('');
                    }),
                    (r.i = function (n, e, t, o, a) {
                        typeof n === 'string' && (n = [[null, n, void 0]]);
                        const i = {};
                        if (t) {
                            for (let c = 0; c < this.length; c++) {
                                const s = this[c][0];
                                s != null && (i[s] = !0);
                            }
                        }
                        for (let l = 0; l < n.length; l++) {
                            const d = [].concat(n[l]);
                            (t && i[d[0]]) ||
                                (void 0 !== a &&
                                    (void 0 === d[5] ||
                                        (d[1] = '@layer'
                                            .concat(
                                                d[5].length > 0
                                                    ? ' '.concat(d[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(d[1], '}')),
                                    (d[5] = a)),
                                e &&
                                    (d[2]
                                        ? ((d[1] = '@media '
                                              .concat(d[2], ' {')
                                              .concat(d[1], '}')),
                                          (d[2] = e))
                                        : (d[2] = e)),
                                o &&
                                    (d[4]
                                        ? ((d[1] = '@supports ('
                                              .concat(d[4], ') {')
                                              .concat(d[1], '}')),
                                          (d[4] = o))
                                        : (d[4] = ''.concat(o))),
                                r.push(d));
                        }
                    }),
                    r
                );
            };
        },
        667: (n) => {
            n.exports = function (n, r) {
                return (
                    r || (r = {}),
                    n
                        ? ((n = String(n.__esModule ? n.default : n)),
                          /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                          r.hash && (n += r.hash),
                          /["'() \t\n]|(%20)/.test(n) || r.needQuotes
                              ? '"'.concat(
                                    n
                                        .replace(/"/g, '\\"')
                                        .replace(/\n/g, '\\n'),
                                    '"'
                                )
                              : n)
                        : n
                );
            };
        },
        81: (n) => {
            n.exports = function (n) {
                return n[1];
            };
        },
        379: (n) => {
            const r = [];
            function e(n) {
                for (var e = -1, t = 0; t < r.length; t++) {
                    if (r[t].identifier === n) {
                        e = t;
                        break;
                    }
                }
                return e;
            }
            function t(n, t) {
                for (var a = {}, i = [], c = 0; c < n.length; c++) {
                    const s = n[c];
                    const l = t.base ? s[0] + t.base : s[0];
                    const d = a[l] || 0;
                    const p = ''.concat(l, ' ').concat(d);
                    a[l] = d + 1;
                    const u = e(p);
                    const h = {
                        css: s[1],
                        media: s[2],
                        sourceMap: s[3],
                        supports: s[4],
                        layer: s[5],
                    };
                    if (u !== -1) {
                        r[u].references++, r[u].updater(h);
                    } else {
                        const g = o(h, t);
                        (t.byIndex = c),
                            r.splice(c, 0, {
                                identifier: p,
                                updater: g,
                                references: 1,
                            });
                    }
                    i.push(p);
                }
                return i;
            }
            function o(n, r) {
                const e = r.domAPI(r);
                return (
                    e.update(n),
                    function (r) {
                        if (r) {
                            if (
                                r.css === n.css &&
                                r.media === n.media &&
                                r.sourceMap === n.sourceMap &&
                                r.supports === n.supports &&
                                r.layer === n.layer
                            )
                                return;
                            e.update((n = r));
                        } else {
                            e.remove();
                        }
                    }
                );
            }
            n.exports = function (n, o) {
                let a = t((n = n || []), (o = o || {}));
                return function (n) {
                    n = n || [];
                    for (let i = 0; i < a.length; i++) {
                        const c = e(a[i]);
                        r[c].references--;
                    }
                    for (var s = t(n, o), l = 0; l < a.length; l++) {
                        const d = e(a[l]);
                        r[d].references === 0 &&
                            (r[d].updater(), r.splice(d, 1));
                    }
                    a = s;
                };
            };
        },
        569: (n) => {
            const r = {};
            n.exports = function (n, e) {
                const t = (function (n) {
                    if (void 0 === r[n]) {
                        let e = document.querySelector(n);
                        if (
                            window.HTMLIFrameElement &&
                            e instanceof window.HTMLIFrameElement
                        ) {
                            try {
                                e = e.contentDocument.head;
                            } catch (n) {
                                e = null;
                            }
                        }
                        r[n] = e;
                    }
                    return r[n];
                })(n);
                if (!t) {
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                }
                t.appendChild(e);
            };
        },
        216: (n) => {
            n.exports = function (n) {
                const r = document.createElement('style');
                return (
                    n.setAttributes(r, n.attributes), n.insert(r, n.options), r
                );
            };
        },
        565: (n, r, e) => {
            n.exports = function (n) {
                const r = e.nc;
                r && n.setAttribute('nonce', r);
            };
        },
        795: (n) => {
            n.exports = function (n) {
                const r = n.insertStyleElement(n);
                return {
                    update(e) {
                        !(function (n, r, e) {
                            let t = '';
                            e.supports &&
                                (t += '@supports ('.concat(e.supports, ') {')),
                                e.media &&
                                    (t += '@media '.concat(e.media, ' {'));
                            const o = void 0 !== e.layer;
                            o &&
                                (t += '@layer'.concat(
                                    e.layer.length > 0
                                        ? ' '.concat(e.layer)
                                        : '',
                                    ' {'
                                )),
                                (t += e.css),
                                o && (t += '}'),
                                e.media && (t += '}'),
                                e.supports && (t += '}');
                            const a = e.sourceMap;
                            a &&
                                typeof btoa !== 'undefined' &&
                                (t +=
                                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                        btoa(
                                            unescape(
                                                encodeURIComponent(
                                                    JSON.stringify(a)
                                                )
                                            )
                                        ),
                                        ' */'
                                    )),
                                r.styleTagTransform(t, n, r.options);
                        })(r, n, e);
                    },
                    remove() {
                        !(function (n) {
                            if (n.parentNode === null) return !1;
                            n.parentNode.removeChild(n);
                        })(r);
                    },
                };
            };
        },
        589: (n) => {
            n.exports = function (n, r) {
                if (r.styleSheet) {
                    r.styleSheet.cssText = n;
                } else {
                    while (r.firstChild) r.removeChild(r.firstChild);
                    r.appendChild(document.createTextNode(n));
                }
            };
        },
        199: (n, r, e) => {
            n.exports = `${e.p}e2d513c506c937f3a9ee.png`;
        },
    };
    const r = {};
    function e(t) {
        const o = r[t];
        if (void 0 !== o) return o.exports;
        const a = (r[t] = { id: t, exports: {} });
        return n[t](a, a.exports, e), a.exports;
    }
    (e.m = n),
        (e.n = (n) => {
            const r = n && n.__esModule ? () => n.default : () => n;
            return e.d(r, { a: r }), r;
        }),
        (e.d = (n, r) => {
            for (const t in r) {
                e.o(r, t) &&
                    !e.o(n, t) &&
                    Object.defineProperty(n, t, { enumerable: !0, get: r[t] });
            }
        }),
        (e.g = (function () {
            if (typeof globalThis === 'object') return globalThis;
            try {
                return this || new Function('return this')();
            } catch (n) {
                if (typeof window === 'object') return window;
            }
        })()),
        (e.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
        (() => {
            let n;
            e.g.importScripts && (n = `${e.g.location}`);
            const r = e.g.document;
            if (!n && r && (r.currentScript && (n = r.currentScript.src), !n)) {
                const t = r.getElementsByTagName('script');
                t.length && (n = t[t.length - 1].src);
            }
            if (!n) {
                throw new Error(
                    'Automatic publicPath is not supported in this browser'
                );
            }
            (n = n
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (e.p = n);
        })(),
        (e.b = document.baseURI || self.location.href),
        (() => {
            const n = e(379);
            const r = e.n(n);
            const t = e(795);
            const o = e.n(t);
            const a = e(569);
            const i = e.n(a);
            const c = e(565);
            const s = e.n(c);
            const l = e(216);
            const d = e.n(l);
            const p = e(589);
            const u = e.n(p);
            const h = e(234);
            const g = {};
            (g.styleTagTransform = u()),
                (g.setAttributes = s()),
                (g.insert = i().bind(null, 'head')),
                (g.domAPI = o()),
                (g.insertStyleElement = d()),
                r()(h.Z, g),
                h.Z && h.Z.locals && h.Z.locals;
            const m = document.getElementById('myModal');
            const x = document.getElementById('myModalError');
            const f = document.getElementById('errMessage');
            const v = document.getElementsByClassName('close')[0];
            async function b(n, r, e) {
                return (
                    await fetch(
                        'https://polite-jackal-95.hasura.app/v1/graphql',
                        {
                            headers: {
                                'content-type': 'application/json',
                                'x-hasura-admin-secret':
                                    'snBYRU9GUPQHFzuKQedvLi2l3UGG5X4C4s6uDA4DrHG8KGALtKS8PS8BvaPjilGl',
                            },
                            method: 'POST',
                            body: JSON.stringify({
                                query: n,
                                variables: e,
                                operationName: r,
                            }),
                        }
                    )
                ).json();
            }
            const y =
                '\n  mutation AddNotes($note_text: String = "") {\n    insert_notes(objects: {note_active: true, note_text: $note_text}) {\n      returning {\n        note_active\n        note_id\n        note_text\n      }\n    }\n  }\n  \n  mutation DeleteNotes($_eq: uuid = "") {\n    delete_notes(where: {note_id: {_eq: $_eq}}) {\n      returning {\n        note_id\n      }\n    }\n  }\n  \n  query GetNotes {\n    notes {\n      note_active\n      note_id\n      note_text\n    }\n  }\n';
            const w = document.getElementById('add_note');
            function k(n) {
                console.log(n.target.parentElement.parentElement.id),
                    n.target.parentElement.parentElement.classList.add(
                        'animate'
                    ),
                    document
                        .getElementById(n.target.parentElement.parentElement.id)
                        .remove(),
                    (async function (n) {
                        const { errors: r, data: e } = await (function (n) {
                            return b(y, 'DeleteNotes', { _eq: n });
                        })(n);
                        r &&
                            (console.error(r),
                            (f.innerHTML = 'Ошибка создания заметки!'),
                            (x.style.display = 'block'),
                            (v.onclick = function () {
                                x.style.display = 'none';
                            })),
                            console.log(e);
                    })(n.target.parentElement.parentElement.id),
                    console.log('Note was deleted');
            }
            function _(n, r) {
                if ((console.log(r), n)) {
                    (m.style.display = 'block'),
                        (v.onclick = function () {
                            m.style.display = 'none';
                            const n = (async function (n) {
                                const { errors: r, data: e } = await (function (
                                    n
                                ) {
                                    return b(y, 'AddNotes', { note_text: n });
                                })(n);
                                return (
                                    r &&
                                        (console.error(r),
                                        (f.innerHTML =
                                            'Ошибка создания заметки!'),
                                        (x.style.display = 'block'),
                                        (v.onclick = function () {
                                            x.style.display = 'none';
                                        })),
                                    console.log('CREATED NEW'),
                                    console.log(e),
                                    e.notes
                                );
                            })(document.getElementById('note_textarea').value);
                            const r = document.createElement('div');
                            r.id = n.note_id;
                            const e = document.createElement('div');
                            e.classList.add('note_info'),
                                (e.innerHTML =
                                    document.getElementById(
                                        'note_textarea'
                                    ).value),
                                r.appendChild(e),
                                r.classList.add('notes'),
                                r.classList.add('animate');
                            const t = document.createElement('div');
                            t.classList.add('delete_notes'), r.appendChild(t);
                            const o = document.createElement('span');
                            (o.innerHTML = 'x'),
                                o.addEventListener('click', k),
                                t.appendChild(o),
                                setTimeout(() => {
                                    r.classList.remove('animate');
                                }, 20),
                                document.body.insertBefore(r, w),
                                (document.getElementById(
                                    'note_textarea'
                                ).value = ''),
                                console.log('Note was added');
                        });
                } else {
                    const n = document.createElement('div');
                    n.id = r.note_id;
                    const e = document.createElement('div');
                    e.classList.add('note_info'),
                        (e.innerHTML = r.note_text),
                        n.appendChild(e),
                        n.classList.add('notes'),
                        n.classList.add('animate');
                    const t = document.createElement('div');
                    t.classList.add('delete_notes'), n.appendChild(t);
                    const o = document.createElement('span');
                    (o.innerHTML = 'x'),
                        o.addEventListener('click', k),
                        t.appendChild(o),
                        setTimeout(() => {
                            n.classList.remove('animate');
                        }, 20),
                        document.body.insertBefore(n, w),
                        (document.getElementById('note_textarea').value = ''),
                        console.log('Note was added');
                }
            }
            w.addEventListener('click', () => {
                _(!0, parseInt(1, 10));
            }),
                (async function () {
                    const { errors: n, data: r } = await b(y, 'GetNotes', {});
                    n &&
                        (console.error(n),
                        (f.innerHTML = 'Ошибка создания заметки!'),
                        (x.style.display = 'block'),
                        (v.onclick = function () {
                            x.style.display = 'none';
                        })),
                        console.log(r.notes.length);
                    for (let n = 0; n < r.notes.length; n++) _(!1, r.notes[n]);
                    console.log(r.notes.length);
                })();
        })();
})();
