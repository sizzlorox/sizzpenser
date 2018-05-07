class AddCategory extends React.Component {
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
      <div id='addCategory' className={classnames('modal')}>
        <div className={classnames('modal-content')}>
          <div className={classnames('modal-header')}>
            <span className={classnames('close')}>&times;</span>
            <h2>Add a Category</h2>
          </div>
          <div className={classnames('modal-body')}>
            Category: <input type='text' name='category' />
          </div>
          <button>
            Save
        </button>
        </div>
      </div>
    );
  }
}
module.exports = AddCategory;
