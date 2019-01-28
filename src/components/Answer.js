import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  @media (max-width: 576px) {
    font-size: 1em;
    padding: 4px;
  }
`
const AnswerText = styled.p`
  margin: 1px;
  padding: 2px;

  @media (max-width: 576px) {
    font-size: 0.75em;
  }
`

export default class Answer extends Component {
  render() {
    const { answer } = this.props
    return (
      <Draggable draggableId={answer.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <AnswerText>{answer.text}</AnswerText>
          </Container>
        )}
      </Draggable>
    )
  }
}
