import React, { Component } from 'react'
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
    return <Container>{answer.text}</Container>
  }
}
