function answer1() {
  /* Replace 'undefined' with some JSX */
  return (<div>Hello world</div>);
}


function answer2() {
  class BuggyComponent extends React.Component {
    render() {
      return (
        <div>
          a + b =
          {this.props.a + this.props.b}
        </div>
      );
    }
  }

  return (
    <BuggyComponent a={4} b={7}/>
  );
}


function answer3() {
  function AddAPropToMe(someProps) {
    return (
      <div>
        {someProps.one}
        , {someProps.two}
        , {someProps.three}
        ,
        is a sort of fun game!
      </div>
    );
  }

  return (
    <AddAPropToMe
      one={'Tic'}
      two={'tac'}
      three={'toe'}
    />
  );
}


function answer4() {
  class InputComponent extends React.Component {
    constructor(props) {
      super(props);
        
        this.inputTextBox = this.inputTextBox.bind(this);

      this.state = {
        userInput: ''
      };
    }
      
      inputTextBox(e){
          this.setState({userInput: e.target.value});
      }
      
    render() {
      return (
        <div>
          <input onChange={this.inputTextBox}/>
          <p>
            The user typed `{this.state.userInput}`
          </p>
        </div>
      );
    }
  }

  return <InputComponent/>;
}

function answer5() {
  class Dots extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
       
    
    }
    componentDidMount() {
      var counter = function() {
        console.log(this.state.count);
        this.setState({
          count: ((this.state.count + 1) % 3) + 1
        });
         
          
      }.bind(this);

      setInterval(counter, 1000);
    }
    conditionCount(){
        var ConCount = function(){
          if(this.state.count % 3 === 0){
              return(
                <div>...</div> 
              )
          }
          else if(this.state.count % 2 === 0){
              return(
                <div>..</div>
              )
          }
          else{
              return(
                <div>.</div>
              )
          }
      }.bind(this);
    }
   
      
    render() {
      var dots = (this.state.count);

      return (
        <div>
          {dots}
        </div>
      );
    }
  }

  return <Dots/>;
}

function answer6() {
  /*function convertMeToArrowSyntax(a, b, c) {
    return a * (b - c);
  }*/
    var convertMeToArrowSyntax = (a, b, c) => {return a * (b - c)};

  return convertMeToArrowSyntax(3, 7, 5);
}

function answer7() {
  var myObject = {
    x: 8,
    y: 3
  };

  var addXtoY = function() {
      
    return this.x + this.y;
  }.bind(myObject);
    

  try {
    return addXtoY();
  } catch(e) {
    return String(e);
  }
}

function answer8() {
  var myObject = {
    x: 8,
    y: 3,
    addXtoY: function() {
      return this.x + this.y;
    }
  };

  var Component = function(props) {
    return (
      <div>
        AddXtoY returned {props.callback()}
      </div>
    );
  }.bind(myObject);

  return (
    <Component callback={myObject.addXtoY}/>
  );
}