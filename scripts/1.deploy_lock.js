const { ethers, upgrades } = require("hardhat");
const { readAddressList, storeAddressList } = require("./helper");

async function main () {
    //合约工厂存储Lock合约
    const Lock = await ethers.getContractFactory("Lock");
    console.log("Deploying Lock...");
    //代理部署合约
    const lock = await upgrades.deployProxy(Lock,[42], {initializer: 'initialize'});
    await lock.deployed();
    //获得执行合约地址
    const ImplementationAddress = await upgrades.erc1967.getImplementationAddress(lock.address);
    //获得Admin地址
    const AdminAddress = await upgrades.erc1967.getAdminAddress(lock.address);
    
    //打印代理合约地址
    console.log("Lock(paoxy) address:", lock.address);
    
    console.log("Implementation Address",ImplementationAddress );
    console.log("Admin Address", AdminAddress);

    const addressList = readAddressList();
    addressList['proxy'] = lock.address;
    addressList['admin'] = AdminAddress;
    addressList['implementation'] = ImplementationAddress;
    storeAddressList(addressList);

}

main().catch((error)=> {
    console.error(error);
    process.exit(1);
})