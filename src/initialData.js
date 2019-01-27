const initialData = {
  answers: {
    1: { id: 1, text: 'Keyboard' },
    2: { id: 2, text: 'Camera' },
    3: { id: 3, text: 'Mouse' }
  },
  boxes: {
    1: {
      id: '1',
      title: 'Input',
      answersIds: ['1', '2', '3'],
      conceptBox: false
    },
    2: {
      id: '2',
      title: 'Computer',
      answersIds: [],
      conceptBox: true
    },
    3: {
      id: '3',
      title: 'Output',
      answersIds: [],
      conceptBox: false
    }
  },
  boxOrder: ['1', '2', '3']
}

export default initialData
