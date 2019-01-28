export const compareArrays = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.sort().every(function(value, index) {
      return value === arr2.sort()[index]
    })
  )
}
