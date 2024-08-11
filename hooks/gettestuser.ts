import { User } from "@/app/models/user";
import { useQuery } from "@tanstack/react-query";

export function useTestUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: GetTestUser
  })
}

//TODO: Create end point for fetching groups
export function useGroups() {
  return useQuery({
    queryKey: ['groups'],
    queryFn: async () => {
      const user: User = await GetTestUser()
      const id = user.id
    }
  })
}

export async function GetTestUser(): Promise<User> {
  //Fetchs my test user from my gettestuser endpoint in the backend
  const url = process.env.NEXT_PUBLIC_API_URL
  const response = await axios.get<User>(`${url}/api/v1/user/gettestuser`)
  return response.data
}