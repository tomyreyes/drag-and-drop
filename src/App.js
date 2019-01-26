import React, { Component } from 'react'
import './App.css'
import initialData from './initialData'
import DropBox from './components/DropBox'

class App extends Component {
  state = {
    initialData
  }
  render() {
    const { initialData } = this.state
    const boxes = initialData.boxOrder.map(boxId => {
      const box = initialData.boxes[boxId]
      const boxAnswers = box.answersIds.map(
        answerId => initialData.answers[answerId]
      )
      return <DropBox key={box.id} box={box} answers={boxAnswers} />
    })
    return <div>{boxes}</div>
  }
}

export default App
