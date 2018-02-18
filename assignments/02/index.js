//class IndexJs extends React.Component{
//    constructor(props){
//        super(props);
//        this.state = {
//            x: "millisecond"
//        }
//    }
//}



const formatTime = (time) => {
    if(time < 10) {
      return '0' + time;
    }
    return time;
  }

function TimeDisplay(props){
    
    let centiseconds = formatTime(Math.floor(props.millisecond % 1000 / 10));
    let seconds = formatTime(Math.floor(props.millisecond % 60000 / 1000));
    let minutes = formatTime(Math.floor(props.millisecond / 60000));
    
    if(props.millisecond === 0){
        return(

            <div>
                Times up!
            </div>
        );
    }
    else{
        return(
            <div>

            {/*props.millisecond*/}
            {minutes}:{seconds}:{centiseconds}
            </div>
        );
    }
    
}//function

class Watch extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            currentMilliseconds: props.currentMilliseconds,
            countDown: props.countDown
        };
        
        this.counter();  
    }
    
   /* counter(){
        setInterval(
            function(){
                let newTime = this.state.currentMilliseconds;
                
                newTime += 1;
                this.setState({
                    currentMilliseconds: newTime
                });
            }.bind(this),1000
        );
    } */
    
    Controls(){
        setInterval(
            function(){
            let countDown = this.state.countDown;
            if(id === "countDown"){

                countDown -= 1;
                this.setState({
                   countDown: countDown 
                });
            }
            else{
                countDown += 1;
                this.setState({
                   countDown: countDown 
                });
            }
                
               
            return( 
                <input onClick={this.Controls} type="radio" id="countDown">Count Down<br>
                <input onClick={this.Controls} type="radio" id="countUp" checked="checked">Count Up<br>
            );
            
        }.bind(this), 1000
    );
    
}
    
    render(){
        return(
            <div>
                <TimeDisplay millisecond={ this.state.countDown}/>
                
                {this.state.countDown}
                //{this.state.currentMilliseconds}
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Controls/>
        <Watch countdown={2000}/>
    </div>,
  document.getElementById('root')
);
