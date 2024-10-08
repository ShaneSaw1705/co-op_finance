import { serial, text, timestamp, pgTable, integer } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: text("name"),
  role: text("role").$type<"admin" | "customer">(),
  authId: text("auth_id"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at"),
});

export const group = pgTable('group', {
  id: serial('id').primaryKey(),
  name: text('name'),
  description: text('description'),
  ownerId: integer('owner_id'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
})

export const groupUser = pgTable('group_user', {
  id: serial('id').primaryKey(),
  groupId: integer('group_id'),
  userId: integer('user_id'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
})