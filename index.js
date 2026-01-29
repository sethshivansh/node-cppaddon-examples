const myLib = require('nodeaddon');

const secretMessage = "My Top Secret Data-proect2 sample";
const associatedData = "user-session-id-4562222222"; // Context-specific data

 console.log('Testing encryption with native module:\n');
  const ciphertext = myLib.encrypt(secretMessage, associatedData);
  console.log("Encrypted:", ciphertext);
  console.log("Ciphertext (Hex):", ciphertext.toString('hex'));
  const plaintext = myLib.decrypt(ciphertext, associatedData);
  console.log("Decrypted:", plaintext);