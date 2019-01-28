import { checkIfCorrect } from '../utils/checkIfCorrect'

it('The answers are correct.', () => {
  const boxProperties = [
    ['input', { answersIds: [1, 2, 3] }],
    ['output', { answersIds: [4, 5, 6] }]
  ]

  const answerKeyProperties = [['input', [1, 2, 3]], ['output', [4, 5, 6]]]

  expect(checkIfCorrect(boxProperties, answerKeyProperties)).toEqual(false)
})

it('The answer should be incorrect.', () => {
  const boxProperties = [
    ['input', { answersIds: [1, 2, 3] }],
    ['output', { answersIds: [4, 5, 6] }]
  ]

  const answerKeyProperties = [['input', [4, 5]], ['output', [1, 2]]]

  expect(checkIfCorrect(boxProperties, answerKeyProperties)).toEqual(true)
})
