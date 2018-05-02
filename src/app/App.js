const React = require('react');
const ReactDOM = require('react-dom');

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
      <div>
        Hello World
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'), (err) => console.log(err));