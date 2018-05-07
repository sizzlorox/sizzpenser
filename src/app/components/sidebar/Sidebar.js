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
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Menu 1</a>
          </li>
          <li>
            <a href='#'>Menu 2</a>
          </li>
          <li>
            <a href='#'>Menu 3</a>
          </li>
        </ul>
      </div>
    );
  }
}
module.exports = SideBar;
