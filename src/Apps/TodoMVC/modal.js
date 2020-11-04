import { logger } from '../utils';

export default class Store {
  constructor(storeId) {
    localStorage(storeId);
  }

  add = (newTodo, CB) => {
    const store = getStore();

    setStore({
      ...store,
      items: [ ...store.items, newTodo]
    }, CB);
  }

  remove = (todoId) => {
    const store = getStore();

    setStore({
      ...store,
      items: store.items.filter(({ id }) => id !== todoId)
    }, CB);
  }

  update = (updateTodo) => {
    const store = getStore();

    setStore({
      ...store,
      items: store.items.map((todo) => {
        if (todo.id === updateTodo.id) {
          return updateTodo;
        }

        return todo;
      })
    }, CB);
  }

  count = () => {
    const store = getStore();

    return store.items.length;
  }

  find = (searchTerm) => {
    const store = getStore();

    // TODO: can be written batter manner
    return store.items.filter(todo => {
      return todo.name.includes(searchTerm)
    })
  }
}


function localStorage(storeId) {
  return {
    get: () => {
      return JSON.parse(window.localStorage.getItem(storeId) || `{
        id: ${storeId},
        items: []
      }`);
    },
    set: (newStoreData, callback) => {
      window.localStorage.setItem(newStoreData);
      logger(newStoreData);
      callback(newStoreData);
    }
  }
}
