// Router
const { BrowserRouter, Switch, Route } = ReactRouter;

// Components
const Sidebar = require('./components/sidebar/Sidebar');

// Views
const Home = require('./views/Home');

class App extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className={classnames('flex-container')}>
        <Sidebar />
        <div id='content'>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/reports' component={Home} />
              <Route component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
module.exports = App;
