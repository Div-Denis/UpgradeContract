require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades') ;
require('dotenv').config()

require("./task");

const { BNB_URL_KEY,PRIVATE_KEY,BNB_API } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "BSCTest",
  networks:{
     BSCTest:{
      url: BNB_URL_KEY,
      accounts: [PRIVATE_KEY],
     },
  },
  etherscan:{
    apiKey:BNB_API,
  }
};
