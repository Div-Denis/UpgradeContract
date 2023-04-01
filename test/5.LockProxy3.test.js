const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Lock (proxy) V3 with name", function () {
    let lock;
    let lock2;
    let lock3;

    beforeEach(async function () {
        const Lock = await ethers.getContractFactory("Lock");
        const Lock2 = await ethers.getContractFactory("Lock2");
        const Lock3 = await ethers.getContractFactory("Lock3");

        //初始化
        lock = await upgrades.deployProxy(Lock,[42], {initializer: 'store'});
        lock2 = await upgrades.upgradeProxy(lock.address, Lock2);
        lock3 = await upgrades.upgradeProxy(lock.address, Lock3);
    })

    it("should retrieve value previously stored and increment correctly", async function() {
        expect((await lock2.retrieve()).toString()).to.equal('42');
        await lock3.increment()
        expect((await lock2.retrieve()).toString()).to.equal('43');

        await lock2.store(100);
        expect((await lock2.retrieve()).toString()).to.equal('100');
    })

    it("should set name correctly in V3", async function(){
        expect(await lock3.name()).to.equals("");

        const lockName = "V3";
        await lock3.setName(lockName);
        expect(await lock3.name()).to.equal(lockName);
    })

    it("should get Constant correctly in V3", async function(){

        expect((await lock3.MY_CONSTANT()).toString()).to.equal("42")

    })
})