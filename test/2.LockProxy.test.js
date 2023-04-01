const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe('Lock(proxy)', function () {
    let lock;

    beforeEach(async function () {
        const Lock = await ethers.getContractFactory("Lock");
        lock = await upgrades.deployProxy(Lock,[42], {initializer: 'store'});
    });

        it("should retrieve value previously stored", async function () {

            console.log(lock.address);
            expect((await lock.retrieve()).toString()).to.equal('42');

            await lock.store(100);
            expect((await lock.retrieve()).toString()).to.equal('100');
        })
    
})