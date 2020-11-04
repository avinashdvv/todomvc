
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
'use strict';

class TodoMVC {
  constructor(name) {
    this.name = name;
    this.state = new Store(name);
  }

  render() {
    return `
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/todomvc-app-css@2.3.0/index.css">

          <section class="todoapp">

          <header class="header">
            <h1>todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus>
          </header>

          <section style="display:none" class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">

            <label for="toggle-all">Mark all as complete</label>

            <ul class="todo-list"></ul>

            <footer class="footer">
              <span class="todo-count"></span>
              <ul class="filters">
                <li>
                  <a href="#/" class="selected">All</a>
                </li>
                <li>
                <a href="#/active">Active</a>
                </li>
                <li>
                <a href="#/completed">Completed</a>
                </li>
              </ul>
              <button class="clear-completed">Clear completed</button>
            </footer>
          </section>
        </section>

        <footer class="info">
          <p>Part of <a href="http://todomvc.com">Basket</a></p>
        </footer>
        <link rel="stylesheet" href="node_modules/todomvc-common/base.css">
      `;
  }

}

var Apps = [new TodoMVC('TodoMVC', {
  route: 'todomvc'
})];

const html = `
  <div>
    <h1>Apps</h1>

    <li>
      ${Apps.map(getLink)}
    </li>
  </div>
`;

function getLink(app) {
  return `<a href=${app.name.toLowerCase()}>${app.name}</a>`;
}

function init() {
  const appElement = document.getElementById('app');
  appElement.innerHTML = html;
}
init();
