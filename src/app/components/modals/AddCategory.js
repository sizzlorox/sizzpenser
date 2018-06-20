class AddCategory extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      isLoading: true,
      categoryValue: ''
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  updateCategoryValue(event) {
    this.setState({
      categoryValue: event.target.value
    });
  }

  handleAddCategory = () => {
    this.props.handler(this.state.categoryValue);
    this.setState({
      categoryValue: ''
    });
    document.getElementById('addCategory').style.display = 'none';
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
            Category: <input type='text' onChange={event => this.updateCategoryValue(event)} name='category' />
          </div>
          <button onClick={this.handleAddCategory}>
            Save
          </button>
        </div>
      </div>
    );
  }
}
module.exports = AddCategory;
