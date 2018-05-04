// Components
const Sidebar = require('./components/sidebar/Sidebar');

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
      <div className={classnames('container')}>
        <Sidebar />
        <div id='header'></div>
        <div id='content'></div>
        <div id='footer'></div>
      </div>
    );
  }
}
module.exports = App;
