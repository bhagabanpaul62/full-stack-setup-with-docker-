import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { users } from "./users.schema";
import { timeStamp } from "../helper/timestamps.schema";

export const refreshToken = pgTable('refresh_token',{
    id:uuid('id').defaultRandom().primaryKey(),
    token:varchar('token'),
    userId:uuid('user_id').references(()=> users.id ),
    ...timeStamp
})