import { compareArrays } from '../utils/compareArrays'

it('The arrays are the same.', () => {
  const array1 = [1, 2, 3, 4, 5]
  const array2 = [5, 4, 3, 1, 2]
  expect(compareArrays(array1, array2)).toEqual(true)
})

it('The arrays are not same.', () => {
  const array1 = [1, 2, 3, 4, 5]
  const array2 = [4, 3, 1, 2]
  expect(compareArrays(array1, array2)).toEqual(false)
})
