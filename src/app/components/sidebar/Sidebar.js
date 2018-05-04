class SideBar extends React.Component {
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
      <div id='sidebar'>
        <a href='#'>Home</a>
        <a href='#'>Expense Reports</a>
      </div>
    );
  }
}
module.exports = SideBar;
