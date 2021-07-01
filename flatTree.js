const _ = require('lodash')

// should return:
// const ans = [
//   {​​​ id: 'root', children: [
//     {​​​ id: 'a', children: [
//       {​​​ id: '3', children: [
//         {​​​ id: '1', children: [
//           {​​​ id: 'e', children: [] }​​​,
//         ] }​​​,
//       ] }​​​,
//     {​​​ id: 'c', children: [] }​​​,
//     ] }​​​,
//   ] }​​​,
// ];

const flatTree = [
  { id: "root", children: ["a"] },
  { id: "a", children: ["3", "c"] },
  { id: "3", children: ["1"] },
  { id: "c", children: [] },
  { id: "1", children: ["e"] },
  { id: "e", children: [] },
]

const mapFlatToDeepTree = (flatTree) => {
  const copyTree = _.cloneDeep(flatTree)
  const root = _.find(copyTree, { id: "root" })
  const result = [root]

  const buildChildren = (id) => {
    const target = _.find(copyTree, { id })
    const children = _.map(target.children, childId => {
      const child = _.find(copyTree, { id: childId })
      child.children = buildChildren(childId) 
      return child
    }) || []

    return children
  }

  root.children = buildChildren(root.id)
  return result
}

const constdeepTree = mapFlatToDeepTree(flatTree)
console.log(JSON.stringify(constdeepTree, null, 2))
