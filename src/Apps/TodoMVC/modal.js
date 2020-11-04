import utils from '../utils';

export default class Store {
  constructor(id) {
    const { localStorage } = window;

    this.TODO_LIST = JSON.parse(localStorage.getItem(id) || '[]');
  }

  find = query => {
    return this.TODO_LIST.filter(query);
  }

  add = () => {
  }

  remove = () => {}

  update = () => {}

  count = () => {}
}
