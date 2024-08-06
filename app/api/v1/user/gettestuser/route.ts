import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { user } from '@/app/database/schema';
import { eq } from 'drizzle-orm';

export async function GET(req: Request) {
  const sql = neon(process.env.DATABASE_URL!);
  const db = drizzle(sql);
  const userObj = await db.select().from(user).where(eq(user.id, 1))
  if (userObj === undefined) return new Response('User not found', { status: 404 })
  return new Response(JSON.stringify(userObj[0]), { status: 200 })
}