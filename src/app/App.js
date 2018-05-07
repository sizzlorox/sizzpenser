// Router
const { Switch, Route } = ReactRouter;

// Components
const Sidebar = require('./components/sidebar/Sidebar');

// Views
const Home = require('./views/Home');
const Reports = require('./views/Reports');

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
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/reports' component={Reports} />
              <Route component={Home} />
            </Switch>
          </div>
      </div>
    );
  }
}
module.exports = App;
