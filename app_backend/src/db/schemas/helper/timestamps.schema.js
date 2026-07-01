import { timestamp } from 'drizzle-orm/pg-core';

export const timeStamp = {
    updateAt: timestamp('update_at').$onUpdate(() => new Date()),
    createAt: timeStamp('create_at').defaultNow().notNull(),
    deletedAt: timeStamp('delete_at'),
};
