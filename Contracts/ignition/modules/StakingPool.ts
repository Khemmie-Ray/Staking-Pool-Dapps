import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StakingPoolModule = buildModule("StakingPoolModule", (m) => {

  const stakingPool = m.contract("StakingPool", ["0x02004c1CB9BAF072Cde02F0b8A1111A25E6ED5a7", "0x4D44A69C08296eD049681a312fa3fACBD0De65c1"]);

  return { stakingPool };
});

export default StakingPoolModule;
