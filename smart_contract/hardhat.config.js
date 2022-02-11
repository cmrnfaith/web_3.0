require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/iVPsGkWh4d5mhJ_wPmKZqBtfpvT1sMVv",
      accounts: [
        "2c92ca1512b32d85d76b3d110f3c721f4af77919df7e81838f34e6f5dcb9d312",
      ],
    },
  },
}
