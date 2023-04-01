// import * as fs from "fs";
const  fs  = require("fs");

const readAddressList = function () {
    return JSON.parse(fs.readFileSync("address.json", "utf-8"));
};

const storeAddressList = function (addressList){
    fs.writeFileSync("address.json", JSON.stringify(addressList, null, "\t"));
}

module.exports = { readAddressList, storeAddressList }
