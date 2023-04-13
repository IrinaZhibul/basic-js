const { NotImplementedError } = require('../extensions/index.js');
/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  let resultName = [];
  if (!Array.isArray(members)) return false;
  members.forEach(name => { if (typeof (name) == 'string') resultName.push(name.toUpperCase().trim()[0]) });
  resultName.sort((a, b) => a.localeCompare(b));
  console.log(resultName.join(""))
  return resultName.join("");
}




module.exports = {
  createDreamTeam
};
