const { render } = require('react-dom');
const App = require('../app/App');

render((
  <App />
), document.getElementById('app'), (err) => console.log(err));