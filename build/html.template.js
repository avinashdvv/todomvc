const template = () => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Simple JS Starter Kit</title>
      <link href="./app.css"> </link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/todomvc-app-css@2.3.0/index.css">
    </head>
    <body>
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
      <script src="./app.js"> </script>
    </body>
  </html>
`;

export default template;
