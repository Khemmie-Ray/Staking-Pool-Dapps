// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Import ERC20 token implementation from OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardToken is ERC20 {
    constructor() ERC20("F0rtToken", "FTKT") {
        _mint(msg.sender, 10**4 * 10**18);
    }
}