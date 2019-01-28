import React, { Component } from 'react'
import './App.css'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import initialData from './initialData'
import AnswerBox from './components/AnswerBox'
import DropBox from './components/DropBox'
import ButtonsList from './components/ButtonsList'
import { checkIfCorrect } from './utils/checkIfCorrect'
import { BoxContainer, Header } from './components/DropBox'

const MainLayout = styled.div`
  text-align: center;
  margin: 0;
  font-family: sans-serif;
`

const ScoreBlock = styled.div`
  margin: 8px;
  border-radius: 50%;
`

const ScoreHeader = styled.div`
  display: flex;
  & ${ScoreBlock}:nth-child(1) {
    background: #534ee8;
  }
  & ${ScoreBlock}:nth-child(2) {
    background: #ffe05b;
  }
  align-items: center;
  justify-content: center;
`

const QuestionHeader = styled.h1`
  font-weight: normal;
`
const QuestionText = styled.h2`
  font-weight: normal;
  @media (max-width: 576px) {
    font-size: 1em;
  }
`

const ScoreText = styled.h3`
  min-width: 100px;
  font-weight: normal;
  padding: 0px 4px;
  color: #fff;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & ${BoxContainer}:nth-child(1) ${Header} {
    background: #0043ff;
  }
  & ${BoxContainer}:nth-child(2) ${Header} {
    background: #00ff88;
  }
  & ${BoxContainer}:nth-child(3) ${Header} {
    background: #ff0000;
  }
  @media (max-width: 576px) {
    display: inline-block;
  }
`
class App extends Component {
  state = {
    initialData,
    correct: false,
    incorrect: false,
    message: '',
    isCheckingAnswer: false,
    elapsed: 0,
    attempts: 0,
    startTime: Date.now(),
    timerOn: true
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

  checkAnswers = () => {
    const { initialData } = this.state

    this.setState(
      {
        isCheckingAnswer: true,
        attempts: this.state.attempts + 1
      },
      () => {
        const boxEntries = Object.entries(initialData.boxes)
        const answerKeyEntries = Object.entries(initialData.answerKey)
        const isIncorrect = checkIfCorrect(boxEntries, answerKeyEntries)
        if (isIncorrect) {
          this.setState({
            correct: false,
            incorrect: true,
            message: 'Nice Try. One or more answers are incorrect.',
            isCheckingAnswer: false
          })
          return
        }
        this.setState({
          correct: true,
          incorrect: false,
          timerOn: false,
          message: `Good job! You answered correctly!`,
          isCheckingAnswer: false
        })
      }
    )
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 50)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick = () => {
    const { startTime, timerOn } = this.state
    if (timerOn) {
      this.setState({ elapsed: new Date() - startTime })
    }
  }

  render() {
    const {
      initialData,
      correct,
      incorrect,
      isCheckingAnswer,
      message,
      attempts,
      elapsed
    } = this.state

    var elapsedTime = Math.round(elapsed / 100)
    var seconds = (elapsedTime / 10).toFixed(1)

    return (
      <MainLayout>
        <ScoreHeader>
          <ScoreBlock>
            <ScoreText>Attempts: {attempts}</ScoreText>
          </ScoreBlock>
          <ScoreBlock>
            <ScoreText>Time: {seconds}</ScoreText>
          </ScoreBlock>
        </ScoreHeader>

        <QuestionHeader>Question # {initialData.question.id}:</QuestionHeader>
        <QuestionText>{initialData.question.text}</QuestionText>

        <DragDropContext onDragEnd={this.onDragEnd}>
          <FlexContainer>
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
          </FlexContainer>
          {initialData.answersBox.map(id => {
            const answerBox = initialData.boxes[id]
            let answersInBox
            if (answerBox.answersIds.length > 0) {
              answersInBox = answerBox.answersIds.map(
                answerId => initialData.answers[answerId]
              )
            }
            return (
              <AnswerBox
                key={answerBox.id}
                box={answerBox}
                answers={answersInBox}
              />
            )
          })}
        </DragDropContext>
        <ButtonsList
          isCheckingAnswer={isCheckingAnswer}
          correct={correct}
          incorrect={incorrect}
          message={message}
          checkAnswers={this.checkAnswers}
        />
      </MainLayout>
    )
  }
}

export default App
