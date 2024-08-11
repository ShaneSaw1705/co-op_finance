import { GroupData } from "@/app/models/group";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const sendPayload = async (groupDetails: GroupData) => {
  try {
    axios.post('/api/v1/groups/creategroup', groupDetails)
  } catch (error) {
    console.error(error)
  }
}

export function useCreateGroup() {
  return useMutation({
    mutationKey: ["create-group"],
    mutationFn: sendPayload
  })
}