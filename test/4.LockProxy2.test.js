const { expect } = require("chai")
const { ethers, upgrades } = require("hardhat");

describe("Lock Proxy", function () {
    let lock;
    let lock2;

    beforeEach(async function () {
        const Lock = await ethers.getContractFactory("Lock");
        const Lock2 = await ethers.getContractFactory("Lock2");

        //部署代理合约lock
        lock = await upgrades.deployProxy(Lock, [42], {initializer:'store'});
        
        //升级合约
        lock2 = await upgrades.upgradeProxy(lock.address, Lock2);
    });

    it("should retrieve value previously stored and increment correctly",async function () {
        expect((await lock2.retrieve()).toString()).to.equal('42');

        await lock2.increment();
        expect((await lock2.retrieve()).toString()).to.equal('43');
        
        await lock2.store(100);
        expect((await lock2.retrieve()).toString()).to.equal('100');
    })
})