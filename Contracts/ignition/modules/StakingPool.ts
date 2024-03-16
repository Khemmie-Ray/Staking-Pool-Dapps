import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StakingPoolModule = buildModule("StakingPoolModule", (m) => {

  const stakingPool = m.contract("StakingPool", ["0x42225F3EcF57B638e6840460b716430D51292EB7", "0x584d7F93967fc5D13015B5f5F4c4c2B33B5b7d71"]);

  return { stakingPool };
});

export default StakingPoolModule;
