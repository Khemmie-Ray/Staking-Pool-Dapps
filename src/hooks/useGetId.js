import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { ethers } from "ethers";
import { getProvider } from "../constants/providers";
import { getStakingPoolContract , getStakeTokenContract } from "../constants/contracts";
import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
  } from "@web3modal/ethers/react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

  const useApproval = () => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
  
    return useCallback(async () => {
      if (!isSupportedChain(chainId)) return console.error("Wrong network");
    //   if (!isAddress(address)) return console.error("Invalid address");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();

      const contract = getStakingPoolContract(signer);
        
      try {
        const getPoolTx= await stakeTokenContract.approve();
        console.log("Approve transaction: ", approveTx);
        const receipt = await approveTx.wait()
  
        console.log("receipt: ", receipt);
  
        if (receipt.status) {
          return toast.success("Approval successful!", {
              position: "top-center",
            });
        }
  
        toast.error("Approval failed!", {
          position: "top-center",
        });
      } catch (error) {
    //   let errorText;
      toast.error("error", error)
      console.error("ERROR:", error)
       
      }
    }, [chainId, walletProvider]);
  };

export default useApproval;