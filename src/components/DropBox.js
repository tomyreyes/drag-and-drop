import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import InnerList from './InnerList'

export const BoxContainer = styled.div`
  margin: 8px;
  border: 1px solid;
  border-radius: 4px;
  box-shadow: 5px 10px 8px #888888;
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    margin: 4px;
  }
`

const Title = styled.h2`
  padding: 8px;
  color: #fff;
  font-weight: normal;
  @media (max-width: 576px) {
    font-size: 1em;
  }
`

export const Header = styled.div``

const AnswersList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isConcept ? 'grey' : props.isDraggingOver ? 'skyblue' : 'inherit'};
  flex-grow: 1;
  min-height: 150px;
  @media (max-width: 576px) {
    min-height: 50px;
    padding: 4px;
  }
`

export default class DropBox extends Component {
  render() {
    const { answers, box } = this.props
    return (
      <BoxContainer>
        <Header>
          <Title>{box.title}</Title>
        </Header>
        <Droppable droppableId={box.id} isDropDisabled={box.conceptBox}>
          {(provided, snapshot) => (
            <AnswersList
              isConcept={box.conceptBox}
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {answers && <InnerList answers={answers} />}
              {provided.placeholder}
            </AnswersList>
          )}
        </Droppable>
      </BoxContainer>
    )
  }
}
