export const test = state => {
  console.log('get test');
  return state.test
}

export const response = state => state.response

export const test2 = state => {
  return (state.testArray)
}

export const test3 = state => {
  let min = 0
  let max = state.testArray.length
  console.log(Math.random());
  return (state.testArray[Math.floor(Math.random() * (max - min) + min)])
}

export const testArray2 = state => {
  return state.testArray ?
    state.testArray[1] :
    null
}
