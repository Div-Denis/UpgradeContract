// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Lock is Initializable{

   uint256 public constant MY_CONSTANT = 42;

   uint256 public value;

   //在值被修改时发出事件
   event ValueChanged(uint256 nerValue);

   //初始化函数
   function initialize(uint256 _initValue ) public initializer {
    value = _initValue;
   }

   function getConstant() public pure returns(uint256){
    return MY_CONSTANT;
   }

   
   //创建一个新的存储
   function store(uint256 newValue) public {
    value = newValue;
    emit ValueChanged( newValue);
   }
   
   //返回存储的最后一个值
   function retrieve() public view returns(uint256) {
    return value;
   }

}
