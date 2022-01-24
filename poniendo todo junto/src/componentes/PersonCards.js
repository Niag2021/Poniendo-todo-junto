import { Component } from "react";

class Datos extends Component{

    constructor(props){
        super(props);
        this.state = {
            contador: 1
        }
    }

    clickFn(e){
        this.setState({
            contador: this.state.contador + 1 
        })

    }
    
    render(){
        return(
            <div>
                <h1>{this.props.lastName} ,  {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair color: {this.props.hairColor}</p>               
                <button onClick={e=> this.clickFn(e)}>Birthday Button for {this.props.lastName} {this.props.firstName} -  {this.state.contador}
                </button>
            </div>
        );
    }
}

export default Datos;