const {expect}  = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Lock (peoxy) V4 with name", function() {
    let lock;
    let lock2;
    let lock3;
    let lock4;

    beforeEach(async function() {
        const Lock = await ethers.getContractFactory("Lock");
        const Lock2 = await ethers.getContractFactory("Lock2");
        const Lock3 = await ethers.getContractFactory("Lock3");
        const Lock4 = await ethers.getContractFactory("Lock4");

        //初始化
        lock = await upgrades.deployProxy(Lock,[42],{initializer: 'store'});
        lock2 = await upgrades.upgradeProxy(lock.address, Lock2);
        lock3 = await upgrades.upgradeProxy(lock.address, Lock3);
        lock4 = await upgrades.upgradeProxy(lock.address, Lock4);
    })

    it("should retrieve value preiously stored and increment correctly", async function() {
        expect((await lock4.retrieve()).toString()).to.equal('42');
        await lock4.increment();
        expect((await lock4.retrieve()).toString()).to.equal('43');

        await lock2.store(100);
        expect((await lock2.retrieve()).toString()).to.equal('100');
    })

    it("should setName and getName correctly in V4", async function() {
        expect(lock4.name).to.be.undefined;
        expect(await lock4.getName()).to.equal("Name:");

        const lockName = "lock V4";
        await lock4.setName(lockName);
        expect(await lock4.getName()).to.equal("Name:"+ lockName);
    })
})