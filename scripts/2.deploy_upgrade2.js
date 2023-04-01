const { ethers, upgrades } = require("hardhat");
const { readAddressList, storeAddressList} = require("./helper");

const addressList = readAddressList();
const proxyAddress = addressList['proxy'];
//const proxyAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

async function main() {
    console.log("original Lock(proxy)", proxyAddress.address);
    const Lcok2 = await ethers.getContractFactory("Lock2");
    console.log("Upgrade to Lock2...");
    //升级合约
    const lock2 = await upgrades.upgradeProxy(proxyAddress, Lcok2);
    //执行合约地址
    const ImplementationAddress = await upgrades.erc1967.getImplementationAddress(lock2.address);
    //Admin合约地址
    const Admin = await upgrades.erc1967.getAdminAddress(lock2.address);

    console.log("Lock2 Address:", lock2.address);
    console.log("Implementation Address:", ImplementationAddress);
    console.log("Admin Address:", Admin);

    addressList['proxy V2'] = lock2.address;
    addressList['admin V2'] = Admin;
    addressList['implementation V2'] = ImplementationAddress;
    storeAddressList(addressList);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
})