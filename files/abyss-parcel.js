(() => {
  var t = {
      311: () => {
        let t;
        document.currentScript &&
          (t = document.currentScript.getAttribute('src').replace(/.js$/, ''));
        const e = (t) => !['import', 'auth'].includes(t),
          r = /^(\d+\.)?(\d+\.)?(\*|\d+)$/;
        class s extends HTMLElement {
          get import() {
            return this.getAttribute('import') || this.getAttribute('src');
          }
          connectedCallback() {
            if (t && this.import) {
              const [s, n] = this.import.split('@'),
                i = `abyss-frontend-x-${s}`,
                c = document.createElement(i);
              if (!document.getElementById(i)) {
                const e = document.createElement('script'),
                  c = r.test(n) ? n : `env/${n}`;
                (e.src = `${t}/${s}/${c}/${s}.js`),
                  (e.id = i),
                  document.head.appendChild(e);
              }
              Object.values(this.attributes).forEach((t) => {
                e(t.name) && c.setAttribute(t.name, t.value);
              });
              const a = { attributes: !0 };
              new MutationObserver((t) => {
                Object.values(t).forEach((t) => {
                  if (e(t.attributeName)) {
                    const e = this.getAttribute(t.attributeName);
                    c.setAttribute(t.attributeName, e);
                  }
                });
              }).observe(this, a),
                this.appendChild(c);
            }
          }
        }
        customElements.get('abyss-frontend') ||
          customElements.define('abyss-frontend', s);
      },
    },
    e = {};
  !(function r(s) {
    var n = e[s];
    if (void 0 !== n) return n.exports;
    var i = (e[s] = { exports: {} });
    return t[s](i, i.exports, r), i.exports;
  })(311);
})();
