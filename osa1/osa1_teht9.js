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
          <Button handleClick={
              () => this.setState({pos: this.state.pos +1})
              } text="hyvä"/>
          <Button handleClick={
              () => this.setState({neut: this.state.neut +1 })
              } text = "neutraali"/>
          <Button handleClick={
              () => this.setState({neg: this.state.neg + 1})
              } text="huono"/>
         <Otsikko title ="statistiikka"/>
         <Statistics pos={this.state.pos} neut={this.state.neut} neg={this.state.neg}/>
         <Statistic text="keskiarvo" formula =  
         {(this.state.pos * 1 + this.state.neg * -1 / (this.state.pos + this.state.neg + this.state.neut)).toFixed(3)}
         yht = {this.state.neg + this.state.pos + this.state.neut}
         />
         <Statistic text="positiivisia"
         formula= {(this.state.pos / (this.state.pos + this.state.neg + this.state.neut) * 100).toFixed(1)+"%"} 
         yht = {this.state.neg + this.state.pos + this.state.neut}
         />
         
        </div>    
    )
      }
  }
const Statistics = (props) => {
    const {pos, neut, neg} = props
    if (pos+neut+neg !== 0){
    return(
        <div> 
        <p>hyvä: {pos} </p>
         <p>neutraali: {neut} </p>
         <p>huono: {neg} </p>
        </div>
    )}
    return (
        <div>Ei yhtään palautetta annettu</div>
    )
}

const Statistic = (props) => {

    const {text, formula, yht} = props
    console.log(formula)
    if (yht !== 0){
        return (
           <p>{text}: {formula}</p>
        )
    }
    return null
}

const Button = (props) =>{
    console.log(props)
    const { handleClick, text } = props
    return (
        <button onClick = {handleClick}>
            {text}
        </button>
    )
}
  

const Otsikko = (props) => {
    return(
        <div> 
            <h1> {props.title} </h1>
        </div>
    )
}



ReactDOM.render(<App /> , document.getElementById('root'))
