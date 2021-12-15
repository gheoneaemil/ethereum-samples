/*
 * @DIIMIIM
 * 15 dec 2021
 * This code sample will use a mnemonic passphrase to generate a serie of possible associated accounts
 */
const bip39 = require("bip39");
const { hdkey } = require('ethereumjs-wallet');


// Normally you should get the good account on the first position. If not, you can extend the length of output accounts
const count = 1;

// Add here the mnemonic passphrase
const mnemonic = "MNEMONIC_PASSPHRASE_HERE";

function generateAddressesFromSeed(mnemonic, count) {  
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const hdwallet = hdkey.fromMasterSeed(seed);
    const wallet_hdpath = "m/44'/60'/0'/0/";

    for (let i = 0; i < count; i++) {
      let wallet = hdwallet.derivePath(wallet_hdpath + i).getWallet();
      let address = "0x" + wallet.getAddress().toString("hex");
      let privateKey = wallet.getPrivateKey().toString("hex");
      console.log("Address: " + address + "\nPrivate key: " + privateKey);
    }
}


generateAddressesFromSeed(mnemonic, count);
