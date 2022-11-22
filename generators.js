function createGenerator(n) {
  let start = 1
  let currentValue = 0
  let n1 = 0
  let n2 = 1
  return function* generatorFunction() {
    while (start <= n) {
      yield currentValue
      n1 = n2
      n2 = currentValue
      currentValue = n1 + n2
      start += 1
    }
    return currentValue
  }
}

const generatorFunction = createGenerator(6)
const generatorObject = generatorFunction()

console.log([...generatorObject])

const generatorFunction2 = createGenerator(5)
const generatorObject2 = generatorFunction2()

for (let i = 0; i < 7; i += 1) {
  console.log(generatorObject2.next())
}
