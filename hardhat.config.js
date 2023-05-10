require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.AU_SEPOLIA_RPC_URL,
      accounts: [process.env.TEST_PRIVATE_KEY]
    }
  }
};
