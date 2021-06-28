/**
 * GENERAL GUIDELINES
 * -----------------------------------------------------------------------------
 * You have a total of 30 minutes for this task. Please make sure to send us your
 * solution (no matter if you finish it or not) wthin 5 minutes after the time
 * is up via email. If you hand in any later than 35 minutes, your result may not
 * be considered in the application process.
 *
 * Please use proper TypeScript and add return types, etc. to your function.
 *
 * No libraries are allowed for this task.
 */
/**
 * TASK
 * -----------------------------------------------------------------------------
 * Write a function that substitutes the value of an element at position "p"
 * inside a nested array. The position "p" refers to the index inside a flattened (!)
 * array. Thus, "p" is different from the actual index, as it completely "ignores"
 * nested arrays.
 *
 * Example 1: If you had an array ['a', 'b', 'c', ['d', 'e'], 'f'] and you want
 * to insert 'x' at position p=4, the result would look like this:
 * ['a', 'b', 'c', ['d', 'x'], 'f'].
 *
 * We substitute value "e" with "x" because in a flat array it would be at the
 * position 4:
 *   0    1    2    3    4    5
 * ['a', 'b', 'c', 'd', 'e', 'f'].
 *
 * Example 2: If you had an array [[0], 1, [2, [3, 4, [5]]]] and you want to insert 'x'
 * at position p=5, the result would look like this: [[0], 1, [2, [3, 4, ['x']]]].
 */
var sampleArray = [[["f"]], "m", [22, [["a"], [54, [112]], "d", [["s"], 8]]]];
// Please write your function below this line and comment your steps as needed:
var substituteArrayValue = function (originalArray, position, newValue) {
    var buildSubArray = function (subArray) {
        var result = [];
        subArray.forEach(function (el) {
            if (Array.isArray(el))
                result.push(buildSubArray(el));
            else {
                position === 0 ? result.push(newValue) : result.push(el);
                position--;
            }
        });
        return result;
    };
    return buildSubArray(originalArray);
};
// run the task
console.log(JSON.stringify(substituteArrayValue(sampleArray, 5, "x"), null, 2));
