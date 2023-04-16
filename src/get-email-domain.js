const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let parts = email.split('@');
  let domain = parts[parts.length - 1];
  while (domain.startsWith('.')) {
    domain = domain.substring(1);
  }
  return domain;
}

module.exports = {
  getEmailDomain
};
