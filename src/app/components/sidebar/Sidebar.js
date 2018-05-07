// Router
const { NavLink } = ReactRouter;

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
            <NavLink exact to='/' activeStyle={{ color: 'red' }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/reports' activeStyle={{ color: 'red' }}>
              Reports
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
module.exports = SideBar;
