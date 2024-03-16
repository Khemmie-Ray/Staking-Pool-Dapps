import { Dialog, Text, Flex, TextField, Button } from "@radix-ui/themes"
import useCreatePool from "../hooks/useCreatePool"
import { useState } from "react"

const DialogBox = () => {
  const [rewardTime, setRewardTime] = useState("")
  const handleCreatePool = useCreatePool(rewardTime)

  return (
    <Dialog.Root>
  <Dialog.Trigger>
    <Button className="bg-gradient-to-r from-[#1a5970] to-[#a499cc] p-6 mt-4">Create New Pools</Button>
  </Dialog.Trigger>

  <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>Pool Details</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      Details about the stake pools
    </Dialog.Description>

      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          RewardTime
        </Text>
        <TextField.Input
          defaultValue="86400"
          placeholder="86400"
          onChange={(e) => setRewardTime(e.target.value)}
        />
      </label>

    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft" className="bg-gradient-to-r from-gray-400 to-black text-white">
          Cancel
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button className="bg-gradient-to-r from-[#1a5970] to-[#a499cc]" onClick={handleCreatePool}>Save</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
  )
}

export default DialogBox