const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
function vigenereCipher(message, key, decrypt) {
  message = message.toUpperCase();
  key = copyWordUntilLength(key.toUpperCase(), message.length)

  let ciphertext = '';
  let keyIndex = 0;

  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      let keyChar = key.charCodeAt(keyIndex) - 65;
      let messageChar = charCode - 65;
      if (decrypt) {
        messageChar -= keyChar;
        if (messageChar < 0) {
          messageChar += 26;
        }
      } else {
        messageChar += keyChar;
        if (messageChar >= 26) {
          messageChar -= 26;
        }
      }
      ciphertext += String.fromCharCode(messageChar + 65);
      keyIndex++;
    } else {
      ciphertext += message.charAt(i);
    }
  }

  return ciphertext;
}

function copyWordUntilLength(word, maxLength) {
  let result = '';
  while (result.length < maxLength) {
    result += word;
  }
  return result.substring(0, maxLength);
}
function ValidateParameters(text, key) {
  if (!text || !key) throw new Error('Incorrect arguments!');

}

class VigenereCipheringMachine {

  constructor(isDirectMachine) {
    this.directMachine = isDirectMachine === undefined ? true : isDirectMachine;
  }

  encrypt(text, key) {
    ValidateParameters(text, key);
    if (this.directMachine) {
      return vigenereCipher(text, key, false);
    }
    else {
      let reversed = text.split('').reverse().join('');
      return vigenereCipher(reversed, key, true);
    }

  }
  decrypt(text, key) {
    ValidateParameters(text, key);
    if (this.directMachine) {
      return vigenereCipher(text, key, true);
    }
    let reversed = text.split('').reverse().join('');
    return vigenereCipher(reversed, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
