const initialData = {
  question: {
    id: 22,
    text:
      'Which devices represent inputs or outputs for a computer? Drag the answers to the correct box.'
  },
  answers: {
    1: { id: 1, text: 'Keyboard' },
    2: { id: 2, text: 'Camera' },
    3: { id: 3, text: 'Mouse' },
    4: { id: 4, text: 'Monitor' },
    5: { id: 5, text: 'Printer' },
    6: { id: 6, text: 'Microphone' }
  },
  boxes: {
    answers: {
      id: 'answers',
      title: 'Answers',
      answersIds: [1, 2, 3, 4, 5, 6],
      conceptBox: false
    },
    input: {
      id: 'input',
      title: 'Input',
      answersIds: [],
      conceptBox: false
    },
    computer: {
      id: 'computer',
      title: 'Computer',
      answersIds: [],
      conceptBox: true
    },
    output: {
      id: 'output',
      title: 'Output',
      answersIds: [],
      conceptBox: false
    }
  },
  boxOrder: ['input', 'computer', 'output'],
  answersBox: ['answers'],
  answerKey: {
    input: [1, 2, 3, 6],
    output: [4, 5],
    computer: [],
    answers: []
  }
}

export default initialData
