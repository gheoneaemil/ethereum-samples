/*
 * @DIIMIIM
 * 15 dec 2021
 * This code sample will use a mnemonic passphrase to generate the associated account
 */
const bip39 = require("bip39");
const { hdkey } = require('ethereumjs-wallet');

// Add here the mnemonic passphrase
const mnemonic = "MNEMONIC_PASSPHRASE_HERE";

function generateAddressesFromSeed(mnemonic) {  
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const hdwallet = hdkey.fromMasterSeed(seed);
    const wallet_hdpath = "m/44'/60'/0'/0/";
    const wallet = hdwallet.derivePath(wallet_hdpath + i).getWallet();
    const address = "0x" + wallet.getAddress().toString("hex");
    const privateKey = wallet.getPrivateKey().toString("hex");
    console.log("Address: " + address + "\nPrivate key: " + privateKey);
}


generateAddressesFromSeed(mnemonic);
