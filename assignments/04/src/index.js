import React from 'react';
import ReactDOM from 'react-dom';

function getAjaxPromise(url) {
  return new Promise(resolve => {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if(httpRequest.readyState === XMLHttpRequest.DONE) {
        resolve(httpRequest.responseText);
      }
    };
    httpRequest.open('GET', url);
    httpRequest.send();
  });
}

/*
 * This is a template to get you started on Assignment #4. 
 *
 * You can put all of your code in this file to work on the assignment.
 *
 * If you forget how to install or compile this project, refer to the README.txt
 */

    class PokePage extends React.Component {
    constructor(props) {
      super(props);
        
        this.enteredInput = this.enteredInput.bind(this);
        this.searchPoke = this.searchPoke.bind(this);
        this.state = {
            inputInfo: ''
        };
        
        this.state = {
            image: '',
            name: '',
            types: '',
            moves: '',
            
        };
        
        console.log('success!')
    }
        
        
        
        
        
    
    enteredInput(e){
        this.setState({inputInfo: e.target.value});
    }
    searchPoke(){
        let httpsDomain = 'https://pokeapi.co/api/v2/pokemon/';
        let forwardSlash = "/";
        let url = httpsDomain+this.state.inputInfo+forwardSlash;
        
        getAjaxPromise(url).then(function(res){
              let data = JSON.stringify(res);
              return data;
        })
        
//        this.setState({data: this.getAjaxPromise(url).then(function(res){
//            let info = JSON.stringify(res);
//            return info;
//        })
//    })
        
        
    }
    
        let = image;
        let = name;
        let = types;
        let = moves;
        
        getAjaxPromise(url)
            .then(JSON.parse(data) => {
                image = data.image;
                name = data.name;
                types = data.types;
                moves = data.moves;
            
                this.setState({image: image});
                this.setState({name: name});
                this.setState({types: types});
                this.setState({moves: moves});
            
            });
        
    render() {
        return (
            <div>
                <input className="input" onChange={this.enteredInput}/>
                <button className="button" type="button" onClick={this.searchPoke}>search</button>
            
                <p>
                    image:{this.state.image}
                    name:{this.state.name}
                    types:{this.state.types}
                    moves:{this.state.moves}
                </p>
            </div>
        );
    }
  }



ReactDOM.render(
  <div className="example-style">
        <PokePage/>
    </div>,
  document.getElementById('root')
);
