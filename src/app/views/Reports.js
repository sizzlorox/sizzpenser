class Reports extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      isLoading: true,
      categories: [{
        name: 'Initial Category',
        values: ['Initial Value']
      },
      {
        name: 'Second Category',
        values: ['Second Value']
      },
      {
        name: 'Third Category',
        values: ['Third Value']
      }]
    };

    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.handleAddValue = this.handleAddValue.bind(this);
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  handleAddCategory() {
    this.setState({
      categories: this.state.categories.concat({ name: 'test', values: [] })
    });
  }

  handleAddValue() {
    const indexToUpdate = this.state.categories.findIndex(category => category.name === 'Initial Category');
    const newObject = this.state.categories;
    newObject[indexToUpdate].values = this.state.categories.find(category => category.name === 'Initial Category').values.concat('test value');
    this.setState({
      categories: newObject
    });
  }

  render() {
    return (
      <div>
        <h1>
          Reports
        </h1>
        <table>
          <tbody>
            <tr>
              {this.state.categories.map(category => (<th>{category.name}</th>))}
            </tr>
            {this.state.categories.map(category => category.values.map((value, i, array) => category.name !== array[i > 0 ? i - 1 : i].name ? (<td>{value}</td>) : (<tr key={i}><td>{value}</td></tr>)))}
          </tbody>
        </table>
        <button onClick={this.handleAddCategory}>
          Add Category
        </button>
        <button onClick={this.handleAddValue}>
          Add Value
        </button>
      </div>
    );
  }
}
module.exports = Reports;
