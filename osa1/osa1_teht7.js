import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        pos: 0,
        neut:0, 
        neg: 0
      }
  
    }
    render() {
        console.log('renderöidään')
        return (
          <div>
          <Otsikko title= "Anna palautetta"/>
          <button onClick={
              () => this.setState({pos: this.state.pos +1})
              }>
          hyvä
          </button>
          <button onClick={
              () => this.setState({neut: this.state.neut +1 })
              }>
          neutraali
          </button>
          <button onClick={
              () => this.setState({neg: this.state.neg + 1})
              }>
          huono
          </button>
         <Otsikko title ="statistiikka"/>
         <div>
         <p>hyvä: {this.state.pos} </p>
         <p>neutraali: {this.state.neut} </p>
         <p>huono: {this.state.neg} </p>
         <p>keskiarvo: 
         {(this.state.pos * 1 + this.state.neg * -1 / (this.state.pos + this.state.neg + this.state.neut)).toFixed(3)}</p>
         <p>positiivisia: {(this.state.pos / (this.state.pos + this.state.neg + this.state.neut) * 100).toFixed(1)}% </p>
         </div>
        </div>    
    )
      }
  }
  

const Otsikko = (props) => {
    return(
        <div> 
            <h1> {props.title} </h1>
        </div>
    )
}



ReactDOM.render(<App /> , document.getElementById('root'))
