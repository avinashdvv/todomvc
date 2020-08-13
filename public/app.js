
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
'use strict';

var html = "<section class=\"todoapp\">\n  <header class=\"header\">\n    <h1>todos</h1>\n\n    <input class=\"new-todo\" placeholder=\"What needs to be done?\" autofocus>\n  </header>\n\n  <section style=\"display:none\" class=\"main\">\n    <input id=\"toggle-all\" class=\"toggle-all\" type=\"checkbox\">\n\n    <label for=\"toggle-all\">Mark all as complete</label>\n\n    <ul class=\"todo-list\"></ul>\n\n    <footer class=\"footer\">\n      <span class=\"todo-count\"></span>\n\n      <ul class=\"filters\">\n        <li>\n          <a href=\"#/\" class=\"selected\">All</a>\n        </li>\n        <li>\n        <a href=\"#/active\">Active</a>\n        </li>\n        <li>\n        <a href=\"#/completed\">Completed</a>\n        </li>\n      </ul>\n\n      <button class=\"clear-completed\">Clear completed</button>\n    </footer>\n  </section>\n</section>\n";

var views = [html];

const appElement = document.getElementById('app');
appElement.innerHTML = views;
