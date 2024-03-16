import { SUPPORTED_CHAIN } from "../connection";
import { getStakingPoolContract } from "../constants/contracts";
import { getProvider } from "../constants/providers";

export const isSupportedChain = (chainId) =>
    Number(chainId) === SUPPORTED_CHAIN;

export const getReadWriteStakeContract = async (provider) => {
    const readWriteProvider = getProvider(provider);

    const signer = await readWriteProvider.getSigner();

    return getStakingPoolContract(signer);
};
