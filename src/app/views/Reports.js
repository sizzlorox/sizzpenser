// Components
const AddCategoryModal = require('../components/modals/AddCategory');

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
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  handleCategoryModal() {
    const modal = document.getElementById('addCategory');
    modal.style.display = 'block';
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      modal.style.display = 'none';
    }
  }

  handleAddCategory = (newCategory) => {
    console.log('added');
    this.setState({
      categories: this.state.categories.concat({
        name: newCategory,
        values: []
      })
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
        <button onClick={this.handleCategoryModal}>
          Add Category
        </button>
        <AddCategoryModal handler={this.handleAddCategory} />
        <button onClick={this.handleAddValue}>
          Add Value
        </button>
      </div>
    );
  }
}
module.exports = Reports;
