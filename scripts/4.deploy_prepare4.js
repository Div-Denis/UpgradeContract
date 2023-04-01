const { ethers, upgrades } = require("hardhat");
const { readAddressList,storeAddressList } = require("./helper");

const addressList = readAddressList();
const proxyAddress = addressList['proxy'];

async function main(){
    console.log("original Lock(proxy) Address", proxyAddress);
    const Lock4 = await ethers.getContractFactory("Lock4");
    console.log("Preparing upgrade to Lock4...");
    const lock4Address = await upgrades.prepareUpgrade(proxyAddress,Lock4);
    console.log("Lock4 implementation contract Address:",lock4Address);
    const admin = await upgrades.erc1967.getAdminAddress(proxyAddress);

    addressList['proxy V4'] = proxyAddress;
    addressList['admin V4'] = admin;
    addressList['implementation V4'] = lock4Address;
    storeAddressList(addressList);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
})