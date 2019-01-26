import React, { Component } from 'react'
import styled from 'styled-components'
import Answer from './Answer'

const Container = styled.div`
  margin: 8px;
  border: 1px solid;
  border-radius: 2px;
  width: 400px;
  text-align: center;
`

const Title = styled.h2`
  padding: 8px;
`

const AnswersList = styled.div`
  padding: 8px;
`

export default class DropBox extends Component {
  render() {
    const { answers, box } = this.props
    return (
      <Container>
        <Title>{box.title}</Title>
        <AnswersList>
          {answers.map(answer => (
            <Answer key={answer.id} answer={answer} />
          ))}
        </AnswersList>
      </Container>
    )
  }
}
