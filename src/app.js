import './styles/app.styl';
import Apps from './Apps';

const html = `
  <div>
    <h1>Apps</h1>

    <li>
      ${Apps.map(app => app.render())}
    </li>
  </div>
`

function getLink(app){
  return `<a href=${app.name.toLowerCase()}>${app.name}</a>`;
}

function init() {
  const appElement = document.getElementById('app');
  appElement.innerHTML = html;
};

init();
