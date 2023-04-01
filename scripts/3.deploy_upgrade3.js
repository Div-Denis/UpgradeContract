const { ethers, upgrades } = require("hardhat");
const { readAddressList, storeAddressList } = require("./helper");

const addressList = readAddressList();
const proxyAddress = addressList['proxy'];

async function main(){
    console.log("original Lock(proxy) address:", proxyAddress);
    const Lock3 = await ethers.getContractFactory("Lock3");
    console.log("upgrade to Lock3...");
    const lock3 = await upgrades.upgradeProxy(proxyAddress, Lock3);
    const Implementation = await upgrades.erc1967.getImplementationAddress(lock3.address);
    const Admin = await upgrades.erc1967.getAdminAddress(lock3.address);

    console.log("Proxy V3:", lock3.address);
    console.log("Implementation Address:", Implementation);
    console.log("Admin Address:", Admin);

    addressList['proxy V3'] = lock3.address;
    addressList['admin V3'] = Admin;
    addressList['implementation V3'] = Implementation;
    storeAddressList(addressList);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
})