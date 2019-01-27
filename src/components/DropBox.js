import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import InnerList from './InnerList'

const Container = styled.div`
  margin: 8px;
  border: 1px solid;
  border-radius: 2px;
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  padding: 8px;
`

const AnswersList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`

export default class DropBox extends Component {
  render() {
    const { answers, box } = this.props
    console.log(answers)
    return (
      <Container>
        <Title>{box.title}</Title>
        <Droppable droppableId={box.id} isDropDisabled={box.conceptBox}>
          {(provided, snapshot) => (
            <AnswersList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {answers && <InnerList answers={answers} />}
              {provided.placeholder}
            </AnswersList>
          )}
        </Droppable>
      </Container>
    )
  }
}
