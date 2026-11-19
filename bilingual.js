/* AppNho Garment Academy bilingual runtime
   Content is translated only through reviewed dictionaries/data-i18n keys.
   No machine translation and no destructive text replacement. */
(function () {
  'use strict';
  var STORAGE_KEY = 'appnho_garment_language';
  var LANGS = ['vi', 'en'];
  var dictionaries = Object.create(null);
  var current = 'vi';
  var observer = null;

  function readStoredLanguage() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return LANGS.indexOf(value) >= 0 ? value : 'vi';
    } catch (e) { return 'vi'; }
  }

  function getDictionary(lang) {
    return dictionaries[lang] || Object.create(null);
  }

  function translateElement(el, lang) {
    if (!el || el.nodeType !== 1) return;
    var key = el.getAttribute('data-i18n');
    var dict = getDictionary(lang);
    if (key) {
      if (!el.hasAttribute('data-i18n-source-text')) {
        el.setAttribute('data-i18n-source-text', el.textContent);
      }
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      } else if (lang === 'vi') {
        el.textContent = el.getAttribute('data-i18n-source-text');
      }
    }
    var htmlKey = el.getAttribute('data-i18n-html');
    if (htmlKey) {
      if (!el.hasAttribute('data-i18n-source-html')) {
        el.setAttribute('data-i18n-source-html', el.innerHTML);
      }
      if (Object.prototype.hasOwnProperty.call(dict, htmlKey)) {
        el.innerHTML = dict[htmlKey];
      } else if (lang === 'vi') {
        el.innerHTML = el.getAttribute('data-i18n-source-html');
      }
    }
    ['title', 'placeholder', 'aria-label'].forEach(function (attr) {
      var attrKey = el.getAttribute('data-i18n-' + attr);
      var sourceAttr = 'data-i18n-source-' + attr;
      if (attrKey) {
        if (!el.hasAttribute(sourceAttr)) {
          el.setAttribute(sourceAttr, el.getAttribute(attr) || '');
        }
        if (Object.prototype.hasOwnProperty.call(dict, attrKey)) {
          el.setAttribute(attr, dict[attrKey]);
        } else if (lang === 'vi') {
          el.setAttribute(attr, el.getAttribute(sourceAttr));
        }
      }
    });
    if (el.querySelectorAll) {
      el.querySelectorAll('[data-i18n], [data-i18n-html], [data-i18n-title], [data-i18n-placeholder], [data-i18n-aria-label]')
        .forEach(function (child) { translateElement(child, lang); });
    }
  }

  function apply(root) {
    translateElement(root || document.documentElement, current);
    updateControl();
  }

  function updateControl() {
    var control = document.getElementById('appnho-language-switch');
    if (!control) return;
    control.querySelectorAll('[data-lang-choice]').forEach(function (button) {
      var selected = button.getAttribute('data-lang-choice') === current;
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
      button.classList.toggle('is-active', selected);
    });
    var html = document.documentElement;
    html.setAttribute('lang', current);
    html.setAttribute('data-appnho-language', current);
    var status = document.getElementById('appnho-language-status');
    var ready = html.getAttribute('data-appnho-i18n-ready') === 'true';
    if (status) {
      status.hidden = current !== 'en' || ready;
      status.textContent = 'The English edition is being prepared. Some sections may still appear in Vietnamese.';
    }
  }

  function setLanguage(lang) {
    if (LANGS.indexOf(lang) < 0) return;
    current = lang;
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    apply(document.documentElement);
    window.dispatchEvent(new CustomEvent('appnho:languagechange', {
      detail: { language: current, page: location.pathname }
    }));
  }

  function register(lang, map) {
    if (LANGS.indexOf(lang) < 0 || !map || typeof map !== 'object') return;
    dictionaries[lang] = Object.assign(dictionaries[lang] || {}, map);
    if (lang === current) apply(document.documentElement);
  }

  function mountControl() {
    if (document.getElementById('appnho-language-switch')) return;
    var wrap = document.createElement('div');
    wrap.id = 'appnho-language-switch';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Language selector');
    wrap.innerHTML =
      '<span class="appnho-language-caption">LANGUAGE</span>' +
      '<button type="button" data-lang-choice="vi" aria-pressed="true">VI</button>' +
      '<button type="button" data-lang-choice="en" aria-pressed="false">EN</button>';
    wrap.addEventListener('click', function (event) {
      var button = event.target.closest('[data-lang-choice]');
      if (button) setLanguage(button.getAttribute('data-lang-choice'));
    });
    var status = document.createElement('div');
    status.id = 'appnho-language-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    status.hidden = true;
    document.body.appendChild(wrap);
    document.body.appendChild(status);
  }

  function start() {
    mountControl();
    current = readStoredLanguage();
    apply(document.documentElement);
    if (window.MutationObserver && document.body) {
      observer = new MutationObserver(function (records) {
        records.forEach(function (record) {
          record.addedNodes.forEach(function (node) {
            if (node.nodeType === 1) translateElement(node, current);
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  window.AppNhoI18n = {
    version: '1.0.0',
    getLanguage: function () { return current; },
    setLanguage: setLanguage,
    register: register,
    apply: apply,
    t: function (key) {
      var dict = getDictionary(current);
      return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
    },
    setPageReady: function (ready) {
      document.documentElement.setAttribute('data-appnho-i18n-ready', ready ? 'true' : 'false');
      updateControl();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();