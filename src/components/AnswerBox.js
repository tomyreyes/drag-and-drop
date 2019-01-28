import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import InnerList from './InnerList'

const Container = styled.div`
  margin: 8px;
  border: 1px solid;
  border-radius: 4px;
  box-shadow: 5px 10px 8px #888888;
  width: 300px;
  text-align: center;
  display: inline-block;
  flex-direction: column;
`
const Header = styled.div`
  padding: 8px;
  background-color: turquoise;
`
const Title = styled.h2`
  padding: 8px;
  color: #fff;
  font-weight: normal;
  @media (max-width: 576px) {
    font-size: 1em;
    padding: 4px;
  }
`

const AnswersList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`

export default function AnswerBox(props) {
  const { box, answers } = props
  return (
    <Container>
      <Header>
        <Title>{box.title}</Title>
      </Header>

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
