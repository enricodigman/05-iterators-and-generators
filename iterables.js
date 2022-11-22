/* eslint-disable func-names */
/* eslint-disable object-shorthand */
function createIterable(n) {
  let start = 1
  let currentValue = 0
  let n1 = 0
  let n2 = 1
  return {
    [Symbol.iterator]: function () {
      return {
        next() {
          let result
          if (start <= n) {
            result = { value: currentValue, done: false }
            n1 = n2
            n2 = currentValue
            currentValue = n1 + n2
            start += 1
            return result
          }
          return { done: true }
        },
      }
    },
  }
}

const iterable1 = createIterable(3)
console.log([...iterable1])
