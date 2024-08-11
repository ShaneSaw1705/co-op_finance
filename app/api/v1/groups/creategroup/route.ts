import { GroupData } from "@/app/models/group"

export async function POST(req: Request) {
  let group: GroupData;

  try {
    group = await req.json() as GroupData;
  } catch (error) {
    return new Response('Invalid or missing JSON data', { status: 400 });
  }

  // Now you can use 'group' as a GroupData type
  return new Response('working!' + group, { status: 200 });
}
