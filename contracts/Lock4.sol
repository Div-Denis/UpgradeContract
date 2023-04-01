//SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

import "./Lock2.sol";

contract Lock4 is Lock2{
    string private name;

    event NameChangeed(string name);

    function setName(string memory _name) public {
        name = _name;
        emit NameChangeed(name);
    }

    //获取name的时候加上前缀
    function getName() public view returns(string memory){
        return string(abi.encodePacked("Name:", name));
    }

}