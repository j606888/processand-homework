const sampleArray = [[["f"]], "m", [22, [["a"], [54, [112]], "d", [["s"], 8]]]]

// Please write your function below this line and comment your steps as needed:
const substituteArrayValue = (
  originalArray: any[],
  position: number,
  newValue: any
): any[] => {
  const buildSubArray = (subArray: any[]): any[] => {
    const result: any[] = []
    subArray.forEach((el) => {
      if (Array.isArray(el)) result.push(buildSubArray(el))
      else {
        position === 0 ? result.push(newValue) : result.push(el)
        position--
      }
    })

    return result
  }

  return buildSubArray(originalArray)
}

// run the task
console.log(JSON.stringify(substituteArrayValue(sampleArray, 5, "x"), null, 2))
