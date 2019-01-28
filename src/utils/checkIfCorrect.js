import { compareArrays } from './compareArrays'

export const checkIfCorrect = (boxProperties, answerKeyProperties) => {
  return boxProperties.some(box => {
    let isEqual = null
    answerKeyProperties.forEach(answerBox => {
      if (box[0] === answerBox[0]) {
        isEqual = compareArrays(box[1].answersIds, answerBox[1])
      }
    })
    return isEqual === false
  })
}
