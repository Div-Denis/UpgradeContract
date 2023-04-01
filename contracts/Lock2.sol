//SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

import "./Lock.sol";

contract Lock2 is Lock {

    //将存储的值加1
    function increment() public {
        store(retrieve() + 1);
    }

}