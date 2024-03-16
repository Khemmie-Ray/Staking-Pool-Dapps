// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Import ERC20 token implementation from OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StakeToken is ERC20 {
    constructor() ERC20("AnchorToken", "ANKT") {
        _mint(msg.sender, 10**8 * 10**18);
    }
}