import React from 'react'
import Dicebox from './Dicebox'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            numbers: [0, 0, 0, 0, 0, 0] 
        }
        this.roll = this.roll.bind(this)
    }

    roll() {
        this.setState(prevState => {
            if(this.state.numbers[0] === 0){
                return {
                    numbers: [Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1)]
                }
            }else {
                return {
                    numbers: [Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1)]
                }
            }
        })
    }

    render() {
        return (
            <div>
                <div>
                    <Dicebox number={this.state.numbers[0]}/>
                    <p>Dice 1</p>
                </div>
                <div>
                    <Dicebox number={this.state.numbers[1]}/>
                    <p>Dice 2</p>
                </div>
                <div>
                    <Dicebox number={this.state.numbers[2]}/>
                    <p>Dice 3</p>
                </div>
                <div>
                    <Dicebox number={this.state.numbers[3]}/>
                    <p>Dice 4</p>
                </div>
                <div>
                    <Dicebox number={this.state.numbers[4]}/>
                    <p>Dice 5</p>
                </div>
                <div>
                    <Dicebox number={this.state.numbers[5]}/>
                    <p>Dice 6</p>
                </div>
                <button onClick={this.roll}>Roll</button>
            </div>
        )
    }
}

export default App