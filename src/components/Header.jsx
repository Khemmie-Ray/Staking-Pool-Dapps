import React from 'react'
import DialogBox from './DialogBox'
import useApproval from '../hooks/useApproval'
// import { useState } from 'react'

const Header = () => {
    // const [contractAddress, setContractAddress] = useState("")
    const handleApproval = useApproval()
  return (
    <header className='flex justify-between p-8 items-center'>
        <h2>StakingPool</h2>
        <button onClick={handleApproval}>Approve</button>
        <DialogBox />
        <w3m-button />
    </header>
  )
}

export default Header