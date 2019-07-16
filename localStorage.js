const localStorageMock = (function() {
  let store = {}
  return {
    getItem: function(key) {
      return store[key] || null
    },
    setItem: function(key, value) {
      store[key] = value.toString()
    },
    removeItem: function(key) {
      delete store[key]
    },
    clear: function() {
      store = {}
    }
  }
})()

Object.defineProperty(window, 'localStorage2', {
  value: localStorageMock
});
localStorage2.setItem('test', 'test');
console.log(localStorage2.getItem('test'));
localStorage2.removeItem('test');
localStorage2.setItem('server', 'losAngel');
localStorage2.clear();
console.log(localStorage2.getItem('server'));
