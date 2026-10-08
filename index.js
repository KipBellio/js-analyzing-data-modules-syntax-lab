require('datejs')

function combineUsers(...args){
  const combinedObject = {
    users: [],
    merge_date: Date.today().toString("M/d/yyyy")
  }

    for (let array of args){
      combinedObject.users = [...combinedObject.users, ...array];
    }
    return combinedObject;
}

console.log(combineUsers([{ id:1 }], [{ id:2 }]));




module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};