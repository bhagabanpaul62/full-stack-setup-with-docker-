import { boolean, pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { timeStamp } from "../helper/timestamps.schema";

const role = pgEnum('role',['admin','user'])

export const users = pgTable('users' ,{
    id:uuid('id').defaultRandom().primaryKey(),
    name:varchar('name',{length:255}).notNull(),
    email:varchar('email',{length:255}).notNull(),
    role:role('role').default('user'),
    googleId:varchar('google_id',{length:1000}).unique(),
    photoUrl:varchar('photo_url',{length:1000}),
    isActive:boolean('is_active'),
    ...timeStamp,   
})