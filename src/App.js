import React, { Component } from 'react'
import './App.css'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import initialData from './initialData'
import DropBox from './components/DropBox'

const Container = styled.div`
  display: flex;
`
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

    const startingBox = initialData.boxes[source.droppableId]
    const endingBox = initialData.boxes[destination.droppableId]
    if (startingBox === endingBox) {
      const newAnswerIds = Array.from(startingBox.answersIds)
      newAnswerIds.splice(source.index, 1)
      newAnswerIds.splice(destination.index, 0, draggableId)

      const newBox = {
        ...startingBox,
        answersIds: newAnswerIds
      }

      const newState = {
        ...this.state,
        initialData: {
          ...this.state.initialData,
          boxes: {
            ...this.state.initialData.boxes,
            [newBox.id]: newBox
          }
        }
      }

      this.setState(newState)
      return
    }

    const startingBoxAnswersIds = Array.from(startingBox.answersIds)
    startingBoxAnswersIds.splice(source.index, 1)
    const newStartingBox = {
      ...startingBox,
      answersIds: startingBoxAnswersIds
    }
    const endingBoxAnswersIds = Array.from(endingBox.answersIds)
    endingBoxAnswersIds.splice(destination.index, 0, draggableId)

    const newEndingBox = {
      ...endingBox,
      answersIds: endingBoxAnswersIds
    }
    const newState = {
      ...this.state,
      initialData: {
        ...this.state.initialData,
        boxes: {
          ...this.state.initialData.boxes,
          [newStartingBox.id]: newStartingBox,
          [newEndingBox.id]: newEndingBox
        }
      }
    }

    this.setState(newState)
    return
  }

  render() {
    const { initialData } = this.state
    return (
      <Container>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {initialData.boxOrder.map(boxId => {
            const box = initialData.boxes[boxId]
            let boxAnswers
            if (box.answersIds.length > 0) {
              boxAnswers = box.answersIds.map(
                answerId => initialData.answers[answerId]
              )
            }
            return <DropBox key={box.id} box={box} answers={boxAnswers} />
          })}
        </DragDropContext>
      </Container>
    )
  }
}

export default App
