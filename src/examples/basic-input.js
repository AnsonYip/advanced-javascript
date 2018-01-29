/* Basic example demonstrating input - using stateful components */
class BasicInput extends React.Component {
  constructor(props) {
    super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    this.state = {
      userInput: '', output:[]
    };
  }
  handleChange(e) {
    this.setState({userInput: e.target.value});
  }
  handleClick(){
      this.state.output.push(<li>{this.state.userInput}</li>);                  
        this.setState({output: this.state.output});
      
        //this.setState({output: e.target.output});
  }
    
  
  render() {
      //you can put normal javascript here
    return (
      <div>
          <p>
            Please enter some input
          </p>
          <input onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Add</button>
          <p>
            {this.state.output}
          </p>
      </div>
    ); 
  }
}

const renderBasicInput = () => {
  ReactDOM.render(
    <div>
      This is a simple example to demonstrate a reactive update.
      <BasicInput/>
    </div>,
    document.getElementById('root')
  );
};
