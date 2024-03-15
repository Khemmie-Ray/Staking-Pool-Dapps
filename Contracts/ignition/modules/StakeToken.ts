import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const StakeTokenModule = buildModule("StakeTokenModule", (m) => {

    const stakeToken = m.contract("StakeToken");
  
    return { stakeToken };
  });

export default StakeTokenModule;