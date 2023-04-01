# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

npm init -y
npm install --save-dev hardhat
npx hardhat
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm i @openzeppelin/contracts-upgradeable @openzeppelin/hardhat-upgrades @nomiclabs/hardhat-etherscan --save-dev
npm install dotenv
npm install --save-dev chai
npx hardhat test test/1.Lock.test.js
npx hardhat node
npx hardhat run scripts/1.deploy_lock.js
npx hardhat test test/2.LockProxy.test.js
npx hardhat run scripts/4.deploy_prepare4.js --network BSCTest
npx hardhat verify 0x889cFAF412008eBA144b0cFc19313C7E233B067F --network BSCTest
