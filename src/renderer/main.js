require('../app/app.scss');
const { BrowserRouter } = ReactRouter;
const App = require('../app/App');

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'), (err) => console.log(err));
