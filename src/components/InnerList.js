import React, { Component } from 'react'
import Answer from './Answer'

export default class InnerList extends Component {
  shouldComponentUpdate(nextProps) {
    const { answers } = this.props
    if (nextProps.answers === answers) {
      return false
    }
    return true
  }
  render() {
    const { answers } = this.props
    return answers.map((answer, index) => (
      <Answer key={answer.id} answer={answer} index={index} />
    ))
  }
}
