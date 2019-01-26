import React, { Component } from 'react'
import './App.css'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from './initialData'
import DropBox from './components/DropBox'

class App extends Component {
  state = {
    initialData
  }
  onDragEnd = result => {
    console.log('hey')
  }

  render() {
    const { initialData } = this.state
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {initialData.boxOrder.map(boxId => {
          const box = initialData.boxes[boxId]
          const boxAnswers = box.answersIds.map(
            answerId => initialData.answers[answerId]
          )
          return <DropBox key={box.id} box={box} answers={boxAnswers} />
        })}
      </DragDropContext>
    )
  }
}

export default App
