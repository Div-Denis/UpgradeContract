const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Lcok 2", function () {
    let lock2;

    beforeEach(async function () {
        const Lock2 = await ethers.getContractFactory("Lock2");
        lock2 = await Lock2.deploy();
        await lock2.deployed();
    });

    it("should retrieve value previously stored", async function () {
        await lock2.store(42);
        expect((await lock2.retrieve()).toString()).to.equal('42');

        await lock2.store(100);
        expect((await lock2.retrieve()).toString()).to.equal('100');
    });

    it("should increment value correctly", async function () {
        await lock2.store(42);
        await lock2.increment();
        expect((await lock2.retrieve()).toString()).to.equal('43');
    })
})