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
    const { initialData } = this.state
    const { destination, draggableId, source } = result
    if (!destination) {
      return
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const box = initialData.boxes[source.droppableId]
    const newAnswerIds = Array.from(box.answersIds)
    newAnswerIds.splice(source.index, 1)
    newAnswerIds.splice(destination.index, 0, draggableId)

    const newBox = {
      ...box,
      answersIds: newAnswerIds
    }

    const newState = {
      ...this.state,
      initialData: {
        ...this.state.initialData,
        boxes: {
          [newBox.id]: newBox
        }
      }
    }

    this.setState(newState)
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
