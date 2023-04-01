//SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

import './Lock2.sol';

contract Lock3 is Lock2{
    string public name;

    event NameChanged(string name);

    function setName(string memory _name) public {
        name = _name;
        emit NameChanged(name);
    }


}