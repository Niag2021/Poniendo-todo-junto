import './App.css';
import Datos from './componentes/PersonCards';

function App(){

  return (
    <div className="App">
      <Datos firstName="Jane" lastName="Doe" age="45" hairColor="Black"/>
      <Datos firstName="John" lastName="Smith" age="88" hairColor="Brown"/>
    </div>
  );
}

export default App;

/*
<h1>{this.props.lastName} ,  {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair color: {this.props.hairColor}</p>
                <button onClick={} >Birthday button for {this.props.firstName} {this.props.lastName}</button>
*/
