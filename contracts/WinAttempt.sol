// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface Contract {
    function attempt() external;
}

contract WinAttempt {
    address winContract;

    constructor(address _winContract) {
        winContract = _winContract;
    }

    function attempt() external {
        Contract(winContract).attempt();
    }
}