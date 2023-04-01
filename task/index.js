const { task } = require("hardhat/config");
const { readAddressList } = require ("../scripts/helper");

//获取lock1合约存储值为34
task("store","exchagne with lock v1").setAction(async (_,hre) => {
    const addressList = readAddressList();
    const proxyAddress = addressList['proxy'];
    const lock = await hre.ethers.getContractAt("Lock",proxyAddress);
    console.log("retrieve:",await lock.retrieve());

    console.log("store value:",await lock.store(34));
    console.log("retrieve:",await lock.retrieve());

});

//获取lock1合约的常数
task("getConstant","get Constant value").setAction(async(_,hre) => {
    const addressList = readAddressList();
    const proxyAddress = addressList['proxy'];
    const lock = await hre.ethers.getContractAt("Lock",proxyAddress);

    console.log("Constant;", await lock.getConstant());
})

//与v2合约交互
task("lockV2", "add value with Lock 2").setAction(async(_,hre)=> {
    const addressList = readAddressList();
    const proxyAddress = addressList['proxy'];
    const lock2 = await hre.ethers.getContractAt("Lock2", proxyAddress);

    console.log("retrieve:",await lock2.retrieve());
    console.log("increment:", await lock2.increment());
    console.log("retrieve:",await lock2.retrieve());
})

//与V3合约交互
task("lockV3", "exchange Name with Lock 3").setAction(async(_,hre)=> {
    const addressList = readAddressList();
    const proxyAddress = addressList['proxy'];
    const lock3 = await hre.ethers.getContractAt("Lock3", proxyAddress);

    console.log("retrieve:",await lock3.retrieve());
    console.log("name:", await lock3.name());

    const lockName = "Lock V3";
    await lock3.setName(lockName);
    console.log("Change name:", await lock3.name());
})




