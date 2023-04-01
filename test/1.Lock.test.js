const { expect } = require("chai")
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

describe("Lock",function() {
    let lock;

    beforeEach(async function () {
        const Lock = await ethers.getContractFactory("Lock");
        lock = await Lock.deploy();
        await lock.deployed();
    })

    it("should retrieve value previously stored", async function () {
        await lock.store(36);
        expect(await lock.retrieve()).to.equal(BigNumber.from('36'));
        
        await lock.store(120);
        expect(await lock.retrieve()).to.equal(BigNumber.from('120'));
    })
})