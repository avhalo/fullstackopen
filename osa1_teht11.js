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
         <table>
            
         <Statistics pos={this.state.pos} neut={this.state.neut} neg={this.state.neg}/>
         <Statistic text="keskiarvo" formula =  
         {(this.state.pos * 1 + this.state.neg * -1 / (this.state.pos + this.state.neg + this.state.neut)).toFixed(3)}
         yht = {this.state.neg + this.state.pos + this.state.neut}
         />
         <Statistic text="positiivisia"
         formula= {(this.state.pos / (this.state.pos + this.state.neg + this.state.neut) * 100).toFixed(1)+"%"} 
         yht = {this.state.neg + this.state.pos + this.state.neut}
         />
        
         </table>
        </div>    
    )
      }
  }
const Statistics = (props) => {
    const {pos, neut, neg} = props
    if (pos+neut+neg !== 0){
    return(
        <tbody>
        <tr>
            <td> hyvä:</td> 
            <td> {pos}</td> 
        </tr>
        <tr>
            <td>neutraali:</td>
            <td> {neut}</td>
         </tr>
         <tr>
            <td>huono</td>
            <td> {neg} </td>
        </tr>
        </tbody>
    )}
    return (
        <tbody>
            <tr>
                <td>
                    Ei yhtään palautetta annettu
                </td>
            </tr>

        </tbody>
    )
}

const Statistic = (props) => {

    const {text, formula, yht} = props
    console.log(formula)
    if (yht !== 0){
        return (
            <tbody>
            <tr>
           <td>{text} </td>
           <td> {formula}</td>
            </tr>
            </tbody>
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
