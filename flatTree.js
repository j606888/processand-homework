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
  const buildChildren = (id) => {
    const target = _.find(copyTree, { id })
    const children = _.map(target.children, childId => {
      const child = _.find(copyTree, { id: childId })
      child.children = buildChildren(childId) 
      return child
    })

    return children
  }

  const copyTree = _.cloneDeep(flatTree)
  const root = _.find(copyTree, { id: "root" })
  root.children = buildChildren(root.id)
  
  return [root]
}

const deepTree = mapFlatToDeepTree(flatTree)
console.log(JSON.stringify(deepTree, null, 2))
