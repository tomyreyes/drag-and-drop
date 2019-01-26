import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`

export default class Answer extends Component {
  render() {
    const { answer } = this.props
    return (
      <Draggable draggableId={answer.id} index={this.props.index}>
        {provided => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {answer.text}
          </Container>
        )}
      </Draggable>
    )
  }
}
