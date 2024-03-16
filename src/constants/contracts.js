import { ethers } from "ethers";
import Abi from "./stakingpool.json"
import StakeAbi from "./stakeToken.json"

export const getStakingPoolContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_contract_address,
        Abi,
        providerOrSigner
    );

    export const getStakeTokenContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_Stake_contract_address,
        StakeAbi,
        providerOrSigner
    );
