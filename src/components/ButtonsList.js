import React from 'react'
import styled from 'styled-components'

const CheckAnswerButton = styled.button`
  border-radius: 8px;
  min-width: 300px;
  min-height: 80px;
  background-color: #19e090;
  box-shadow: 5px 10px 8px #888888;
  @media (max-width: 576px) {
    min-height: 40px;
    min-width: 150px;
  }
`
const IncorrectButton = styled.button`
  border-radius: 8px;
  min-width: 300px;
  min-height: 80px;
  background-color: #ff0000;
  box-shadow: 5px 10px 8px #888888;
  @media (max-width: 576px) {
    min-height: 40px;
    min-width: 150px;
  }
`

const ButtonText = styled.span`
  font-size: 22px;
  color: white;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`

export default function ButtonsList(props) {
  const { checkAnswers, correct, incorrect, isCheckingAnswer, message } = props
  return (
    <div>
      {isCheckingAnswer && (
        <div className="fa-3x">
          <i className="fas fa-circle-notch fa-spin" />
        </div>
      )}

      {!correct && !incorrect && (
        <CheckAnswerButton onClick={checkAnswers}>
          <ButtonText>Check Answer</ButtonText>
        </CheckAnswerButton>
      )}
      {correct && (
        <CheckAnswerButton onClick={checkAnswers}>
          <ButtonText>{message}</ButtonText>
        </CheckAnswerButton>
      )}
      {incorrect && (
        <IncorrectButton onClick={checkAnswers}>
          <ButtonText>{message}</ButtonText>
        </IncorrectButton>
      )}
    </div>
  )
}
